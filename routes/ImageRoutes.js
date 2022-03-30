const express = require("express");

const router = express.Router();

const AWS = require("aws-sdk");
const multiparty = require("multiparty");

/**
 * Helper method which takes the request object and returns a promise with a data.
 */
const getDataFromRequest = (req) =>
  new Promise(async (resolve, reject) => {
    const form = new multiparty.Form();
    await form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      const bucketname = fields.bucketname[0];
      const subfoldername = fields.subfoldername[0];
      const file = files["file"][0]; // get the file from the returned files object
      if (!file) reject("File was not found in form data.");
      else
        resolve({
          file,
          bucketname,
          subfoldername,
        });
    });
  });

/**
 * Helper method which takes the request object and returns a promise with the AWS S3 object details.
 */
const uploadFileToS3Bucket = (
  file,
  bucketname,
  subfoldername,
  options = {}
) => {
  const s3 = new AWS.S3();

  // turn the file into a buffer for uploading
  const buffer = readFileSync(file.path);

  var originalname = file.originalFilename;
  var attach_split = originalname.split(".");
  var name = attach_split[0];
  // generate a new random file name
  const fileName = name;

  // the extension of your file
  const extension = extname(file.path);

  console.log(`${fileName}${extension}`);

  const params = {
    Bucket: bucketname, //Bucketname
    ACL: "private", //Permission
    Key: join(`${subfoldername}/`, `${fileName}${extension}`), // File name you want to save as in S3
    Body: buffer, // Content of file
  };

  // return a promise
  return new Promise((resolve, reject) => {
    return s3.upload(params, (err, result) => {
      if (err) reject(err);
      else resolve(result); // return the values of the successful AWS S3 request
    });
  });
};

router.post("/", upload.single("file"), async (req, res) => {
  try {
    // extract the file from the request object
    const { file, bucketname, subfoldername } = await getDataFromRequest(req);

    // Upload File to specified bucket
    const { Location, ETag, Bucket, Key } = await uploadFileToS3Bucket(
      file,
      bucketname,
      subfoldername
    );

    let response = {};
    res["Location"] = Location;
    response["ETag"] = ETag;
    response["Bucket"] = Bucket;
    response["Key"] = Key;

    res.status(200).json(response);
  } catch (error) {
    throw error;
  }
});

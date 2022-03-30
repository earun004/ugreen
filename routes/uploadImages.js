const express = require("express");
const router = express.Router();
const aws = require("aws-sdk");
// const config = require("../config");
// console.log(config);
const dotenv = require("dotenv");

dotenv.config("./config/config.env");

const md5 = require("md5");
const S3_BUCKET = process.env.S3_BUCKET;
// console.log(process.env.S3_BUCKET);
aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

// rename a file
const renameImage = (file) =>
  md5(Date.now()) + "." + file.name.replace(/ /g, "-").split(".").pop();

// Upload your image to S3
const uploadToS3 = (file, res) => {
  s3.createBucket(() => {
    var params = {
      Bucket: "urbangreen-images",
      Key: renameImage(file),
      Body: file.data,
    };
    // console.log("calling");
    s3.upload(params, (err, data) => {
      if (err) {
        console.log("Error: ", err.message);
        res.status(422).send(err);
      }
      // return the S3's path to the image
      console.log(data);
      res.json(data.Location);
    });
  });
};

router.post("/", (req, res, next) => {
  console.log(req.files);
  // console.log("calling");
  uploadToS3(req.files.photo, res);
});

module.exports = router;

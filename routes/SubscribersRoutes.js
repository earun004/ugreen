const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URL
// );
// oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const Subscriber = require("../models/SubscriptionModels.js");
const auth = require("../middleware/auth.js");

router.post("/sendMail", async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await Subscriber.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json(`User Already Exist With this email: ${email}`);
    }
    const user = await new Subscriber({ email });

    // mail sending through nodemailer

    // const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com", // hostname
      secureConnection: false,
      port: 587,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: process.env.THE_EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "enquiry.multiplexurbangreen.com@gmail.com",
    //     pass: "Techraven",
    //   },
    // });

    const options = {
      from: "enquiry.multiplexurbangreen.com@gmail.com",
      to: `${email}`,
      subject: "Subscription for MULTIPLEX URBAN GREEN INDIA PVT. LTD.",
      text: "MULTIPLEX URBAN GREEN INDIA PVT. LTD.!",
      html: "<h1>MULTIPLEX URBAN GREEN INDIA PVT. LTD.</h1>Hello, Thanks for subscribing. You will get notification of latest articles posted on our website. Please do not reply to this email. <br/> <b>Thankyou!</b>",
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " + info.response);
    });

    // Mail sent ends
    user.save();
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wong in creating new user");
  }
});

router.get("/", async (req, res) => {
  const category = await Subscriber.find();
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
});

router.delete("/:id", auth, async (req, res) => {
  const id = req.params.id;
  try {
    await Subscriber.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

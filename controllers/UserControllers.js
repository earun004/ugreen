const bcrypt = require("bcrypt");
const jws = require("jsonwebtoken");
const Users = require("../models/UserModels.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

dotenv.config({ path: "./config/config.env" });

const secret = process.env.SECRET;

exports.signup = async (req, res, cb) => {
  const { email, password, name, mobile } = req.body;
  try {
    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json(`User Already Exist With this email: ${email} `);
    }
    const user = await new Users({ email, password, name, mobile });
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(password, salt);
    user.save();
    const token = jws.sign(
      { email: user.email, password: user.password },
      secret,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ user, token });
    cb(null, user);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wong in creating new user");
  }
};

exports.signin = async (req, res) => {
  const { email, password, name } = req.body;
  // console.log(req.body);
  try {
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json(`User Does Not Exist With this email: ${email}`);
    }
    const passwordCompare = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordCompare) {
      return res.status(400).send("Password Incorrect.");
    }
    const token = jws.sign(
      { email: existingUser.email, password: existingUser.password },
      secret,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).send({ token, user: existingUser });
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wong in Signup user");
  }
};

exports.getUserInfo = async (req, res) => {
  const post = req.params.id;
  const getPost = await Users.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching User");
  }
};

exports.fetchUsers = async (req, res) => {
  const testimonial = await Users.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Users");
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { mobile, name, password } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);
    // console.log(await bcrypt.hash(updateUser.password, salt));
    const updateUser = { mobile, name, password: hashPassword };
    await Users.findByIdAndUpdate(id, updateUser, {
      new: true,
    });
    res.json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.updatePassword = async (req, res) => {
  const email = req.params.email;

  try {
    const existingUser = await Users.findOne({ email });
    // console.log(req.body);
    if (!existingUser) {
      return res
        .status(400)
        .json(`User Does Not Exist With this email: ${email}`);
    }

    const updatePassword = req.body;
    const salt = await bcrypt.genSalt(12);
    const encryptPassword = {
      password: await bcrypt.hash(updatePassword.password, salt),
    };
    // console.log(encryptPassword);

    await Users.findOneAndUpdate({ email: email }, encryptPassword, {
      new: true,
    });
    res.json(encryptPassword);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating password");
  }
};

exports.sendForgotMail = async (req, res) => {
  const { email } = req.body;
  try {
    // mail sending through nodemailer
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
      from: process.env.THE_EMAIL,
      to: email,
      subject: "MULTIPLEX URBAN GREEN INDIA PVT. LTD.",
      text: "MULTIPLEX URBAN GREEN INDIA PVT. LTD.!",
      html: `To reset your password <a href='${process.env.REDIRECT_DOMINIE}/forgotPassword'>Click Here</a><br/>Thankyou!`,
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " + info.response);
    });

    // Mail sent ends
    res.status(201).json({ email });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can't Send Mail");
  }
};

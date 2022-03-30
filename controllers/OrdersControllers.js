const Orders = require("../models/OrderModels.js");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

exports.createOrder = async (req, res) => {
  const testimonials = req.body;
  // console.log(req.body);
  const newOrders = new Orders(testimonials);

  try {
    // console.log(newOrders);

    await newOrders.save();
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
      to: `${newOrders.user.userEmail}, enquiry@multiplexurbangreen.com `,
      subject: "MULTIPLEX URBAN GREEN INDIA PVT. LTD.",
      text: "MULTIPLEX URBAN GREEN INDIA PVT. LTD.!",
      html: `“Thank you for placing an order from Multiplex Urban Green India Pvt Ltd., We have received your Order. Your Order ID is MUG00${
        newOrders._id + 1
      }.<br />
      For any other information and order related queries Call or WhatsApp us at +91 90369 99422.
       `,
    };

    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " + info.response);
    });

    // Mail sent ends
    res.status(201).json(newOrders);
    // console.log(newOrders);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Order");
  }
};

exports.fetchOrder = async (req, res) => {
  const testimonial = await Orders.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Order");
  }
};

exports.deleteOrder = async (req, res) => {
  const id = req.params.id;
  try {
    await Orders.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateOrder = async (req, res) => {
  const id = req.params.id;
  const updateOrder = req.body;
  // if (!mongoose.Types.ObjectId.isValid(id))
  //   return res.status(404).send(`No post with id: ${id}`);

  try {
    await Orders.findByIdAndUpdate(id, updateOrder, {
      new: true,
    });
    res.json(updateOrder);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleOrder = async (req, res) => {
  const post = req.params.id;
  const getPost = await Orders.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.getOrders = async (req, res) => {
  // console.log(req.query);
  const category = await Orders.find({ productId: req.query.id }).sort({
    title: -1,
  });
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.getUserOrders = async (req, res) => {
  const category = await Orders.find({ userId: Object(req.params.id), x: 1 });
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

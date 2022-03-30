const Address = require("../models/AddressModels.js");
const mongoose = require("mongoose");

exports.createAddress = async (req, res) => {
  const testimonials = req.body;
  // console.log(req.body);
  const newAddress = new Address(testimonials);

  try {
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Address");
  }
};

exports.fetchAddress = async (req, res) => {
  const testimonial = await Address.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Address");
  }
};

exports.deleteAddress = async (req, res) => {
  const id = req.params.id;
  try {
    await Address.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateAddress = async (req, res) => {
  const id = req.params.id;
  const updateAddress = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Address.findByIdAndUpdate(id, updateAddress, {
      new: true,
    });
    res.json(updateAddress);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleAddress = async (req, res) => {
  const post = req.params.id;
  const getPost = await Address.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.getAddress = async (req, res) => {
  // console.log(req.query);
  const category = await Address.find({ productId: req.query.id }).sort({
    title: -1,
  });
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.getUserAddress = async (req, res) => {
  const category = await Address.find({ userId: Object(req.params.id), x: 1 });
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

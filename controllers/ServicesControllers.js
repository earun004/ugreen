const Services = require("../models/ServicesModels.js");
const mongoose = require("mongoose");

exports.createService = async (req, res) => {
  const testimonials = req.body;
  //   console.log(req.body);

  const newServices = new Services(testimonials);
  try {
    await newServices.save();
    res.status(201).json(newServices);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Service");
  }
};

exports.fetchService = async (req, res) => {
  const testimonial = await Services.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Service");
  }
};

exports.deleteService = async (req, res) => {
  const id = req.params.id;
  try {
    await Services.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateService = async (req, res) => {
  const id = req.params.id;
  const updateService = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Services.findByIdAndUpdate(id, updateService, {
      new: true,
    });
    res.json(updateService);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleService = async (req, res) => {
  const post = req.params.id;
  const getPost = await Services.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.getServices = async (req, res) => {
  // console.log(req.query);
  const category = await Services.find({ productId: req.query.id }).sort({
    title: -1,
  });
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

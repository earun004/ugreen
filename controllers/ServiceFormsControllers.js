const ServiceForms = require("../models/ServiesFormRoutes.js");
const mongoose = require("mongoose");

exports.createServiceForm = async (req, res) => {
  const testimonials = req.body;
  //   console.log(req.body);

  const newServiceForms = new ServiceForms(testimonials);
  try {
    await newServiceForms.save();
    res.status(201).json(newServiceForms);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new ServiceForm");
  }
};

exports.fetchServiceForm = async (req, res) => {
  const testimonial = await ServiceForms.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching ServiceForm");
  }
};

exports.deleteServiceForm = async (req, res) => {
  const id = req.params.id;
  try {
    await ServiceForms.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateServiceForm = async (req, res) => {
  const id = req.params.id;
  const updateServiceForm = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await ServiceForms.findByIdAndUpdate(id, updateServiceForm, {
      new: true,
    });
    res.json(updateServiceForm);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleServiceForm = async (req, res) => {
  const post = req.params.id;
  const getPost = await ServiceForms.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.getServiceForms = async (req, res) => {
  // console.log(req.query);
  const category = await ServiceForms.find({ productId: req.query.id }).sort({
    title: -1,
  });
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

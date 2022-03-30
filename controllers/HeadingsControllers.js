const Headings = require("../models/HeadingModels.js");
const mongoose = require("mongoose");

exports.createHeading = async (req, res) => {
  const testimonials = req.body;
  const newHeadings = new Headings(testimonials);

  try {
    await newHeadings.save();
    res.status(201).json(newHeadings);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Heading");
  }
};

exports.fetchHeading = async (req, res) => {
  const testimonial = await Headings.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Heading");
  }
};

exports.deleteHeading = async (req, res) => {
  const id = req.params.id;
  try {
    await Headings.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateHeading = async (req, res) => {
  const id = req.params.id;
  const updateHeading = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Headings.findByIdAndUpdate(id, updateHeading, {
      new: true,
    });
    res.json(updateHeading);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleHeading = async (req, res) => {
  const post = req.params.id;
  const getPost = await Headings.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.getThreeHeadings = async (req, res) => {
  const category = await Headings.find().sort({ title: -1 }).skip(0).limit(3);
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

const Reviews = require("../models/ReviewModels.js");
const mongoose = require("mongoose");

exports.createReview = async (req, res) => {
  const testimonials = req.body;
  // console.log(req.body);
  const newReviews = new Reviews(testimonials);

  try {
    await newReviews.save();
    res.status(201).json(newReviews);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Review");
  }
};

exports.fetchReview = async (req, res) => {
  const testimonial = await Reviews.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Review");
  }
};

exports.deleteReview = async (req, res) => {
  const id = req.params.id;
  try {
    await Reviews.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateReview = async (req, res) => {
  const id = req.params.id;
  const updateReview = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Reviews.findByIdAndUpdate(id, updateReview, {
      new: true,
    });
    res.json(updateReview);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleReview = async (req, res) => {
  const post = req.params.id;
  const getPost = await Reviews.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.getReviews = async (req, res) => {
  // console.log(req.query);
  const category = await Reviews.find({ productId: req.query.id }).sort({
    title: -1,
  });
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

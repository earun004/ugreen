const StoreBanners = require("../models/StoreBannerModels.js");
const mongoose = require("mongoose");

exports.createStoreBanner = async (req, res) => {
  const testimonials = req.body;
  const newStoreBanners = new StoreBanners(testimonials);

  try {
    await newStoreBanners.save();
    res.status(201).json(newStoreBanners);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new StoreBanner");
  }
};

exports.fetchStoreBanner = async (req, res) => {
  const testimonial = await StoreBanners.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching StoreBanner");
  }
};

exports.deleteStoreBanner = async (req, res) => {
  const id = req.params.id;
  try {
    await StoreBanners.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateStoreBanner = async (req, res) => {
  const id = req.params.id;
  const updateStoreBanner = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await StoreBanners.findByIdAndUpdate(id, updateStoreBanner, {
      new: true,
    });
    res.json(updateStoreBanner);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleStoreBanner = async (req, res) => {
  const post = req.params.id;
  const getPost = await StoreBanners.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.getThreeStoreBanners = async (req, res) => {
  const category = await StoreBanners.find()
    .sort({ title: -1 })
    .skip(0)
    .limit(3);
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

exports.searchByCategory = async (req, res) => {
  const post = req.query.name;
  const getPost = await StoreBanners.find({ displayedIn: post });

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

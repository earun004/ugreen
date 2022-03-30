const Blogs = require("../models/BlogModels.js");
const mongoose = require("mongoose");

exports.createBlog = async (req, res) => {
  const testimonials = req.body;
  const newBlogs = new Blogs(testimonials);

  try {
    await newBlogs.save();
    res.status(201).json(newBlogs);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Blog");
  }
};

exports.fetchBlog = async (req, res) => {
  const testimonial = await Blogs.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Blog");
  }
};

exports.deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    await Blogs.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateBlog = async (req, res) => {
  const id = req.params.id;
  const updateBlog = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Blogs.findByIdAndUpdate(id, updateBlog, {
      new: true,
    });
    res.json(updateBlog);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleBlog = async (req, res) => {
  const post = req.params.id;
  const getPost = await Blogs.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.getThreeBlogs = async (req, res) => {
  const category = await Blogs.find().sort({ title: -1 }).skip(0).limit(3);
  try {
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Categories");
  }
};

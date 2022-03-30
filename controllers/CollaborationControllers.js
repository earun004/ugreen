const Collaborations = require("../models/CollaborationModels.js");
const mongoose = require("mongoose");

exports.createCollaboration = async (req, res) => {
  const testimonials = req.body;
  const newCollaborations = new Collaborations(testimonials);

  try {
    await newCollaborations.save();
    res.status(201).json(newCollaborations);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in creating new Collaboration");
  }
};

exports.fetchCollaboration = async (req, res) => {
  const testimonial = await Collaborations.find();
  try {
    res.status(200).send(testimonial);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Collaboration");
  }
};

exports.deleteCollaboration = async (req, res) => {
  const id = req.params.id;
  try {
    await Collaborations.findByIdAndRemove(id);
    res.send("User Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.updateCollaboration = async (req, res) => {
  const id = req.params.id;
  const updateCollaboration = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await Collaborations.findByIdAndUpdate(id, updateCollaboration, {
      new: true,
    });
    res.json(updateCollaboration);
  } catch (error) {
    console.log(error);
    res.status(400).send("Some thing went wrong in updating post");
  }
};

exports.fetchSingleCollaboration = async (req, res) => {
  const post = req.params.id;
  const getPost = await Collaborations.findById(post);

  try {
    res.status(200).send(getPost);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Product");
  }
};

exports.getThreeCollaborations = async (req, res) => {
  const category = await Collaborations.find()
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

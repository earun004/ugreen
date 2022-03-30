const express = require("express");
const auth = require("../middleware/auth.js");
const Visitor = require("../models/VisitorsModel.js");
const router = express.Router();

router.post("/", async (req, res) => {
  let visitors = await Visitor.findOne({ name: "Visitors" });

  if (visitors == null) {
    // Creating a new default record
    const beginCount = new Visitor({
      name: "Visitors",
      count: 1,
    });
    beginCount.save();
    res.status(200).send("one person added");
  } else {
    visitors.count += 1;
    visitors.save();
    res.status(200).send(visitors);
  }
});

router.get("/", auth, async (req, res) => {
  const visitors = await Visitor.find();
  try {
    res.status(200).send(visitors);
  } catch (error) {
    console.log(error);
    res.status(409).send("Some thing went wrong in fetching Visitors");
  }
});

module.exports = router;

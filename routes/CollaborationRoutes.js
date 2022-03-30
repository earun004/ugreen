const express = require("express");
const {
  createCollaboration,
  fetchCollaboration,
  deleteCollaboration,
  updateCollaboration,
  fetchSingleCollaboration,
} = require("../controllers/CollaborationControllers.js");
const auth = require("../middleware/auth.js");

const router = express.Router();

router.post("/", createCollaboration);
router.get("/", fetchCollaboration);
router.get("/:id", fetchSingleCollaboration);
router.patch("/:id", auth, updateCollaboration);
router.delete("/:id", auth, deleteCollaboration);
module.exports = router;

const express = require("express");
const router = express.Router();
const coverLetterController = require("../Controllers/coverLetterController");

router.get("/", (req, res) => {
  console.log("test get");
  res.status(200);
  res.json({
    success: "Yes",
  });
});

router.post("/coverletter", coverLetterController.v1_auto_cl);

module.exports = router;

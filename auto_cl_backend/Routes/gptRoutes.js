const express = require("express");
const router = express.Router();
const coverLetterController = require("../Controllers/coverLetterController");

router.post("/coverletter", coverLetterController.v1_auto_cl);

module.exports = router;

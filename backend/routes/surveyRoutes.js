const express = require("express");
const surveyData = require("../controllers/surveyControllers");
const router = express.Router();

router.route("/survey").post(surveyData);

module.exports = router;

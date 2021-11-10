const Survey = require("../models/surveyModel");
const asyncHandler = require("express-async-handler");

const surveyData = asyncHandler(async (req, res) => {
  const { gender, age, weight, height, goalWeight } = req.body;

  const survey = await Survey.create({
    gender,
    age,
    weight,
    height,
    goalWeight,
  });

  if (survey) {
    res.status(201).json({
      _id: survey._id,
      gender: survey.gender,
      age: survey.age,
      weight: survey.weight,
      height: survey.height,
      goalWeight: survey.goalWeight,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }

  res.json({
    gender,
    age,
    weight,
    height,
    goalWeight,
  });
});

module.exports = surveyData;

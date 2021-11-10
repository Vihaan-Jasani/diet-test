const mongoose = require("mongoose");

const surveySchema = mongoose.Schema(
  {
    gender: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    weight: {
      type: Number,
      require: true,
    },
    height: {
      type: Number,
      require: true,
    },
    goalWeight: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;

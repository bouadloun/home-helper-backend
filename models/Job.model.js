const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    budget: {
      type: Number,
      required: [true, "Budget is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Job = model("Job", jobSchema);

module.exports = Job;

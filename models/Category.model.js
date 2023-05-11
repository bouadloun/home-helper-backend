const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

const Category = model("Category", categorySchema);

module.exports = Category;

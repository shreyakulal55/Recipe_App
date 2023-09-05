const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    recipe_name: {
      type: "string",
      required: true,
      Unique: true,
    },
    ingredients: {
      type: "string",
      required: true,
    },
    instructions: {
      type: "string",
      required: true,
      Unique: true,
    },
    time_to_complete: {
      type: "string",
      required: true,
    },
    creator_name: {
      type: "string",
      required: true,
    },
    recipe_image: {
      type: String,
      required: false,
  },
    cusine_type: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("recipes", RecipeSchema);

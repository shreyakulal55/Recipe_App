const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    recipe_name: {
        type: 'string',
        required: true,
        Unique: true,
    },
    recipe_images: {
        type: 'array',
        required: false,
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
    creator_id: {
        type: "string",
        required: false,
        Unique: true,
    },
    cusine_type: {
        type: "string",
        required: true,
    }
});

module.exports = mongoose.model("recipes", RecipeSchema);
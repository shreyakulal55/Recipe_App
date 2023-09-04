const recipeModel = require("../models/recipeModel");
const { isValid, isValidBody } = require("./validator");
const jwt = require("jsonwebtoken");


// --------------- Create recipe -----------------
exports.createRecipe = async (req, res) => {
    try{
        const data = req.body;
        const recipeModel = new RecipeModel(data);
        const response = await recipeModel.save();
        res.status(200).json(response);
    }catch(error){
        res.status(500).send("error: " + error);
    }
}



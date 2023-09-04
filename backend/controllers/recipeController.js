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
    // recipe_name Validation
    if (!isValid(recipe_name)) {
        return res.status(400).send({ msg: "recipe_name is Required" });
      }
  
  
      let duplicate = await UserModel.findOne({ recipe_name });
      if (duplicate) {
        return res.status(400).send({ msg: "Recipe Name Already Exist" });
      }
  
      // recipe_images Validation
      if (!isValid(recipe_images)) {
        return res.status(400).send({ msg: "recipe_images is Required" });
      }
  
      // ingredients validation
      if (!isValid(ingredients)) {
        return res.status(400).send({ msg: "ingredients is Required" });
      }
    // instructions validation
      if (!isValid(instructions)) {
        return res.status(400).send({ msg: "instructions is Required" });
      }
       // time_to_complete validation
      if (!isValid(time_to_complete)) {
        return res.status(400).send({ msg: "time_to_complete is Required" });
      }
       // creator_id validation
      if (!isValid(creator_id)) {
        return res.status(400).send({ msg: "creator_id is Required" });
      }
       // cusine_type validation
      if (!isValid(cusine_type)) {
        return res.status(400).send({ msg: "cusine_type is Required" });
      }
   

   



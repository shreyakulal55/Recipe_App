


const RecipeModel = require("../models/recipeModel");
const { isValid, isValidBody } = require("./validator");

// --------------- Create recipe -----------------
exports.createRecipe = async (req, res) => {
  try {
    const data = req.body;
    if (!isValidBody(data)) {
      return res.status(400).send({ msg: "No Data Provided" });
    }
    let {
      recipe_name,
      ingredients,
      instructions,
      time_to_complete,
      cusine_type,
    } = data;

    if (!isValid(recipe_name)) {
      return res.status(400).send({ msg: "Recipe Name  is Required" });
    }
    if (!isValid(ingredients)) {
      return res.status(400).send({ msg: "Ingredients  is Required" });
    }
    if (!isValid(instructions)) {
      return res.status(400).send({ msg: "Instructions  is Required" });
    }

    if (!isValid(time_to_complete)) {
      return res.status(400).send({ msg: "Time to complete  is Required" });
    }
    if (!isValid(cusine_type)) {
      return res.status(400).send({ msg: "Cusin Type is Required" });
    }

    let createdRecipe = await RecipeModel.create({ ...data });
    return res.status(201).send({
      status: true,
      msg: "Recipe Created  Sucessfully",
      data: createdRecipe,
    });
  } catch (error) {
    res.status(500).send("error: " + error);
  }
};

// --------------- Update recipe -----------------

const updateRecipe = async function (req, res) {
  try {
      let recipeId = req.params.id;
      let requestBody = req.body
      
      if(!recipeId){
      return res.status(400).send({status:false, message:"recipeId is Required"})
      }

      if (!isValidRequestBody(requestBody)) {
          return res.status(400).send({ status: false, message: "No data provided" });
      }

      if (!isValidObjectId.test(recipeId)) {
          return res.status(400).send({ status: false, message: "Please enter the valid recipeId" })
      }

      let findRecipeId = await recipeModel.findById({ _id: recipeId })
      if (!findRecipeId)
          return res.status(404).send({ status: false, msg: "RecipeId Not Found" })

      let is_Deleted = findRecipeId.isDeleted
      if(is_Deleted == true) 
      return res.status(400).send({status:false, message:"Recipe is already Deleted"})

      if (findRecipeId.userId != req.userId) {
          return res.status(403).send({ status: false, message: "You Are Not Unauthorized" });
      }

      let { recipe_name, cusine_type } = requestBody

      let duplicateTrecipe_name = await recipeModel.findOne({ recipe_name });
      if (duplicateTrecipe_name) {
          return res.status(400).send({ status: false, msg: "recipe_name already exist" });
      }

      let duplicatecusine_type = await recipeModel.findOne({ cusine_type });
      if (duplicatecusine_type) {
          return res.status(400).send({ status: false, msg: "cusine_type already exist" });
      }

      let updateRecipe = await recipeModel.findOneAndUpdate({ _id: recipeId }, { ...requestBody }, { new: true })
      return res.status(200).send({ status: true, message: "Recipe Data Updated Successfully", data: updateRecipe })

  } catch (error) {
      res.status(500).send({ status: false, message: error.message });

  }
}


const getRecipeById = async function (req, res) {
  try {
      let recipeId = req.params.id;

      if (!isValidObjectId.test(recipeId)) {
          return res.status(400).send({ status: false, message: "Please enter the valid recipeId" })
      }

      let findrecipeId = await recipeModel.findById({ _id: recipeId, isDeleted:false }).select({ cusine_type: 0 })
      if (!findrecipeId)
          return res.status(404).send({ status: false, msg: "No Recipe Data Found" })

      let { _id,recipe_name, recipe_images, ingredients, instructions, time_to_complete, cusine_type, isDeleted, deletedAt, releasedAt, createdAt, updatedAt } = findrecipeId

      
      let RecipeDetails = { _id,  recipe_name, recipe_images, ingredients, instructions, time_to_complete, cusine_type, isDeleted, deletedAt, releasedAt, createdAt, updatedAt, reviewsData }

      res.status(200).send({ status: true, msg: "All recipe", data: RecipeDetails })

  } catch (error) {
      res.status(500).send({ status: false, message: error.message });
  }
}


// --------------- Delete recipe -----------------

const deleteRecipe = async function (req, res) {
  try {
      let recipeId = req.params.id;

      if(!recipeId){
      return res.status(400).send({status:false, message:"recipeId is Required"})
      }

      if (!isValidObjectId.test(recipeId)) {
          return res.status(400).send({ status: false, message: "Please enter the valid recipeId" })
      }

      let findRecipeId = await recipeModel.findById({ _id: recipeId })
      if (!findRecipeId) {
          return res.status(404).send({ status: false, msg: "Book Not found" })
      }

      if (findRecipeId.userId != req.userId) {
          return res.status(403).send({ status: false, message: "You Are Not Unauthorized" });
      }

      let isDeletedRecipe = findRecipeId.isDeleted
      if (isDeletedRecipe == true) {
          return res.status(400).send({ status: false, msg: "recipeId is already deleted" })
      } else {
          const deleteRecipe = await recipeModel.findOneAndUpdate({ _id: recipeId }, { $set: { isDeleted: true, deletedAt: new Date() } }, { new: true })
          return res.status(200).send({ status: true, message: "Book Data Deleted Successfully", data: deleteRecipe })
      }

  } catch (error) {
      res.status(500).send({ status: false, message: error.message });
  }
}


module.exports = { createRecipe,getRecipeById,   updateRecipe, deleteRecipe };
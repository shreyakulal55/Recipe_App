const RecipeModel = require("../models/recipeModel");
const { isValid, isValidBody } = require("./validator");
const mongoose = require("mongoose");

// --------------- Create recipe -----------------
const createRecipe = async (req, res) => {
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
      creator_name,
      
      cusine_type,
    } = data;

    // Recipe Name Validation
    if (!isValid(recipe_name)) {
      return res.status(400).send({ msg: "Recipe Name  is Required" });
    }

    let matchRecipe = await RecipeModel.findOne({ recipe_name });
    if (matchRecipe) {
      return res.status(400).send({ msg: "This recipe is already added" });
    }

    // Ingredients Validation
    if (!isValid(ingredients)) {
      return res.status(400).send({ msg: "Ingredients  is Required" });
    }

    // Instruction Validation
    if (!isValid(instructions)) {
      return res.status(400).send({ msg: "Instructions  is Required" });
    }

    let matchedInstruction = await RecipeModel.findOne({ instructions });
    if (matchedInstruction) {
      return res
        .status(400)
        .send({ msg: "This instruction is already for other recipe" });
    }

    // Time Validation
    if (!isValid(time_to_complete)) {
      return res.status(400).send({ msg: "Time to complete  is Required" });
    }

    // Creator Name
    if (!isValid(creator_name)) {
      return res.status(400).send({ msg: "Creator Name  is Required" });
    }

    // Cusin Type Validation
    if (!isValid(cusine_type)) {
      return res.status(400).send({ msg: "Cusin Type is Required" });
    }
      // recipe_image Validation
    // if (!isValid(recipe_image)) {
    //   return res.status(400).send({ msg: "recipe_image is Required" });
    // }

    let createdRecipe = await RecipeModel.create({
      recipe_name,
      ingredients,
      instructions,
      time_to_complete,
      creator_name,
     
      cusine_type,
    });
    return res.status(201).send({
      status: true,
      msg: "Recipe Created  Sucessfully",
      data: createdRecipe,
    });
  } catch (error) {
    res.status(500).send("error: " + error);
  }
};



// --------- Get Recipe ----------
// let GetRecipe = async (req, res) => {
//   let data = req.query;

//   let fetchRecipe = await RecipeModel.find();
//   return res
//     .status(200)
//     .send({ msg: "Recipe Details Found Sucessfully", data: fetchRecipe });
// };


let GetRecipe= async (req, res) => {
  try {
      const recipe = await RecipeModel.findById(req.params.id);
      if (!recipe ) {
        return res.status(404).json({ message: "Recipe not found" });
      }
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: "Error fetching Recipe by ID" });
    }
  };


//--------- Delete Recipe ----------
let DeleteRecipe = async (req, res) => {
  try {
      const deleteRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
      if (!deleteRecipe ) {
        return res.status(404).json({ success: false, message: "Recipe not found" });
      }
      res.status(200).json({ success: true, message: "Recipe deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  
};

//--------- Update Recipe ----------
let UpdateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const updatedRecipe = req.body;
    const result = await RecipeModel.findByIdAndUpdate(recipeId, updatedRecipe, {
      new: true,
    });
    if (!result) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(result);
  } catch (error) {
    console.error("Error updating Recipe", error);
    res.status(500).json({ message: "Error updating Recipe", error: error.message });
  }
};
let ViewRecipe = async (req, res, next) => {
        try {
          const recipe = await RecipeModel.find();
          res.json(recipe);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching recipe' });
        }
    };


module.exports = { createRecipe, GetRecipe, UpdateRecipe, DeleteRecipe,ViewRecipe };

// --------------- Delete recipe -----------------

// const deleteRecipe = async function (req, res) {
//   try {
//     let recipeId = req.params.id;

//     if (!recipeId) {
//       return res
//         .status(400)
//         .send({ status: false, message: "recipeId is Required" });
//     }

//     if (!isValidObjectId.test(recipeId)) {
//       return res
//         .status(400)
//         .send({ status: false, message: "Please enter the valid recipeId" });
//     }

//     let findRecipeId = await recipeModel.findById({ _id: recipeId });
//     if (!findRecipeId) {
//       return res.status(404).send({ status: false, msg: "Book Not found" });
//     }

//     if (findRecipeId.userId != req.userId) {
//       return res
//         .status(403)
//         .send({ status: false, message: "You Are Not Unauthorized" });
//     }

//     let isDeletedRecipe = findRecipeId.isDeleted;
//     if (isDeletedRecipe == true) {
//       return res
//         .status(400)
//         .send({ status: false, msg: "recipeId is already deleted" });
//     } else {
//       const deleteRecipe = await recipeModel.findOneAndUpdate(
//         { _id: recipeId },
//         { $set: { isDeleted: true, deletedAt: new Date() } },
//         { new: true }
//       );
//       return res.status(200).send({
//         status: true,
//         message: "Book Data Deleted Successfully",
//         data: deleteRecipe,
//       });
//     }
//   } catch (error) {
//     res.status(500).send({ status: false, message: error.message });
//   }
// };
// const getRecipeById = async function (req, res) {
//   try {
//     let recipeId = req.params.id;

//     if (!isValidObjectId.test(recipeId)) {
//       return res
//         .status(400)
//         .send({ status: false, message: "Please enter the valid recipeId" });
//     }

//     let findrecipeId = await recipeModel
//       .findById({ _id: recipeId, isDeleted: false })
//       .select({ cusine_type: 0 });
//     if (!findrecipeId)
//       return res
//         .status(404)
//         .send({ status: false, msg: "No Recipe Data Found" });

//     let {
//       _id,
//       recipe_name,
//       recipe_images,
//       ingredients,
//       instructions,
//       time_to_complete,
//       cusine_type,
//       isDeleted,
//       deletedAt,
//       releasedAt,
//       createdAt,
//       updatedAt,
//     } = findrecipeId;

//     let RecipeDetails = {
//       _id,
//       recipe_name,
//       recipe_images,
//       ingredients,
//       instructions,
//       time_to_complete,
//       cusine_type,
//       isDeleted,
//       deletedAt,
//       releasedAt,
//       createdAt,
//       updatedAt,
//       reviewsData,
//     };

//     res
//       .status(200)
//       .send({ status: true, msg: "All recipe", data: RecipeDetails });
//   } catch (error) {
//     res.status(500).send({ status: false, message: error.message });
//   }
// };
// --------------- Update recipe -----------------

// const updateRecipe = async function (req, res) {
//   try {
//     let recipeId = req.query.recipeId;
//     console.log(recipeId);
//     let data = req.body;
//     if (!isValidBody(data)) {
//       return res
//         .status(400)
//         .send({ status: false, message: "No data provided" });
//     }

//     // if (!mongoose.isValidObjectId(recipeId)) {
//     //   return res
//     //     .status(400)
//     //     .send({ status: false, message: "Please enter the valid recipeId" });
//     // }

//     let findRecipeId = await RecipeModel.findById({ recipeId });
//     if (!findRecipeId) {
//       return res.status(404).send({ status: false, msg: "RecipeId Not Found" });
//     }

//     let updateRecipe = await RecipeModel.findOneAndUpdate(
//       { _id: recipeId },
//       { ...requestBody },
//       { new: true }
//     );
//     return res.status(200).send({
//       status: true,
//       message: "Recipe Data Updated Successfully",
//       data: updateRecipe,
//     });
//   } catch (error) {
//     res.status(500).send({ status: false, message: error.message });
//   }
// };

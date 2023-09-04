const express = require("express");
const router = express.Router();

const RecipeController=require("../controllers/recipeController");
const UserController = require("../controllers/userController");
const { verifyToken } = require("../controllers/middleware");

// User API
router.post("/user", UserController.createUser);
router.post("/login", UserController.loginUser);

// Recipe API
router.post("/createRecipe", verifyToken,RecipeController.createRecipe );
router.delete("/deleteRecipe",RecipeController.deleteRecipe);
router.put("/UpdateRecipe", RecipeController.UpdateRecipe);


module.exports = router;

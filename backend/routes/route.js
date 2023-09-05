const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const { verifyToken } = require("../controllers/middleware");
const RecipeController = require("../controllers/recipeController");



// User API
router.post("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);

// Recipe API
router.post("/createRecipe", RecipeController.createRecipe);
router.put("/updateRecipe",RecipeController.UpdateRecipe);
router.delete("/deleteRecipe",RecipeController.DeleteRecipe);
router.get("/getRecipe",RecipeController.getrecipe);




module.exports = router;

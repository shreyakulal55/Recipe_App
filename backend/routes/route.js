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
router.put("/recipe/:id",RecipeController.UpdateRecipe);
router.delete("/recipe/:id",RecipeController.DeleteRecipe);
router.get("/recipe/:id",RecipeController.GetRecipe);
router.get("/recipe",RecipeController.ViewRecipe);

module.exports = router;

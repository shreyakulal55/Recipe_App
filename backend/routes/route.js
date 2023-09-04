const express = require("express");
const router = express.Router();


const UserController = require("../controllers/userController");
const { verifyToken } = require("../controllers/middleware");

// User API
router.post("/user", UserController.createUser);
router.post("/login", UserController.loginUser);

// Recipe API
router.post("/createRecipe", verifyToken, RecipeController.createRecipe );

module.exports = router;

import React, { useState } from "react";
import { recipeControllerObj } from "../controller/recipe.controller";

function Addrecipe() {
  const [recipeInput, setRecipeInput] = useState({
    recipe_name: "",
    recipe_images: "",
    ingredients: "",
    instructions: "",
    time_to_complete: "",
    cusine_type: "",
    creator_name: "",
  });
  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRecipeInput({ ...recipeInput, [name]: value });
  };

  const create = async () => {
    try {
      console.log(recipeInput);
      const response = await recipeControllerObj.createRecipe(recipeInput);
      console.log(response);
    } catch (err) {}
  };

  return (
    <section className="creater-section">
      <h1>Create new recipe</h1>
      <div className="form-group">
        <p>Recipe Name</p>
        <input type="text" name="recipe_name" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <p>Recipe Images</p>
        <input type="text" name="recipe_images" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <p>Recipe Ingredients</p>
        <input type="text" name="ingredients" />
      </div>
      <div className="form-group">
        <p>Recipe Instruction</p>
        <input type="text" name="instructions" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <p>Recipe Time to Complete</p>
        <input type="text" name="time_to_complete" onChange={onInputChange} />
      </div>
      <div className="form-group">
        <p>Recipe Cusine Type</p>
        <input type="text" name="cusine_type" onChange={onInputChange} />
      </div>
      <button onClick={() => create()}>Create recipe</button>
    </section>
  );
}
export default Addrecipe;
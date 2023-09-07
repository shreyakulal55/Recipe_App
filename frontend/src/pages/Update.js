import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import {  toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import "./update.css"
function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setrecipe] = useState({
    recipe_name:"",
    ingredients: "",
    instructions: "",
    time_to_complete: "",
    creator_name: "",
    cusine_type: "",
  });

  useEffect(() => {
    Axios.get(`http://localhost:3001/recipe/${id}`).then((res) => {
      setrecipe(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setrecipe((prevrecipe) => ({
      ...prevrecipe,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setrecipe({
          ...recipe,
          recipe_image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.put(`http://localhost:3001/recipe/${id}`, recipe);
      console.log("Recipe updated:", response.data);
      if (response.status === 200) {
        toast.success("Recipe updated successfully", {
          position: "bottom-left",
        });
        setTimeout(() => {
          navigate("/view");
        }, 1000);
      } else {
        toast.error("Recipe update failed", {
          position: "bottom-left",
        });
      }
    } catch (error) {
      console.error("Error updating recipe:", error);
      toast.error("Error updating recipe", {
        position: "bottom-left",
      });
    }
  };
  return (
<>
<center>
<div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
        
          <form   onSubmit={handleUpdate} >
            <h1 className="heading">Update</h1>
            <br className="break"></br>
            <img src={recipe.recipe_image} className="card-img-top" alt="Card" />
            <br></br>
            <hr></hr>
            <div className="formbold-input-flex">
                    <label className="formbold-form-label">
                    image
                    </label>
                    <input
                      type="file"
                      className="formbold-form-input"
                      id="recipe_image"
                      placeholder='.jpeg file'
                      onChange={handleImageChange}
                      accept="image/*"
                    ></input>
                  </div>
              <div className="formbold-input-flex">
                <div>
                    <input
                     type="text"
                     name="recipe_name"
                     value={recipe.recipe_name}
                     onChange={handleInputChange}
                    
                  
                     className="formbold-form-input"
                     />
                    <label  className="formbold-form-label">Recipe Name</label>
                </div>
                <div>
                    <input
                    className="formbold-form-input"
                    type="text"
                    name="ingredients"
                    value={recipe.ingredients}
                    onChange={handleInputChange}
                    
                   
                    />
                    <label  className="formbold-form-label">Ingredients</label>
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                    <input
                    className="formbold-form-input"
                    type="text"
                    name="instructions"
                    value={recipe.instructions}
                    onChange={handleInputChange}
                    
                    
                    />
                    <label className="formbold-form-label"> Instructions </label>
                </div>
                <div>
                    <input
                    className="formbold-form-input"
                    type="text" 
                    name="time_to_complete"
                    value={recipe.time_to_complete}
                    onChange={handleInputChange}
                   />
                    <label className="formbold-form-label"> time_to_complete</label>
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                    <input
                    className="formbold-form-input"
                    type="text"
                    name="diet"
                    value={recipe.creator_name}
                    onChange={handleInputChange}
                    />
                    <label className="formbold-form-label">creator_name</label>
                </div>
                <div>
                    <input
                    className="formbold-form-input"
                    type="text" 
                    name="creator"
                    value={recipe.cusine_type}
                    onChange={handleInputChange}
                   />
                    <label className="formbold-form-label">cusine_type</label>
                </div>
              </div>
              <div className="formbold-bottom">
              <button   className="formbold-btn" type="button" ><a className="formbold-anchor "  href="/view">Cancel</a></button>
              <button 
              className="formbold-btn"
              type="submit" >
                  Submit
              </button>         
              </div>
          </form>
        </div>
      </div>


      </center>



    </>
  );
}

export default Update;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
const Services=()=> {
  const [inputValue,setInputValue] = useState({
    recipe_name:"",
    ingredients: "",
    instructions: "",
    time_to_complete: "",
    creator_name: "",
    cusine_type: "",
  });
  const {  recipe_name,ingredients,instructions,time_to_complete,creator_name,cusine_type,} = inputValue;

  const handleOnChange = (e) => {
    const {id, value } = e.target;
    setInputValue({
      ...inputValue,
      [id]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const chef = new FileReader();
      chef.onloadend = () => {
        setInputValue({
          ...inputValue,
          recipe_image: chef.result,
        });
      };
      chef.readAsDataURL(file);
    }
  };


    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const { data } = await axios.post(
          "http://localhost:3001/createRecipe",
          {
            ...inputValue,
          },
          { withCredentials: true   }
        );
        const { success, message } = data;
        if (success) {
          alert("Recipe Added Successfully !!!")
         
        } else {
          
          alert(message)
        }
      } catch (error) {
        console.log(error);
      }
      setInputValue({
        ...inputValue,
        recipe_name:"",
        ingredients: "",
        instructions: "",
        time_to_complete: "",
        creator_name: "",
        cusine_type: "",
        
      });
    };
return (
  <>

<nav class="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#886f60"}}>
  <div class="container-fluid">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Th9KCyA1aoggDfOYRFa_AdCyLv9NtVWIQA&usqp=CAU" width="50" height="50" alt="Logo" className="logo" />
    <a class="navbar-brand" href="#"></a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Services">AddYourFood</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Receipes">Receipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Menu">Saved</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/AboutUs">About Us</a>
        </li>
      </ul>
      
        <br></br>
        <Link to="/login">
        <button style={{ backgroundColor: "#8f8884" }}>Logout</button>
      </Link>
  
    </div>
  </div>
</nav>


<br></br>
    <div class="container-fluid">
        <div class="row">
        <div class=" col-sm-12 col-md-4 col-lg-2">
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-2">
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=170667a&w=0&k=20&c=IMgtTaCu6B0qipvWq9GkDnolryQmyOvfCrlJtgdU3hU=" width="auto" height="250px"></img>                
                    <div class="card-body">
                        <h5 class="card-title">Add Recipe</h5>
                        <button type="button" class="btn btn-outline-secondary btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal"> Add</button>
                    </div>
                </div>
            </div>
            </div>
</div>
<br></br>

<div class="container-fluid">
        <div class="row">
            <div class=" col-sm-12 col-md-4 col-lg-2">
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-2">
            </div>
          
           

            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/01/Lentil-Soup_Darina-Kopcok.jpg?ssl=1" width="auto" height="250px"></img>
                    <div class="card-body">
                        <h5 class="card-title">View Recipes</h5>
                        <a href="/view" class="btn btn-outline-secondary btn-sm">View</a>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-2">
            </div>
        </div>
    </div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Add Recipes to the kitchen</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
        <form  onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Recipe Name
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="recipe_name"
                       placeholder="Enter Recipe Name"
                       value={recipe_name}
                       onChange={handleOnChange}
                       required
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Ingredients
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="ingredients"
                        placeholder="Enter ingredients"
                        value={ingredients}
                        onChange={handleOnChange}
                        required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      instructions
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="instructions"
                       placeholder="Enter instructions"
                       value={instructions}
                       onChange={handleOnChange}
                       required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Cooking time
                    </label>
                    <input
                     type="number"
                     className="form-control"
                     id="time_to_complete"
                     placeholder="Enter the cooking time"
                     value={time_to_complete}
                     onChange={handleOnChange}
                     required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                     Creater Name
                    </label>
                    <input
                     type="text"
                     className="form-control"
                     id="creator_name"
                     placeholder="Enter the Creater Name"
                     value={creator_name}
                     onChange={handleOnChange}
                     required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                    Cusine Type
                    </label>
                    <input
                     type="text"
                     className="form-control"
                     id="cusine_type"
                     placeholder="Enter the  Cusine Type"
                     value={cusine_type}
                     onChange={handleOnChange}
                     required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="recipe_image"
                      placeholder='.jpeg file'
                      onChange={handleImageChange}
                      
                      accept=".jpeg,.jpg,.png"
                    ></input>
                  </div>
                <div class="modal-footer">
                <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn">Add Recipe</button>
                </div>

                </form>
   </div> 
      </div>
      
    </div>
  </div>
</div>
   
      <ToastContainer/>
  </>
  
);
}

export default Services;
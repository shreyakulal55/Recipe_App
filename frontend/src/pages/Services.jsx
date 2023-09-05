import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import axios from "axios";
const Services = () => {
  const [inputValue, setInputValue] = useState({
    recipe_name: "",
    ingredients: "",
    instructions: "",
    time_to_complete: "",
    creator_name: "",
    cusine_type: "",
  });
  const {
    recipe_name,
    ingredients,
    instructions,
    time_to_complete,
    creator_name,
    cusine_type,
  } = inputValue;

  const handleOnChange = (e) => {
    const { id, value } = e.target;
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
        { withCredentials: true }
      );
      const { status, message } = data;
      if (status === 200) {
        alert("Recipe Added Successfully !!!");
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      recipe_name: "",
      ingredients: "",
      instructions: "",
      time_to_complete: "",
      creator_name: "",
      cusine_type: "",
    });
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-primary"
        style={{ backgroundColor: "#886f60" }}
      >
        <div className="container-fluid">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Th9KCyA1aoggDfOYRFa_AdCyLv9NtVWIQA&usqp=CAU"
            width="50"
            height="50"
            alt="Logo"
            className="logo"
          />
          <Link className="navbar-brand" to="#"></Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  AddYourFood
                </Link>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/View">Recipes</a>
            </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">
                  About Us
                </Link>
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
      <div className="container-fluid">
        <div className="row">
          <div className=" col-sm-12 col-md-4 col-lg-2"></div>
          <div className=" col-sm-12 col-md-4 col-lg-2"></div>
          <div className=" col-sm-12 col-md-4 col-lg-3">
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.jpg?s=170667a&w=0&k=20&c=IMgtTaCu6B0qipvWq9GkDnolryQmyOvfCrlJtgdU3hU="
                width="auto"
                height="250px"
                alt=""
              ></img>
              <div className="card-body">
                <h5 className="card-title">Add Recipe</h5>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {" "}
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <div className="container-fluid">
        <div className="row">
          <div className=" col-sm-12 col-md-4 col-lg-2"></div>
          <div className=" col-sm-12 col-md-4 col-lg-2"></div>
          <div className=" col-sm-12 col-md-4 col-lg-3">
            <div className="card">
              <img
                src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/01/Lentil-Soup_Darina-Kopcok.jpg?ssl=1"
                width="auto"
                height="250px"
                alt=""
              ></img>
              <div className="card-body">
                <h5 className="card-title">View Recipes</h5>
                <Link to="/view" className="btn btn-outline-secondary btn-sm">
                  View
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-sm-12 col-md-4 col-lg-2"></div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Recipes to the kitchen
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
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
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
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
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
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
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
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
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
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
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="recipe_image"
                      placeholder=".jpeg file"
                      onChange={handleImageChange}
                      accept=".jpeg,.jpg,.png"
                    ></input>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn">
                      Add Recipe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Services;

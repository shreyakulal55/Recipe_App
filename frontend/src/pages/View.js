/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./view.css"
function MyRecipes() {
  const [fdata, setFData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Renamed from filteredRecipes


  useEffect(() => {
    // Create a function to filter recipes based on the search query
    const filterRecipes = () => {
      const filtered = fdata.filter((recipe) =>
        recipe.recipe_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.time_to_complete.toString().includes(searchQuery) ||
        recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())||
        recipe.cusine_type.toLowerCase().includes(searchQuery.toLowerCase())||
        recipe.creator_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRecipes(filtered);
    };

    filterRecipes(); // Initial filtering

    // Use a timer to update the filtered recipes after a brief delay
    const timer = setTimeout(filterRecipes, 500);

    return () => clearTimeout(timer); // Cleanup timer
  }, [fdata, searchQuery]);

  useEffect(() => {
    Axios.get("http://localhost:3001/recipe")
      .then((res) => {
        console.log(res.data); // Add this line to check the API response
        setFData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);
  const handleDelete = (recipeId) => {
    Axios.delete(`http://localhost:3001/recipe/${recipeId}`)
      .then((res) => {
        if (res.status === 200) {
          // Recipe deleted successfully
          setFData((prevData) => prevData.filter((recipe) => recipe._id !== recipeId));
        } else {
          alert("Error deleting recipe: " + res.data.message);
          console.error("Error deleting recipe:", res.data.message);
        }
      })
      .catch((error) => {
        alert("Error deleting recipe: " + error.message);
        console.error("Error deleting recipe:", error.message);
      });
  };

  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#886f60"}}>
      <div className="container-fluid">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Th9KCyA1aoggDfOYRFa_AdCyLv9NtVWIQA&usqp=CAU" width="50" height="50" alt="Logo" className="logo" />
        <a className="navbar-brand" href="#"></a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Services">AddYourFood</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/View">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AboutUs">About Us</a>
            </li>
          </ul>
      <input
              type="text"
              placeholder="Search by recipe name, cooking time, or nutritional ingredients"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control animated-search-input"
            />
            <span className="input-group-text animated-search-icon">
                <FaSearch />
              </span>
      <Link to="/login">
        <button  style={{ backgroundColor: "#8f8884" }}>Logout</button>
      </Link>
    </div>
  </div>
</nav>

<div className="myrecipe-container">
  <h3 className="text-center mt-4 mb-3" style={{ color: "#FFFFFFF", fontWeight: "bold", fontSize: "34px" }}>
    MakeYourFood
  </h3>
  <div className="row">
    {filteredRecipes.map((recipe) => (
      <div className="col-md-4 mb-4" key={recipe._id}>
        <div className="card shadow-sm" style={{ maxWidth: "18rem" }}>
          <img
            src="https://www.whiskaffair.com/wp-content/uploads/2020/08/Dhaba-Style-Paneer-Masala-2-3.jpg"
            className="card-img-top"
            alt="Recipe pic"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{recipe.recipe_name}</h5>
            <p className="mb-2 user-input">
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
            <p className="card-text">
              <strong>Instructions:</strong> {recipe.instructions}
            </p>
            <p className="card-text">
              <strong>Time_to_complete:</strong> {recipe.time_to_complete}
            </p>
            <p className="card-text">
              <strong>Cusine_type:</strong> {recipe.cusine_type}
            </p>
            <p className="card-text">
              <strong>Creator_name:</strong> {recipe.creator_name}
            </p>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <a href={`/update/${recipe._id}`} className="btn btn-success me-2">
                Update
              </a>
              <button className="btn btn-danger" onClick={() => handleDelete(recipe._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
}

export default MyRecipes;

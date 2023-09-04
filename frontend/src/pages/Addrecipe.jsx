/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import Axios from "axios";
function AddReceipe() {
    const myStyle={
    backgroundColor:"orange"
  }
  const [fdata, setFdata] = useState({
    title: "",
    ingredients:"",
    instuctions:"",
    cookingtime:"",
    nutritionalinfo:"",
    chef:"",
    
  });
const [msg, setMsg] = useState();

//*************change handler */
const ChangeHandler = (e) => {
  let name1 = e.target.name;
  let val = e.target.value;
  setFdata({ ...fdata, [name1]: val });
};

//*************submit handler */
const SubmitHandler = (e) => {
  e.preventDefault();
  Axios.post("http://localhost:3001/ins", { fdata }).then((res) => {
    let ack = res.data;
    if (ack === "success") {
      setMsg("Data inserted successful");
      console.log(msg);
      alert("Thank u for helping others to learn");
    } else {
      setMsg("Data not inserted ");
      console.log(msg);
      alert("data not inserted");
    }
  });
};
return (
  <>

<nav class="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#FFA500"}}>
  <div class="container-fluid">
  <img src="https://www.zarla.com/images/zarla-our-kitchen-1x1-2400x2400-20211105-h3rkb8t4qvc74kx6bjpt.png?crop=1:1,smart&width=250&dpr=2" width="150" height="150" alt="Logo" className="logo" />
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
          <a class="nav-link" href="/AddReceipe">AddReceipe</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Receipes">Receipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/AboutUs">About Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn" type="submit">Search</button>
        <br></br>
        <button onClick={Logout} style={{backgroundColor:"#FFA500"}}>LOGOUT</button>
      
      </form>
    </div>
  </div>
</nav>

<div className="container">
     <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/top-view-different-seasonings-with-vegetables-dark-space_140725-76039.jpg?w=740&t=st=1692027642~exp=1692028242~hmac=2647f44d9e1573b12cb8f6bc92e39eca78212f32a1d86b817340219fba5b538f" class="d-block w-100" width="500" height="550" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome</h5>
        <p>Here are we to help you to prepare your favourite dish.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-photo/top-view-brown-bean-soup-delicious-cooked-soup-with-different-seasonings-dark-surface-dinner-soup-bean-food-meal_140725-74440.jpg?w=740&t=st=1692027791~exp=1692028391~hmac=9a90c648440f0dc074f751599f16f6e562e7d2163c2992343580cc3af603ada8" class="d-block w-100" alt="..." width="500" height="550"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Login </h5>
        <p>For better experience</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-photo/wooden-spoons-with-various-spices-black-background_93675-87303.jpg?w=740"  width="500" height="550"class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Now you can add your Receipes</h5>
        <p>Isn't it awesome?</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>



    <hr></hr>
   <center><div style={{
              backgroundColor: "orange",
              width: "20%",
              margin: "10px",
            }}><h4>Enter  The Reciepe</h4></div></center> 
<br></br>
    <center><form onSubmit={SubmitHandler}>
      <label > &nbsp;  &nbsp; &nbsp; &nbsp;Title:  &nbsp;  &nbsp; </label>
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={fdata.title}
        onChange={ChangeHandler}
      />
      <br></br>
      <br></br>

      <label>&nbsp;Ingredients:  &nbsp; &nbsp;    </label>
      <textarea type ="text"
      name="ingredients"
      placeholder="Enter ingredients"
      value={fdata.content}
      onChange={ChangeHandler}
      > </textarea>
      <br></br>
      <br></br>
      <label> &nbsp; &nbsp;&nbsp;&nbsp;Instructions: &nbsp; &nbsp; &nbsp;</label>
      <textarea
        type="text"
        name="instructions"
        placeholder="Enter the instructions"
        value={fdata.vediolink}
        onChange={ChangeHandler}
      />
      <br></br>
      <br></br>
      <label> &nbsp; &nbsp;&nbsp;&nbsp;Cookingtime: &nbsp; &nbsp; &nbsp;</label>
      <input
        type="text"
        name="cookingtime"
        placeholder="Enter the cooking time"
        value={fdata.vediolink}
        onChange={ChangeHandler}
      />
      <br></br>
      <br></br>
      <label> &nbsp; &nbsp;Chef:  &nbsp; &nbsp;&nbsp;</label>
      <input
        type="text"
        name="chef"
        placeholder="Enter your name"
        value={fdata.author}
        onChange={ChangeHandler}
      />

      <br></br>
      <br></br>
      <button type="submit">Insert</button>
    </form>
    </center>
  </>
  
);
}

export default AddReceipe;
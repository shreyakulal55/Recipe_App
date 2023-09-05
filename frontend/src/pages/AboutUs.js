
import React from 'react';
import {Link} from "react-router-dom";
const AboutUs = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#886f60"}}>
      <div class="container-fluid">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Th9KCyA1aoggDfOYRFa_AdCyLv9NtVWIQA&usqp=CAU" width="50" height="50" alt="Logo" className="logo" />
       
        
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
              <a class="nav-link" href="/View">Recipes</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="/AboutUs">About Us</a>
            </li>
          </ul>
      
            <Link to="/login">
            <button style={{ backgroundColor: "#8f8884" }}>Logout</button>
          </Link>
          
     
        </div>
      </div>
    </nav>
    
<div class="accordion" id="accordionExample">
  <div class="accordion-item" style={{ backgroundColor:"#8f8884" }}>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        MakeYourFood
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      MakeYourFood was invented by <strong>TEAM MakeYourFood</strong> in the year 2004.
      </div>
    </div>
  </div>
  <div class="accordion-item"style={{ backgroundColor:"#8f8884" }}>
    <h2 class="accordion-header" id="headingTwo"style={{ backgroundColor:"#8f8884" }}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Address
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Mangalore near statebank,karnataka,India.
    
      </div>
    </div>
  </div>
  <div class="accordion-item"style={{ backgroundColor:"#8f8884" }}>
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Contact Details
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <li>Phone: 123558288122</li>
      <li>Email: MakeYourFood@gmail.com</li>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default AboutUs;

// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// // 


// const Home = () => {
//   const navigate = useNavigate();
//   const [cookies, removeCookie] = useCookies([]);
//   const [username, setUsername] = useState("");
//   useEffect(() => {
//     const verifyCookie = async () => {
//       if (!cookies.token) {
//         navigate("/login");
//       }
//       const { data } = await axios.post(
//         "http://localhost:3001",
//         {},
//         { withCredentials: true }
//       );
//       const { status, user } = data;
//       setUsername(user);
//       return status
//         ? toast(`Hello ${user}`, {
//             position: "top-right",
//           })
//         : (removeCookie("token"), navigate("/login"));
//     };
//     verifyCookie();
//   }, [cookies, navigate, removeCookie]);
//   const Logout = () => {
//     removeCookie("token");
//     navigate("/login");
//   };
//   return (
//     <>
   
//        <nav class="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#FFA500"}}>
//   <div class="container-fluid">
//   <img src="data:image/png;base64,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" width="150" height="150" alt="Logo" className="logo" />
//     <a class="navbar-brand" href="#"></a>
    
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/AddReceipe">AddReceipe</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/Receipes">Receipes</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/Menu">Menu</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/AboutUs">About Us</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn" type="submit">Search</button>
//         <br></br>
//         <button onClick={Logout} style={{backgroundColor:"#FFA500"}}>LOGOUT</button>
      
//       </form>
//     </div>
//   </div>
// </nav>
// <br></br>
// <div className="container">
//      <div id="carouselExampleCaptions" class="carousel slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://img.freepik.com/free-photo/top-view-different-seasonings-with-vegetables-dark-space_140725-76039.jpg?w=740&t=st=1692027642~exp=1692028242~hmac=2647f44d9e1573b12cb8f6bc92e39eca78212f32a1d86b817340219fba5b538f" class="d-block w-100" width="500" height="550" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Welcome</h5>
//         <p>Here are we to help you to prepare your favourite dish.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="https://img.freepik.com/free-photo/top-view-brown-bean-soup-delicious-cooked-soup-with-different-seasonings-dark-surface-dinner-soup-bean-food-meal_140725-74440.jpg?w=740&t=st=1692027791~exp=1692028391~hmac=9a90c648440f0dc074f751599f16f6e562e7d2163c2992343580cc3af603ada8" class="d-block w-100" alt="..." width="500" height="550"/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Login </h5>
//         <p>For better experience</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="https://img.freepik.com/premium-photo/wooden-spoons-with-various-spices-black-background_93675-87303.jpg?w=740"  width="500" height="550"class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Now you can add your Receipes</h5>
//         <p>Isn't it awesome?</p>
//       </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
// </div>

// <br></br>
// <div className="container">
// <div class="row row-cols-1 row-cols-md-2 g-4">
//   <div class="col">
//     <div class="card">
//       <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Breakfast</h5>
//         <p class="card-text">If you want breakfast in bed, eat it in the kitchen!.</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card">
//       <img src="https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Lunch</h5>
//         <p class="card-text">Ask not what you can do for your country, ask what's for lunch..</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card">
//       <img src="https://plus.unsplash.com/premium_photo-1684629279315-c4ebcfe56e98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Snack</h5>
//         <p class="card-text">Snack time heals all wounds..</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card">
//       <img src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..."/>
//       <div class="card-body">
//         <h5 class="card-title">Dinner</h5>
//         <p class="card-text">Dinner is better when we eat together..</p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// <br></br>
//       <footer className="footer">
       
//           <div className="row" style={{backgroundColor:"#FFA500"}}>
            
//               <h3>Contact Us</h3>
//               <ul>
//                 <li>123 Main Street</li>
//                 <li>City, State ZIP</li>
//                 <li>Phone: (123) 456-7890</li>
//                 <li>Email: info@example.com</li>
//               </ul>
           
//           </div>
      
//         {/* <div className="footer-bottom">
        
//             <div className="row">
//               <div className="col-md-6">
//                 <span className="text-muted"style={{backgroundColor:"#000000"}}>
//                   &copy; 2023 My Kitchen Website
//                 </span>
//               </div>
              
//             </div>
//           </div> */}
       
//       </footer>
//       <ToastContainer /> 
//     </>
//   );
// };

// export default Home;



import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
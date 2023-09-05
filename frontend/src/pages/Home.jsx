import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:3001",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-primary"
        style={{ backgroundColor:"#886f60" }}
      >
        <div class="container-fluid">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Th9KCyA1aoggDfOYRFa_AdCyLv9NtVWIQA&usqp=CAU"
            width="50"
            height="50"
            alt="Logo"
            className="logo"
          />
          <a class="navbar-brand" href="#"></a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/" >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Services">
                  AddYourFood
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Receipes">
                  Receipes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Menu">
                  Saved
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/AboutUs">
                  About Us
                </a>
              </li>
            </ul>
            
             
              <br></br>
              <button onClick={Logout} style={{ backgroundColor: "#8f8884" }}>
                LOGOUT
              </button>
          
          </div>
        </div>
      </nav>
      <br></br>
      <div className="container">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg"
                class="d-block w-100"
                width="200"
                height="550"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>MakeYourFood</h5>
                <p >One cannot think well, love well, sleep well, if one has not dined well.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.webp?b=1&s=170667a&w=0&k=20&c=VNOdVyszWf-PbZa-IxolcYq752TRkCkeUdpzJ2Ghf7M="
                class="d-block w-100"
                alt="..."
                width="500"
                height="550"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Explore Your Idea's </h5>
                <p>Let Other Have a Taste Of Your Food In their Place</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.format.com/wp-content/uploads/Mexican_Table_1_slzrja.jpg"
                width="500"
                height="550"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Login</h5>
                <p>To EXplore More</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <br></br>
      <div className="container">
        <div class="row">
          <div class="col col-md-6 col-sm-12">
            <div class="card">
              <img src="https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg" />
              
              <h5 class="card-title">Add Your Food</h5>
              <p class="card-text">
               "Let Other Have a Taste Of Your Food In their Place" 
              </p>
              <a
                href="/Services"
                class="btn"
                style={{ backgroundColor: "#1234" }}
              >
                Click Here
              </a>
           
            </div>
          </div>
          <div class="col col-md-6 col-sm-12">
            <div class="card">
              <img src="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg" />
              <h5 class="card-title">Try Something New</h5>
              <p class="card-text">
               "Laughter is brightest where food is best" 
              </p>
              <a
                href="/Services"
                class="btn"
                style={{ backgroundColor: "#1234" }}
              >
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <footer className="footer">
        <div className="row" style={{ backgroundColor: "#8f8884" }}>
         
          <ul>
            
            <li>@copyright2004</li>
          </ul>
        </div>
      </footer>
      <ToastContainer />
    </>
  );
};

export default Home;

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token || cookies.token === "undefined") {
        navigate("/login");
      }
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Services">
                  AddYourFood
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Receipes">
                  Receipes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Menu">
                  Saved
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AboutUs">
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
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
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
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/01/Lentil-Soup_D-Kopcok.jpg?ssl=1"
                className="d-block w-100"
                width="200"
                height="550"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>MakeYourFood</h5>
                <p>
                  One cannot think well, love well, sleep well, if one has not
                  dined well.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1165399909/photo/delicious-meal-on-a-black-plate-top-view-copy-space.webp?b=1&s=170667a&w=0&k=20&c=VNOdVyszWf-PbZa-IxolcYq752TRkCkeUdpzJ2Ghf7M="
                className="d-block w-100"
                alt="..."
                width="500"
                height="550"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Explore Your Idea's </h5>
                <p>Let Other Have a Taste Of Your Food In their Place</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.format.com/wp-content/uploads/Mexican_Table_1_slzrja.jpg"
                width="500"
                height="550"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Login</h5>
                <p>To EXplore More</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <br></br>
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-sm-12">
            <div className="card">
              <img
                src="https://img.delicious.com.au/G-2mxbOh/w1200/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
                alt=""
              />

              <h5 className="card-title">Add Your Food</h5>
              <p className="card-text">
                "Let Other Have a Taste Of Your Food In their Place"
              </p>
              <a
                href="/Services"
                className="btn"
                style={{ backgroundColor: "#1234" }}
              >
                Click Here
              </a>
            </div>
          </div>
          <div className="col col-md-6 col-sm-12">
            <div className="card">
              <img
                src="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
                alt=""
              />
              <h5 className="card-title">Try Something New</h5>
              <p className="card-text">
                "Laughter is brightest where food is best"
              </p>
              <a
                href="/Services"
                className="btn"
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

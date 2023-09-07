/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return ( 
        <>
        
        <nav className="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#5f5b5c"}}>
  <div className="container-fluid">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Th9KCyA1aoggDfOYRFa_AdCyLv9NtVWIQA&usqp=CAU" width="150" height="150" alt="Logo" className="logo" />
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
          <a className="nav-link" href="/Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/AddReceipe">AddReceipe</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Receipes">Recipes</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="/AboutUs">About Us</a>
        </li>
      </ul>
  
        <br></br>
        <Link to="/login">
        <button style={{ backgroundColor: "#FFA500" }}>Logout</button>
      </Link>
      
  
    </div>
  </div>
</nav>
  
        <Outlet />
      </>
     );
}
 
export default Layout;
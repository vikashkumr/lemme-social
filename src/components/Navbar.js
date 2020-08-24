import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>   
          <div className="nav-wrapper white" >
          <Link to="/home" className="brand-logo">LeMme`Social</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/profile">Profile </Link></li>
              <li><Link to="/login">Login </Link></li>
              <li><Link to="/signup">SignUp </Link></li>
              <li><Link to="/createpost">CreatePost</Link></li>
          </ul>
          </div>
        </nav>
    );
}

export default NavBar;
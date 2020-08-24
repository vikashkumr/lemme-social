import React from 'react';
import {Link} from 'react-router-dom';
const SignUp = () => {
    return (
        <div className="sign-card">
            <div className="card blue-grey darken-1 auth-card">
                <div className="card-content white-text">
                <span className="card-title">SignUp</span>
                <input type="text" placeholder="name"></input>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="password"></input>
                </div>
                <div className="card-action">
                <a href="#">SignUp</a>
                </div>
                <Link to="/login">Already have Account?</Link>
            </div>
        </div>
    );
}

export default SignUp;
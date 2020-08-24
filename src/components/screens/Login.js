import React from 'react';
import {Link} from 'react-router-dom';
class Login extends React.Component {

    render() {
        return (
            <div className="login-card">
                <div className="card blue-grey darken-1 auth-card">
                    <div className="card-content white-text">
                    <span className="card-title">Login</span>
                    <input type="text" placeholder="email"></input>
                    <input type="text" placeholder="password"></input>
                    </div>
                    <div className="card-action">
                    <a href="#">LogIn</a>
                    </div>
                    <Link to="/signup">Don't have Account?</Link>
                </div>
            </div>
        );
    }
}

export default Login;
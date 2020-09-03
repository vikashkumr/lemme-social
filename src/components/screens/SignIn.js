import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../App';
const Login = () => {
    const {state, dispatch} = useContext(userContext)
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const postData = () => {
        //regex for email validation

        fetch("http://localhost:5000/auth/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.error) {
               console.log(data.error)
            } else {
                console.log("login successful")
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({type: "USER", payload: data.user})
                history.push('/')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="login-card">
            <div className="card blue-grey darken-1 auth-card">
                <div className="card-content white-text">
                <span className="card-title">Login</span>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="card-action">
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={() => postData()}> SignIn
                </button>
                </div>
                <Link to="/signup">Don't have Account?</Link>
            </div>
        </div>
    )
}

export default Login;
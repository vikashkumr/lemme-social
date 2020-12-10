import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
const SignUp = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const postData = () => {
        //regex for email validation

        fetch('http://localhost:5000/auth/signup', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        })
        .then(res => res.json())
        .then(data => {
            //check for error show toast
            if(data.error) {
                console.log(data.error)
                setName("");
                setEmail("");
                setPassword("");
            } else {
                console.log('signup successful')
                history.push('/signin')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="sign-card">
            <div className="card blue-grey darken-1 auth-card">
                <div className="card-content white-text">
                <span className="card-title">SignUp</span>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="card-action">
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={() => postData()}> SignUp
                </button>
                </div>
                <Link to="/signin">Already have Account?</Link>
            </div>
        </div>
    );
}

export default SignUp;
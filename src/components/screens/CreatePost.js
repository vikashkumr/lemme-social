import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
require('dotenv').config();

const CreatePost = () => {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [photo, setPhoto] = useState("")
    
    useEffect(() => {
        if(photo) {
            fetch("http://localhost:5000/post/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+localStorage.getItem("jwt")
                },
                body: JSON.stringify({title, body, photo})
            })
            .then(res => res.json())
            .then(data => {
                //check for error show toast
                console.log('post created successfully')
                history.push('/')
            })
            .catch(err => console.log(err)) 
        }
    },[photo])

    const postData = () => {
        const data = new FormData();
        data.append("file", image)
        data.append("upload_preset", "lemme-social")
        data.append("cloud_name", process.env.CLOUD_NAME)

        fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`, {
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setPhoto(data.url)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div className="card blue-grey darken-1 create-field">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Caption" value={body} onChange={(e) => setBody(e.target.value)} />
            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Image</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
                <br/><br/>
                <button className="btn waves-effect waves-light" onClick={() => postData()}>Post
                    <i className="material-icons right">send</i>
                </button>
            </div>
        </div>
    );
}

export default CreatePost;
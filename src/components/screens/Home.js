import React, {useState, useEffect, useContext} from 'react';
import {userContext} from '../../App'
import {Link} from 'react-router-dom'
const Home = () => {
    const [data, setData] = useState([])
    const {state, dispatch} = useContext(userContext)
    useEffect(() => {
        fetch('http://localhost:5000/post/allpost', {
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res => res.json())
        .then(result => {
            setData(result.posts)
        })
    },[])

    const likePost = (id) => {
        fetch('http://localhost:5000/post/like', {
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId: id
            })
        })
        .then(res => res.json())
        .then(result => {
            const newData = data.map(item => {
                if(item._id === result._id) {
                    return result;
                } else {
                    return item
                }
            })
            setData(newData)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const unlikePost = (id) => {
        fetch('http://localhost:5000/post/unlike', {
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId: id
            })
        })
        .then(res => res.json())
        .then(result => {
            const newData = data.map(item => {
                if(item._id === result._id) {
                    return result;
                } else {
                    return item
                }
            })
            setData(newData)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const putComment = (text, postId) => {
        fetch('http://localhost:5000/post/comment', {
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                text,
                postId
            })
        })
        .then(res => res.json())
        .then(result => {
            const newData = data.map(item => {
                if(item._id === result._id) {
                    return result;
                } else {
                    return item
                }
            })
            setData(newData)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deletePost = (postId) => {
        fetch(`http://localhost:5000/post/deletepost/${postId}`, {
            method:"delete",
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
        })
        .then(res => res.json())
        .then(result => {
            const newData = data.filter(item => {
                return item._id !== result._id
            })
            setData(newData)
        })
    }

    return (
        <div className="home">
            {   
                (data) ?
                data.map(item => {
                    return (
                        <div className="card home-card" key="item.postedBy._id">
                            <Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id : "/profile" }style={{fontSize:"23px"}} >{item.postedBy.name}</Link>
                            <div className="card-image">
                                <img src={item.photo} alt="pic missing" />
                            </div>
                            <div className="card-content">
                                {item.likes.includes(state._id)
                                ?<i className="material-icons" onClick={() => { unlikePost(item._id) }} style={{color:"red", cursor:"pointer"}} >favorite</i>
                                :  <i className="material-icons" onClick={() => { likePost(item._id) }} style={{cursor:"pointer"}}>favorite_border</i>
                                }
                                <span> &nbsp;</span>
                                <i className="material-icons" onClick={() => document.getElementById('inptxt').focus()} style={{cursor:"pointer"}}>comment</i>
                                <span> &nbsp; </span>
                                {(item.postedBy._id === state._id) ? <i className="material-icons" style={{cursor:"pointer"}} onClick={() => deletePost(item._id)}>delete</i>:""}
                                
                                {/* <i className="material-icons">send</i> */}
                                <h6>{item.likes.length} likes</h6>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                {
                                    item.comments.map(record => {
                                        return (
                                            <h6>
                                                <span style={{fontWeight:"500"}}>{record.postedBy[0].name}</span> 
                                                {" "+record.text} 
                                            </h6>
                                        )
                                    })
                                }
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    putComment(e.target[0].value, item._id)
                                }}>
                                <input id="inptxt" type="text" placeholder="add a comment" /> 
                                </form>
                            </div>
                        </div>
                    )
                }):console.log("create post")
            }
        </div>
    );
}

export default Home;
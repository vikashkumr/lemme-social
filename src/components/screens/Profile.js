import React, {useEffect, useState, useContext} from 'react'
import { userContext } from '../../App'
const cloud = process.env.REACT_APP_CLOUD_NAME;

const Profile = () => {

  const [image, setImage] = useState("")
  // const [photo, setPhoto] = useState("")
  const [mypics, setPics] = useState([])
  const {state, dispatch} = useContext(userContext)

  useEffect(() => {
    fetch('http://localhost:5000/post/mypost', {
      headers: {
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      }
    })
    .then(res => res.json())
    .then(result => {
      setPics(result.posts)
    })
  },[])

  useEffect(() => {
    if(image) {
      const data = new FormData();
      data.append("file", image)
      data.append("upload_preset", "lemme-social")
      data.append("cloud_name", cloud)
      fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
          method: "post",
          body: data
      })
      .then(res => res.json())
      .then(data => {
          // setPhoto(data.url)
          // localStorage.setItem("user", JSON.stringify({...state, profilePic: data.url}))
          // dispatch({type:"UPDATEPIC", payload: data.url})
          fetch('http://localhost:5000/user/profilepic', {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({
              profilePic: data.url
            })
          }).then(res => res.json())
          .then(result => {
            localStorage.setItem("user", JSON.stringify({...state, profilePic: result.profilePic}))
            dispatch({type:"UPDATEPIC", payload: result.profilePic})
          })
      })
      .catch(err => {
          console.log(err)
      })
    }
  },[image])

  const updateProfilePic = (file) => {
    setImage(file);
  }


  return (
    <div style={{maxWidth:"800px", margin:"0px auto"}}>
      <div style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey"
        }}>
        <div>
          <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
            src={(state && state.profilePic !== undefined) ? state.profilePic : "https://www.pngkey.com/png/detail/52-522921_kathrine-vangen-profile-pic-empty-png.png"}
            alt="profile pic"
            />
        </div>
        <div>
          <h4>{state?state.name:"loading.."}</h4>
          <h5>{state?state.email:"loading.."}</h5>
          <div style={{display:"flex", justifyContent:"space-between", width: "108%"}}>
            <h6>{mypics.length} posts</h6>
            <h6>{state?state.followers.length:"0"} follower</h6>
            <h6>{state?state.following.length:"0"} following</h6>
          </div>
        </div>
      </div>
      <div className="file-field input-field" style={{margin: "10px"}}>
          <div className="btn">
              <span>Update profile pic</span>
              <input type="file" onChange={(e) => updateProfilePic(e.target.files[0])}/>
          </div>
          <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
          </div>
      </div>
      <div className="gallary">
        {
          mypics.map(item => {
            return (
              <img className="item" src={item.photo} alt={item.title}/>
            )
          })
        }
        </div>
    </div>
  )
}
export default Profile;
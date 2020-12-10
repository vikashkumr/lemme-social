import React, {useEffect, useState, useContext} from 'react'
import { userContext } from '../../App'
import { useParams } from 'react-router-dom'

const Profile = () => {

  const [profile, setProfile] = useState(null)
  const {state, dispatch} = useContext(userContext)
  const { userId } = useParams()
  const [followed, setFollowed] = useState(state?state.following.includes(userId): true)
  useEffect(() => {
    fetch(`http://localhost:5000/user/${userId}`, {
      headers: {
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      }
    })
    .then(res => res.json())
    .then(result => {
      setProfile(result)
    })
  },[])

  const followUser = () => {
    fetch('http://localhost:5000/user/follow', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        followId: userId
      })
    })
    .then(res => res.json())
    .then(data => {
      dispatch({type: "UPDATE", payload: {following: data.following, followers: data.followers}})
      localStorage.setItem("user", JSON.stringify(data))
      setProfile((prevState) => {
        return {
          ...prevState,
          user: {
            ...prevState.user,
            followers: [...prevState.user.followers, data._id]
          }
        }
      })
      setFollowed(true)
    })
  }
  
  const unfollowUser = () => {
    fetch('http://localhost:5000/user/unfollow', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        unfollowId: userId
      })
    })
    .then(res => res.json())
    .then(data => {
      dispatch({type: "UPDATE", payload: {following: data.following, followers: data.followers}})
      localStorage.setItem("user", JSON.stringify(data))
      setProfile((prevState) => {
        const newFollower = prevState.user.followers.filter(item => item !== data._id)
        return {
          ...prevState,
          user: {
            ...prevState.user,
            followers: newFollower
          }
        }
      })
      setFollowed(false)
    })
  }

  return (
    (profile) ? 
        <div style={{maxWidth:"800px", margin:"0px auto"}}>
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "18px 0px",
            borderBottom: "1px solid grey"
          }}>
          <div>
            <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
              src={profile.user.profilePic}
              alt="profile pic"
              />
          </div>
          <div>
            <h4>{profile.user.name}</h4>
            <h6>{profile.user.email}</h6>
            <div style={{display:"flex", justifyContent:"space-between", width: "108%"}}>
              <h6>{(profile.post)?profile.post.length:0} post</h6>
              <h6>{(profile.user.followers)?profile.user.followers.length:0} followers</h6>
              <h6>{(profile.user.following)?profile.user.following.length:0} following</h6>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={() => (followed) ? unfollowUser(): followUser()}> 
                {(followed) ? `Unfollow` : `Follow`}
            </button>
          </div>
        </div>
        <div className="gallary">
          {
            profile.post.map(item => {
              return (
                <img key={item._id} className="item" src={item.photo} alt={item.title}/>
              )
            })
          }
          </div>
      </div> : <h3>loading...</h3>
  )
}
export default Profile;
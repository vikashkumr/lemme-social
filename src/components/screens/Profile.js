import React, {useEffect, useState, useContext} from 'react'
import { userContext } from '../../App'

const Profile = () => {

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
      // console.log(result)
    })
  },[])


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
            src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            alt="profile pic"
            />
        </div>
        <div>
          <h4>{state?state.name:"loading.."}</h4>
          <div style={{display:"flex", justifyContent:"space-between", width: "108%"}}>
            <h6>35 posts</h6>
            <h6>35 follower</h6>
            <h6>35 following</h6>
          </div>
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
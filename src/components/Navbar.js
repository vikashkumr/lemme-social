import React, {useContext, useRef, useEffect, useState} from 'react';
import '../App.css'
import { Link,useHistory } from 'react-router-dom';
import { userContext } from '../App';
import M from 'materialize-css'
const NavBar = () => {
    const searchModal = useRef(null)
    const [search, setSearch] = useState('')
    const [userDetails, setUserDetails] = useState([])
    const {state, dispatch} = useContext(userContext)
    const history = useHistory()
    useEffect(() => {
        M.Modal.init(searchModal.current)
    },[])
    const renderList = () => {
        if(state) {
            return [
                <li key="0"><i data-target="modal1" className="large material-icons modal-trigger" style={{color:"black", cursor:"pointer"}}>search</i></li>,
                <li key="1"><Link to="/createpost">CreatePost</Link></li>,
                <li key="2"><Link to="/profile">Profile </Link></li>,
                <li key="3"><Link to="/followers">Followings Post </Link></li>,
                <li key="4">
                    <button className="btn #c62828 red darken-3"
                        onClick={() => { 
                                localStorage.clear()
                                dispatch({type: "CLEAR"})
                                history.push('/signin')
                            }
                        }
                    > Logout
                    </button>
                </li>
            ]
        } else {
            return [
                <li key="1"><Link to="/signin">Login </Link></li>,
                <li key="2"><Link to="/signup">SignUp </Link></li>
            ]
        }
    }


    const fetchUsers = (query) => {
        setSearch(query)
        fetch('http://localhost:5000/user/search', {
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({query})
        }).then(res => res.json())
          .then(results => {
              setUserDetails(results.user)
          })
    }
    return (
        <nav>   
          <div className="nav-wrapper white" >
          <Link to={state?"/":"/signin"} className="brand-logo">LeMme`Social</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              {renderList()}  
          </ul>
          </div>
          <div id="modal1" className="modal" ref={searchModal} style={{color:"black"}}>
              <div className="modal-content">
                <input
                    type="text"
                    placeholder="search user"
                    value={search}
                    onChange = {(e) => fetchUsers(e.target.value)}
                />
                <ul className="collection">
                    {userDetails.map(item => {
                        return <Link to={item._id !== state._id ? "/profile/"+item._id:'/profile'} onClick={() => {
                            M.Modal.getInstance(searchModal.current).close()
                            setSearch('')
                        }}> <li className="collection-item">{item.email}</li></Link>
                    })}
                </ul>
              </div>
              <div className="modal-footer">
                <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>Close</button>
              </div>
          </div>
        </nav>
    );
}

export default NavBar;
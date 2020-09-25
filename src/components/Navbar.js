import React, {useContext} from 'react';
import '../App.css'
import { Link,useHistory } from 'react-router-dom';
import { userContext } from '../App';
const NavBar = () => {
    const {state, dispatch} = useContext(userContext)
    const history = useHistory()
    const renderList = () => {
        if(state) {
            return [
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
    return (
        <nav>   
          <div className="nav-wrapper white" >
          <Link to={state?"/":"/signin"} className="brand-logo">LeMme`Social</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              {renderList()}  
          </ul>
          </div>
        </nav>
    );
}

export default NavBar;
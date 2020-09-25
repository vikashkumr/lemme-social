import React, {useEffect, createContext, useReducer, useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import NavBar from './components/Navbar';
import Profile from './components/screens/Profile';
import SignIn from './components/screens/SignIn';
import SignUp from './components/screens/Signup';
import Home from './components/screens/Home';
import UserProfile from './components/screens/userProfile'
import CreatePost from './components/screens/CreatePost';
import SubscriberPost from './components/screens/SubscriberPost';
import {reducer, initialState} from './reducers/userReducer'

export const userContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state, dispatch} = useContext(userContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user) {
      dispatch({type: "USER", payload: user})
    } else {
      history.push('/signin')
    }
  },[])

  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile/:userId" component={UserProfile} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/createpost" exact component={CreatePost} />
      <Route path="/followers" exact component={SubscriberPost} />
    </>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <userContext.Provider value={{state, dispatch}}>
    <Router>
      <NavBar />
      <Routing />
    </Router>
    </userContext.Provider>
  );
}

export default App;

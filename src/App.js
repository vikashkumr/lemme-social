import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import SignUp from './components/screens/Signup';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/profile" exact component={Profile} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </Router>
  );
}

export default App;

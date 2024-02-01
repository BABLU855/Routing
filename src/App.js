import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import User from "./User";
// import backgroundImage from './9131529.png'

function Bablu() {
  const headerStyle = {
    backgroundColor: 'white', 
    padding: '10px',
  };

  return (
    <ul>
      <li style={headerStyle}> <Link to="/">Home</Link></li>
      <li style={headerStyle}> <Link to="/about">About</Link></li>
      <li style={headerStyle}> <Link to="/login">login</Link></li>
      <li style={headerStyle}> <Link to="/user">User</Link></li>
    </ul>
  );
}

function Header() {
  return (
    <div>
      <h1>Welcome to our site</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Bablu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/User" element={<User />} >


          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


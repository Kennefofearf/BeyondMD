import React from "react";
import './Home.css';
import logo from "../beyondmdlogo.png";

// Displays the homepage with the "Hello, BeyondMD" message

function Home() {

    return (
      <div className="Home">  
          <h1 className="title">Hello,</h1>
          <img className="logo" src={logo}/>   
      </div>
    );
}
  
export default Home;
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Api from "./pages/Api";

// Handles Navbar navigation using a switch statement

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/Home":
      Component = Home
      break
    case "/Resume":
      Component = Resume
      break
    case "/Api":
      Component = Api
      break
  }

  return (
      <>
      <Navbar />
      <Component />  
      </>   
  );
}

export default App;

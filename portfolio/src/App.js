import React from "react";
import "./index.css";
import {Routes, Route}  from "react-router-dom"
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element= {<Home/>}></Route>
     <Route path="/Contact" element= {<Contact/>}></Route>
     <Route path="/Project" element= {<Project/>}></Route>
     <Route path="/About" element= {<About/>}></Route>

    </Routes>
    </>
  );
}

export default App;

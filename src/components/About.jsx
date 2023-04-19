import NavBar from "./NavBar";
import React, { useState } from 'react';
import Footer from "./Footer";


const Task = () =>{
    return(
        <div className="App">
            <NavBar />
            <h2>Subin's To_Do list!</h2>
            <h4>Interactive Media Design</h4>
            <Footer />
        </div>
    )
};

export default Task;
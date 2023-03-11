import React from "react";

export default function header() {
    return (
        <header>
            <div className="container"> 
                <h1>To-Do list</h1>   
                <input type="text" id="add-task" placeholder="Add your To-Do task here!!..."></input>
                <input type="submit" id="submit-task" value="Add Task"></input>                                     
            </div>
        </header>  
    )
}
   

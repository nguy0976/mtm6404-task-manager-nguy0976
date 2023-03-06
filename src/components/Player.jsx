import React from "react";

    export default function Player(props) {
    return (
        
        <div className="container">
            <div className="image">
            <img className="player-image" src={props.imageUrl} alt={props.title} />
            </div>                            
                <div className="info">
                <h1 className="title">{props.title} </h1>
                <h5 className="date">{props.date}</h5>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
   
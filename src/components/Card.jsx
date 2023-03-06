import React from "react";

    export default function Card(props) {
    return (
        <div className="card-container">
        
                <div className="card-image-container">
                    <img className="card-image" src={props.imageUrl} alt={props.title} />
                </div>
                
                <div className="card-info">
                    <div className="location-container">
                      <img src="images/location.png" className="location-icon" alt="location icon"/> 
                      <h5 className="location">{props.location}  </h5>
                    <a className="location-url" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="card-title">{props.title} </h1>
                    <h5 className="card-date0">{props.startDate} - {props.endDate}</h5>
                    <p className="card-description">{props.description}</p>
                </div>
        </div>
    )
}
   
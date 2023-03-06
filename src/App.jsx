import React from "react"
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Footer from "./components/Footer";
import data from "./data"

export default function App() {
  const players = data.map(item => {
    return(
      <Player
        key ={item.id}
             {...item}/>
    )
  })
    return (
      <div className="App">
        <Navbar />
        <div className="card-content">
        {players}
        </div>
        <Footer />
      </div>
  );
}





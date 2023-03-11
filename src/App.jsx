import React from "react"
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import Footer from "./components/Footer";
import Header from "./components/Header"

export default function App() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="tasks"> 
            <Task taskItem={"Do Home Work"} itemType={"Progress"}/>
            <Task taskItem={"Workout"} itemType={"Wait List"}/>
            <Task taskItem={"House Cleaning"} itemType={"Completed"}/>
            <Task taskItem={"Reading Book"} itemType={"Completed"}/>
            <Task taskItem={"Sleep early"} itemType={"Wait List"}/>
        </div>
        <Footer />
      </div>
  );
}





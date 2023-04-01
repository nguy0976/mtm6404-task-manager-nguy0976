import React from "react"
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Task />
        <Footer />
      </div>
  );
}





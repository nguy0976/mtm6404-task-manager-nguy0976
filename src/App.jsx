import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'

const lists = [
  { id: 0, slug:"/list", name:"List"},
];

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <NavBar />
      <div>
          {lists.map((list, index) => (
          <Link key={index} to={list.slug}><h5>CLICK HERE TO VIEW THE TO_DO LIST !</h5></Link> ))}
      </div>
      <Footer />
    </div>
  );
}

export default App

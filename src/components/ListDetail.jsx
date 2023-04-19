import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Welcome to the Todo List App</h1>
      <h2>Select a list to view:</h2>
      <br></br>
      <ul>
        <li>
          <Link to="/list1">List 1</Link>
        </li>
        <li>
          <Link to="/list2">List 2</Link>
        </li>
        <li>
          <Link to="/list3">List 3</Link>
        </li>
        <li>
          <Link to="/list4">List 4</Link>
        </li>
        <li>
          <Link to="/list5">List 5</Link>
        </li>
      </ul>
      <br></br>
      <Link to="/">Go back Home</Link>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const List2 = () => {
    
    
    return (
        <div>
          <h1>List-2</h1>
          <span>Buy groceries</span>
          <span>Low</span>
          <button onClick>Mark Completed</button> 
          <div>
            <br></br>
            <Link to="/detail">Go back</Link> 
          </div>    
        </div>
  );
};

export default List2;
import React from 'react';
import { Link } from 'react-router-dom';

const List4 = () => {
    
    
    return (
        <div>
          <h1>List-4</h1>
          <span>Do Exercise</span>
          <span>Low</span>
          <button onClick>Mark Completed</button> 
          <div>
            <br></br>
            <Link to="/detail">Go back</Link> 
          </div>    
        </div>
  );
};

export default List4;
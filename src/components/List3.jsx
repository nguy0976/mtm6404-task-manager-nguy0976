import React from 'react';
import { Link } from 'react-router-dom';

const List3 = () => {
    
    
    return (
        <div>
          <h1>List-3</h1>
          <span>Clean house</span>
          <span>Medium</span>
          <button onClick>Mark Completed</button> 
          <div>
            <br></br>
            <Link to="/detail">Go back</Link> 
          </div>    
        </div>
  );
};

export default List3;
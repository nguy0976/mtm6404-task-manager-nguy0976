import React from 'react';
import { Link } from 'react-router-dom';

const List1 = () => {
    
    
    return (
        <div>
          <h1>List-5</h1>
          <span>Check as-Done task</span>
          <span>Medium</span>
          <button onClick>Mark Completed</button> 
          <div>
            <br></br>
            <Link to="/detail">Go back</Link> 
          </div>    
        </div>
  );
};

export default List1;
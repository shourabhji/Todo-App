import React from 'react';

import './todoitem.css';

const Todoitems = ({todo ,onDelete}) => {
    return (
        <div className="container">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
          <input id="delete-btn" type="button" value="Delete" onClick={()=>{onDelete(todo)}}/>
            <hr></hr>
                <hr/>           
                   </div>
    );
}

export default Todoitems;

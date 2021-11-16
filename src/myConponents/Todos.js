import React from 'react';
import './todos.css';
import Todoitems from './Todoitems';
const Todos = (props) => {
   
    return (
        <div>
        
           <h2 className="center">To-Do Items </h2>
           {props.todos.length>0  ? props.todos.map((todo)=>{
               return (
               <Todoitems todo={todo} key={Math.random(1000)} onDelete={props.onDelete}/> 
                   
           )}): "No! ToDos to display"}
        </div>
    )
}

export default Todos;

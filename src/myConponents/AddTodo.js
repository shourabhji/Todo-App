import React from 'react';
import './AddTodo.css'
import { useState } from 'react';


const AddTodo = (props) => {
const [Title, setTitle] = useState("");
const [Desc, setDesc] = useState("");
    const submit =(e)=>{
         e.preventDefault()
    if (!Title || !Desc) {
        alert("title or discreption cannot be empty")
        return false;
}
props.addTodo(Title,Desc);
setTitle("");
setDesc("");
}
    return (
        <div className="cointaner">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="">
                <p>Todo Title:</p>
                <input type="text" name="" value={Title} onChange={(e)=>setTitle(e.target.value)} id="text_title" />
                </div>
                  <div>
                <p>Todo Descreption : </p>
               <input type="text" name=""  value={Desc} onChange={(e)=>setDesc(e.target.value)} id="text_desc" />
                  </div>
                  <input type="submit" value="Add-Items" id="btn" />
            </form>
    
        </div>
    );
}

export default AddTodo;

// import logo from './logo.svg';
import Header from './myConponents/header';
import Todos from './myConponents/Todos';
import Footer from './myConponents/footer';
import AddTodo from './myConponents/AddTodo';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let initTodo;
if (localStorage.getItem("todos")===null){
  initTodo =[];
} else{
  initTodo = JSON.parse(localStorage.getItem("todos"));
}

   
    // }
    const onDelete = (todo)=>{
      setTodos(todos.filter((e)=>{
          return e!==todo;
        }));
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    const addTodo=(title,desc)=>{
  let sno;
  if(todos.length===0){
      sno = 0;
  }else
     {
         sno = todos[todos.length-1].sno+1;
       }
        const myTodo={
        sno: sno, 
        title: title,
        desc: desc,
        }
        // console.log(myTodo)
        setTodos([...todos, myTodo]);
      }



    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
      
    }, [todos]);
           
  
   
  return (
      <>
    <Header />
    <AddTodo addTodo={addTodo} />
<Todos  todos={todos} onDelete={onDelete} />
<Footer />
</>
  );
}

export default App;

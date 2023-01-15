import React, { useState } from "react"
import './App.css';
import Tasks from "./Components/Tasks";

const App = () => {
  //let message = "hello world";
  const [tasks, setTasks] = useState([
    { 
      id:'1',
      title:'Estudar Programação',
      completed:false,
    },

    {
      id:'2',
      title:'Ler Livros',
      completed:true,
    }


  ]);

  return (
    <>

    <div className="container">
      <Tasks/>
    </div>

    </>

      );

};

export default App;
import React, { useState } from "react"
import './App.css';

const App = () => {
  //let message = "hello world";
  const [message, setMessage] = useState('hello world');

  return (
    <>

    <div className="container">{message}</div>
    <button onClick={() => setMessage ("helooooooooo")}>Mudar mensagem</button>
    
    </>

      );

};

export default App;
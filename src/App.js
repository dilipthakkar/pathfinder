import { useEffect, useState } from "react";
import "./App.css";
import Board from "./component/board/board";
import Header from "./component/header/Header";
import Node from "./component/Node/node";

const row = 20;
const col = 20;

  




function App() {
  


  


  
  return (
    <div className="App">
      <header >
        <Header />
       
      </header>
      <div className="grid">
        <Board />
      </div>
    </div>
  );
}

export default App;


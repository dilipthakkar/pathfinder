import { useEffect, useState } from "react";
import "./App.css";
import Board from "./component/board/board";
import Node from "./component/Node/node";

const row = 20;
const col = 20;


function App() {
  

  
  

  
  return (
    <div className="App">
      <header>
        <div className="header--btn">
        
        </div>
        <div className="header--info">

        </div>
      </header>
      <div className="grid">
        <Board />
      </div>
    </div>
  );
}

export default App;


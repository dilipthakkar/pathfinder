import React, { useEffect, useState } from 'react'
import Node from '../Node/node';
import { createBoard, creategrid, CreateWall, MouseDown, MouseEnter, Mouseup, resetGird } from './boardsUtil';
import "./board.css"
import { ratinMaze } from '../../algorithms/rat_in_a_maze';
import { v4} from "uuid"
import { bfs } from '../../algorithms/bfs';
import { greedyBfs } from "../../algorithms/greedyBfs";

const Board = () => {
    const [board , setBoard] = useState({});
    
    useEffect(() => {
      let Board = createBoard();
      console.log(Board);
        setBoard(Board);
    }, []);


    const StartFinding = ()=>{
        resetGird(board , setBoard);
        ratinMaze(board.grid, board.startPoint.x,board.startPoint.y, board.grid.length , board.grid[1].length, setGrid , board.endPoint.x , board.endPoint.y);
    }
    const BfsSearch = ()=>{
      resetGird(board , setBoard);
      bfs(board.grid, board.startPoint.x,board.startPoint.y, board.endPoint.x , board.endPoint.y, setBoard , board , setGrid);
  }
  const greedy = ()=>{
    resetGird(board , setBoard);
    greedyBfs(board.grid ,  board.startPoint.x,board.startPoint.y ,  board.endPoint.x , board.endPoint.y , setBoard , board , setGrid);
  }
  

    const setGrid = (grid)=>{
      setBoard({...board , grid : grid});
    }
    
    
    return (
        <div>
         <div className="grid">
        {board.grid && board.grid.map((row) => (
          <div className="grid--row" >
            {row.map((nodes) => (
              <div className="grid--node" 
               onMouseDown = {()=>MouseDown(nodes.x,nodes.y , board , setBoard)}
               onMouseEnter = {()=>MouseEnter(nodes.x,nodes.y ,  board , setBoard)}
               onMouseUp = {()=>Mouseup(nodes.x, nodes.y , board , setBoard)}
              >
                <Node visited={nodes.visited} value={nodes.value} node={nodes}/>
              </div>
            ))}
          </div>
        ))}
      </div>
        <button disabled={board.isSearching} onClick={StartFinding}>click</button>
        <button disabled={board.isSearching} onClick={BfsSearch}>click</button>
        <button disabled={board.isSearching} onClick={greedy}>click</button>
       
        </div>
    )
}

export default Board

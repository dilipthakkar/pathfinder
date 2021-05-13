import React, { useEffect, useState } from 'react'
import Node from '../Node/node';
import { creategrid, CreateWall, MouseDown, MouseEnter, Mouseup, resetGird } from './boardsUtil';
import "./board.css"
import { ratinMaze } from '../../algorithms/rat_in_a_maze';
import { v4} from "uuid"

const Board = () => {
    const [grid, setGrid] = useState([]);
    const [board , setBorad] = useState({});
    const [MousePressed , SetMousePressed] = useState(false);
    const [changeIsStart , setChangeIsStart] = useState(false);

    useEffect(() => {
        creategrid(setGrid);
    }, []);

    const StartFinding = ()=>{
        resetGird(grid , setGrid);
        ratinMaze(grid, 10, 10, grid.length , grid[1].length, setGrid);
    }
    
    
    return (
        <div>
         <div className="grid">
        {grid.map((row) => (
          <div className="grid--row" >
            {row.map((nodes) => (
              <div className="grid--node" 
               onMouseDown = {()=>MouseDown(nodes.x,nodes.y , SetMousePressed , setGrid , grid , changeIsStart, setChangeIsStart)}
               onMouseEnter = {()=>MouseEnter(nodes.x,nodes.y , MousePressed , setGrid , grid , changeIsStart, setChangeIsStart)}
               onMouseUp = {()=>Mouseup(nodes.x, nodes.y , SetMousePressed , setGrid ,grid ,changeIsStart, setChangeIsStart)}
              >
                <Node visited={nodes.visited} value={nodes.value} node={nodes}/>
              </div>
            ))}
          </div>
        ))}
      </div>
        <button onClick={StartFinding}>click</button>
       
        </div>
    )
}

export default Board

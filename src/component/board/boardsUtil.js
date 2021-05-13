const row = 20;
const col = 40
function NewNode(i, j) {
    this.x = i;
    this.y = j;
    this.dir = 0;
    this.value = 1;
    this.visited = 0;
    this.isStart = 0;
    this.isEnd = 0;
  }
function Borad(){
  this.grid = creategrid();
  this.startPoint = {
    x : 0,
    y : 0
  };
  this.endPoint = {
    x : this.grid.length - 1,
    y : this.grid.length - 1
  } ;
  this.mousepressed = false ;
  this.changingStart = false;
  this.changingEnd = false ;
}

export const creategrid = (setGrid) => {
    const arr = [];
    for (let i = 0; i < row; i++) {
      const arrI = [];
      for (let j = 0; j < col; j++) {
        const node = new NewNode(i, j);
        arrI.push(node);
      }
      arr.push(arrI);
    }
    arr[0][0].isStart = 1;
    arr[row-1][col-1] .isEnd = 1;
    // setGrid(arr);
    return arr;
  };

export const CreateWall = (i,j,setGrid , grid)=>{
    const arr = [...grid];
    arr[i][j].value = 0;
    setGrid(arr);
  }


  export const MouseDown = (i , j , mousePress , setGrid , grid,changeIsStart, setChangeIsStart)=>{
    mousePress(true);
    if(grid[i][j].isStart){
        setChangeIsStart(true);
        // grid[i][j].isStart = false;
    }
    else if(!grid[i][j].isStart && !grid[i][j].isEnd){
        toggleWallandSetGrid(grid , setGrid , i , j);

    }
    
  }
  export const MouseEnter = (i,j,IsmousePressed , setGrid , grid,changeIsStart, setChangeIsStart)=>{
    if(IsmousePressed){
        if(changeIsStart){
            console.log("jii");
            makestart(grid , setGrid , i , j);   
        }else{
    toggleWallandSetGrid(grid , setGrid , i , j);

        }
    } 
  }
  
  export const Mouseup = (i,j , mousePress,setGrid , grid , changeIsStart, setChangeIsStart)=>{
      setChangeIsStart(false);
    mousePress(false);
  
  }
  
  const toggleWallandSetGrid = (grid , setGrid , i , j) =>{
    grid[i][j].value = !grid[i][j].value;
    const copyGrid = [...grid];
    setGrid(copyGrid);
  }

  const makestart = (grid , setGrid , i , j)=>{
      for(let k=0;k<grid.length ; k++){
          for(let m=0;m<grid[k].length ; m++){
              grid[k][m].isStart = false;
          }
      }
      grid[i][j].isStart = true;
        const copyGrid = [...grid];
      setGrid(copyGrid);
        
  }

  export const resetGird = (grid , setGrid)=>{
    for(let k=0;k<grid.length ; k++){
        for(let m=0;m<grid[k].length ; m++){
            grid[k][m].visited = false;
        }
    }
    const copyGrid = [...grid];
    setGrid(copyGrid);
  }
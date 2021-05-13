// const isSafe = (i, j, n, arr) => {
//     if (i >= 0 && i < n && j >= 0 && j < n && arr[i][j].value != 0) return true;
//     return false;
//   };

// export const ratinMaze = async (arr, i, j, n, setGrid) => {
//   const tempArr = [...arr];
//   setGrid(tempArr);
//   console.log(arr);
//   await new Promise((done) => setTimeout(() => done(), 5));

//   if (i == n - 1 && j == n - 1) {
//     return true;
//   } else if (isSafe(i, j, n, arr)) {
//     arr[i][j].visited = 1;
//     if (isSafe(i + 1, j, n, arr) && arr[i + 1][j].visited == 0) {
//       const down = await ratinMaze(arr, i + 1, j, n, setGrid);
//       if (down) return true;
//     }
//     if (isSafe(i, j + 1, n, arr) && arr[i][j + 1].visited == 0) {
//       const right = await ratinMaze(arr, i, j + 1, n, setGrid);
//       if (right) return true;
//     }
//     if (isSafe(i, j - 1, n, arr) && arr[i][j - 1].visited == 0) {
//       const left = await ratinMaze(arr, i, j - 1, n, setGrid);
//       if (left) return true;
//     }
//     if (isSafe(i - 1, j, n, arr) && arr[i - 1][j].visited == 0) {
//       const up = await ratinMaze(arr, i - 1, j, n, setGrid);
//       if (up) return true;
//     }
//     arr[i][j].visited = 0;
//   }
// };


const isSafe = (i, j, rows , cols, arr) => {
    if (i >= 0 && i < rows && j >= 0 && j < cols && arr[i][j].value != 0) return true;
    return false;
  };

export const ratinMaze = async (arr, i, j, rows,cols, setGrid) => {
  const tempArr = [...arr];
  setGrid(tempArr);
  await new Promise((done) => setTimeout(() => done(), 5));

  if (i == rows - 1 && j == cols - 1) {
    return true;
  } else if (isSafe(i, j, rows,cols, arr)) {
    arr[i][j].visited = 1;
    if (isSafe(i + 1, j, rows,cols, arr) && arr[i + 1][j].visited == 0) {
      const down = await ratinMaze(arr, i + 1, j, rows,cols, setGrid);
      if (down) return true;
    }
    if (isSafe(i, j + 1,  rows,cols, arr) && arr[i][j + 1].visited == 0) {
      const right = await ratinMaze(arr, i, j + 1,  rows,cols, setGrid);
      if (right) return true;
    }
    if (isSafe(i, j - 1,  rows,cols, arr) && arr[i][j - 1].visited == 0) {
      const left = await ratinMaze(arr, i, j - 1, rows,cols, setGrid);
      if (left) return true;
    }
    if (isSafe(i - 1, j, rows,cols, arr) && arr[i - 1][j].visited == 0) {
      const up = await ratinMaze(arr, i - 1, j,  rows,cols, setGrid);
      if (up) return true;
    }
    arr[i][j].visited = 0;
  }
};

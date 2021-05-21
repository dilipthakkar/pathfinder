
const isSafe = (i, j,rows , cols, arr) => {
    if (i >= 0 && i < rows && j >= 0 && j < cols && arr[i][j].value != 0) return true;
    return false;
  };

export const ratinMaze = async (arr, i, j, rows,cols, setGrid , endX , endY) => {
  const tempArr = [...arr];
  setGrid(tempArr);
  await new Promise((done) => setTimeout(() => done(), 5));

  if (i == endX && j == endY) {
    return true;
  } else if (isSafe(i, j, rows,cols, arr)) {
    arr[i][j].visited = 1;
    if (isSafe(i + 1, j, rows,cols, arr) && arr[i + 1][j].visited == 0) {
      const down = await ratinMaze(arr, i + 1, j, rows,cols, setGrid ,  endX , endY);
      if (down) return true;
    }
    if (isSafe(i, j + 1,  rows,cols, arr) && arr[i][j + 1].visited == 0) {
      const right = await ratinMaze(arr, i, j + 1,  rows,cols, setGrid , endX , endY);
      if (right) return true;
    }
    if (isSafe(i, j - 1,  rows,cols, arr) && arr[i][j - 1].visited == 0) {
      const left = await ratinMaze(arr, i, j - 1, rows,cols, setGrid , endX , endY);
      if (left) return true;
    }
    if (isSafe(i - 1, j, rows,cols, arr) && arr[i - 1][j].visited == 0) {
      const up = await ratinMaze(arr, i - 1, j,  rows,cols, setGrid , endX , endY);
      if (up) return true;
    }
    arr[i][j].visited = 0;
  }
};

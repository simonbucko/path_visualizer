export const createGrid = (rows, columns) => {
    const grid = [[]];
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < columns; j++) {
            //create start node
            if (i == 7 && j == 10) {
                grid[i][j] = {
                    id: `${i} ${j}`,
                    row: i,
                    column: j,
                    isVisited: false,
                    isStartNode: true,
                    isEndNode: false,
                    visitedFrom: "",
                };
            } else if (i == 7 && j == 30) {
                //create end node
                grid[i][j] = {
                    id: `${i} ${j}`,
                    row: i,
                    column: j,
                    isVisited: false,
                    isStartNode: false,
                    isEndNode: true,
                    visitedFrom: "",
                };
            } else {
                grid[i][j] = {
                    id: `${i} ${j}`,
                    row: i,
                    column: j,
                    isVisited: false,
                    isStartNode: false,
                    isEndNode: false,
                    visitedFrom: "",
                };
            }
        }
    }
    return grid;
};
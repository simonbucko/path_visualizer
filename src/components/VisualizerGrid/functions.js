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
                    isWall: false,
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
                    isWall: false,
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
                    isWall: false,
                    visitedFrom: "",
                };
            }
        }
    }
    return grid;
};

export const findEmpyNode = (grid) => {
    let emptyNode = {};
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (!(grid[i][j].isWall)) {
                emptyNode = { row: i, column: j };
                return emptyNode;
            }
        }
    }
}
export const createGrid = (rows, columns) => {
    const grid = [[]];
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < columns; j++) {
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
    return grid;
};
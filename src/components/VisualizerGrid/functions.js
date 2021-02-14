import { DEFAULT_START_NODE, DEFAULT_END_NODE, ALGORITHMS } from './constants';
import { BFS, DFS } from '../../alogorithms'

export const createGrid = (rows, columns) => {
    const grid = [[]];
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < columns; j++) {
            //create start node
            if (i == DEFAULT_START_NODE.row && j == DEFAULT_START_NODE.column) {
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
            } else if (i == DEFAULT_END_NODE.row && j == DEFAULT_END_NODE.column) {
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

export const visualizeAlgorithm = (algo, grid, startNode, endNode, isAlgoVisualized) => {
    switch (algo) {
        case ALGORITHMS[0]: //BFS
            BFS(grid, startNode, endNode, isAlgoVisualized);
            break;
        case ALGORITHMS[1]: //DFS
            DFS(grid, startNode, endNode, isAlgoVisualized);
            break;
        default:
            break;
    }

}
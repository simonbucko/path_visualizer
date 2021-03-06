import { DEFAULT_START_NODE, DEFAULT_END_NODE, ALGORITHMS } from './constants';
import { BFS, DFS, Dijkstra } from '../../alogorithms'

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
                    distance: null,
                    isTree: false
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
                    distance: null,
                    isTree: false

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
                    distance: null,
                    isTree: false

                };
            }
        }
    }
    return grid;
};

export const visualizeAlgorithm = (algo, speed, grid, startNode, endNode, isAlgoVisualized) => {
    switch (algo) {
        case ALGORITHMS[0].abbreviation: //BFS
            BFS(grid, speed, startNode, endNode, isAlgoVisualized);
            break;
        case ALGORITHMS[1].abbreviation: //DFS
            DFS(grid, speed, startNode, endNode, isAlgoVisualized);
            break;
        case ALGORITHMS[2].abbreviation: //DIJ
            Dijkstra(grid, speed, startNode, endNode, isAlgoVisualized);
            break;
        default:
            break;
    }

}

export const cleanTreesFromGrid = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j].isTree = false
        }
    }
}

export const clearBoard = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j].isTree = false
            grid[i][j].isWall = false
        }
    }
}

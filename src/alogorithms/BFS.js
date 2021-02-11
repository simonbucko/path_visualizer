import { GRID_COLUMNS, GRID_ROWS } from '../components/VisualizerGrid/constants'

let path = []
let queue = []
let solution = []
//vectors down,right,up,left
const vectorX = [0, 1, 0, -1];
const vectorY = [1, 0, -1, 0];

export const BFS = (grid, startNode, endNode) => {
    let wasSolvable = false;
    queue.push(grid[startNode.row][startNode.column]);
    while (queue.length > 0) {
        const currentNode = queue.shift();
        solution.push(currentNode);
        grid[currentNode.row][currentNode.column].isVisited = true;
        if (currentNode.row == endNode.row && currentNode.column == endNode.column) {
            wasSolvable = true;
            break;
        }
        findValidNodes(currentNode, grid)
    }
    //backtrack path from start node to end node
    if (wasSolvable) {
        let currentNode = endNode;
        while ((currentNode.row !== startNode.row) || (currentNode.column !== startNode.column)) {
            path.unshift(currentNode);
            const [row, column] = currentNode.visitedFrom.split(' ')
            currentNode = grid[row][column];
        }
    }

    return path;
}

const findValidNodes = (node, grid) => {
    const [row, column] = node.id.split(' ');
    for (let i = 0; i < vectorX.length; i++) {
        //prevent of going ot of the grid
        if (parseInt(row) + vectorX[i] >= GRID_ROWS || parseInt(row) + vectorX[i] < 0 || parseInt(column) + vectorY[i] >= GRID_COLUMNS || parseInt(column) + vectorY[i] < 0) continue;
        const adjacentNode = grid[parseInt(row) + vectorX[i]][parseInt(column) + vectorY[i]];
        if (adjacentNode.isWall || adjacentNode.isVisited) continue;
        else {
            grid[parseInt(row) + vectorX[i]][parseInt(column) + vectorY[i]].visitedFrom = node.id;
            adjacentNode.isVisited = true;
            queue.push(adjacentNode);
        }
    }
}

//need funtion to solve it and return array how were visited
//need funtion to rendering visitedNodes from arry
//store path along the way to be able to figure path
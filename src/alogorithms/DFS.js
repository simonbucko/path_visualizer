import { GRID_COLUMNS, GRID_ROWS } from '../components/VisualizerGrid/constants'
import { clearIsVisited, clearPreviousSolution, visualize, visualizeInstantly } from './functions'

let path = []
let stack = []
let solution = []
//vectors down,right,up,left
const vectorX = [0, 1, 0, -1];
const vectorY = [1, 0, -1, 0];

export const DFS = (grid, speed, startNode, endNode, isVisualized) => {
    document.getElementById('grid').classList.add('disabled')
    document.getElementById('resetBtns').classList.add('disabled')
    clearPreviousSolution(grid);//clearing classes
    clearIsVisited(grid)//clearing values of grid
    path = [];
    stack = [];
    solution = [];
    let wasSolvable = false;
    stack.push(grid[startNode.row][startNode.column]);
    while (!!stack.length) {
        const currentNode = stack.pop();
        solution.push(currentNode);
        if (grid[currentNode.row][currentNode.column].isVisited) continue;
        grid[currentNode.row][currentNode.column].isVisited = true;
        if (currentNode.row == endNode.row && currentNode.column == endNode.column) {
            wasSolvable = true;
            break;
        }
        findValidNodes(currentNode, grid)
    }
    //backtrack path from start node to end node
    if (wasSolvable) {
        //get previous node from endnode
        let currentNode = grid[endNode.row][endNode.column];
        while ((currentNode.row !== startNode.row) || (currentNode.column !== startNode.column)) {
            path.unshift(currentNode);
            const [row, column] = currentNode.visitedFrom.split(' ')
            currentNode = grid[row][column];
        }
        //adding starting node manualy
        path.unshift(grid[startNode.row][startNode.column])
    }
    if (isVisualized) visualizeInstantly(wasSolvable, grid, solution, path)
    else visualize(wasSolvable, grid, solution, path)
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
            stack.push(adjacentNode);
        }
    }
}





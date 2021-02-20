import { GRID_COLUMNS, GRID_ROWS, TREE_COST, SQUARE_COST } from '../components/VisualizerGrid/constants'
import PriorityQueue from './DataStructures/PriorityQueue'
import { clearIsVisited, clearPreviousSolution, visualize, visualizeInstantly } from './functions'

let path = []
//min heap priority queue
let pq;
let solution = []
let dist;
//vectors down,right,up,left
const vectorX = [0, 1, 0, -1];
const vectorY = [1, 0, -1, 0];
export const Dijkstra = (grid, speed, startNode, endNode, isVisualized) => {
    document.getElementById('grid').classList.add('disabled')
    document.getElementById('resetBtns').classList.add('disabled')
    clearPreviousSolution(grid);//clearing classes
    clearIsVisited(grid)//clearing values of grid
    path = [];
    solution = [];
    let wasSolvable = false;
    dist = createDistGrid(startNode);
    pq = new PriorityQueue((a, b) => a[1] < b[1]);
    pq.push([grid[startNode.row][startNode.column], 0])
    while (!pq.isEmpty()) {
        const [currentNode, cost] = pq.pop();
        solution.push(currentNode);
        grid[currentNode.row][currentNode.column].isVisited = true;
        if (currentNode.row == endNode.row && currentNode.column == endNode.column) {
            wasSolvable = true;
            break;
        }
        findValidNodes(currentNode, cost, grid)
    }
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

const findValidNodes = (node, cost, grid) => {
    const [row, column] = node.id.split(' ');
    for (let i = 0; i < vectorX.length; i++) {
        //prevent of going ot of the grid
        if (parseInt(row) + vectorX[i] >= GRID_ROWS || parseInt(row) + vectorX[i] < 0 || parseInt(column) + vectorY[i] >= GRID_COLUMNS || parseInt(column) + vectorY[i] < 0) continue;
        const adjacentNode = grid[parseInt(row) + vectorX[i]][parseInt(column) + vectorY[i]];
        if (adjacentNode.isWall || adjacentNode.isVisited) continue;
        else {
            grid[parseInt(row) + vectorX[i]][parseInt(column) + vectorY[i]].visitedFrom = node.id;
            adjacentNode.isVisited = true;
            const adjacentCost = grid[adjacentNode.row][adjacentNode.column].isTree ? cost + TREE_COST : cost + SQUARE_COST;
            if (adjacentCost < dist[adjacentNode.row][adjacentNode.column]) {
                dist[adjacentNode.row][adjacentNode.column] = adjacentCost;
            }
            pq.push([adjacentNode, dist[adjacentNode.row][adjacentNode.column]]);
        }
    }
}




const createDistGrid = (startNode) => {
    let dist = [[]];
    for (let i = 0; i < GRID_ROWS; i++) {
        dist[i] = [];
        for (let j = 0; j < GRID_COLUMNS; j++) {
            if (i == startNode.row && j == startNode.column) dist[i][j] = 0;
            else dist[i][j] = Infinity;
        }
    }
    return dist;
}
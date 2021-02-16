import { GRID_COLUMNS, GRID_ROWS, SOLUTION_SPEED, PATH_SPEED, TREE_COST, SQUARE_COST } from '../components/VisualizerGrid/constants'
import PriorityQueue from './DataStructures/PriorityQueue'

let path = []
//min heap priority queue
let pq;
let solution = []
let dist;
//vectors down,right,up,left
const vectorX = [0, 1, 0, -1];
const vectorY = [1, 0, -1, 0];
export const Dijkstra = (grid, startNode, endNode, isVisualized) => {
    document.getElementById('grid').classList.add('disabled')
    document.getElementById('resetBtn').classList.add('disabled')
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
        const [row, column] = grid[endNode.row][endNode.column].visitedFrom.split(' ');
        let currentNode = grid[row][column];
        while ((currentNode.row !== startNode.row) || (currentNode.column !== startNode.column)) {
            path.unshift(currentNode);
            const [row, column] = currentNode.visitedFrom.split(' ')
            currentNode = grid[row][column];
        }
    }
    if (isVisualized) visualizeInstantlyBFS(wasSolvable, grid)
    else visualizeBFS(wasSolvable, grid)
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

const visualizeBFS = (wasSolvable, grid) => {
    const interval = setInterval(() => {
        const currentNode = solution.shift();
        document.getElementById(currentNode.id).classList.add('visited')
        if (solution.length == 0) {
            clearInterval(interval)
            if (wasSolvable) visualizePath(grid);
            else {
                document.getElementById('grid').classList.remove('disabled')
                document.getElementById('resetBtn').classList.remove('disabled')
            }
        }
    }, SOLUTION_SPEED)
}

const visualizePath = (grid) => {
    const interval = setInterval(() => {
        const currentNode = path.shift();
        document.getElementById(currentNode.id).classList.add('path')
        grid[currentNode.row][currentNode.column].isPath = true;
        if (path.length == 0) {
            clearInterval(interval)
            document.getElementById('grid').classList.remove('disabled')
            document.getElementById('resetBtn').classList.remove('disabled')
        }
    }, PATH_SPEED)
}

const visualizeInstantlyBFS = (wasSolvable, grid) => {
    solution.forEach(node => {
        document.getElementById(node.id).classList.add('visited')
    })
    if (wasSolvable) visualizeInstantPath(grid);
    document.getElementById('grid').classList.remove('disabled')
    document.getElementById('resetBtn').classList.remove('disabled')
}

const visualizeInstantPath = (grid) => {
    path.forEach(node => {
        document.getElementById(node.id).classList.add('path')
        grid[node.row][node.column].isPath = true;
    })
}

const clearPreviousSolution = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            document.getElementById(grid[i][j].id).classList.remove('visited')
            document.getElementById(grid[i][j].id).classList.remove('path')
        }
    }
}

const clearIsVisited = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j].isVisited = false;
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
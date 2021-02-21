import { PATH_SPEED } from '../components/VisualizerGrid/constants'

export const clearIsVisited = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j].isVisited = false;
        }
    }
}

export const visualize = (speed, wasSolvable, grid, solution, path) => {
    const interval = setInterval(() => {
        const currentNode = solution.shift();
        document.getElementById(currentNode.id).classList.add('visited')
        if (solution.length == 0) {
            clearInterval(interval)
            if (wasSolvable) visualizePath(grid, path);
            else {
                document.getElementById('grid').classList.remove('disabled')
                document.getElementById('resetBtns').classList.remove('disabled')
            }
        }
    }, 100 - speed)
}

const visualizePath = (grid, path) => {
    const interval = setInterval(() => {
        const currentNode = path.shift();
        document.getElementById(currentNode.id).classList.add('path')
        grid[currentNode.row][currentNode.column].isPath = true;
        if (path.length == 0) {
            clearInterval(interval)
            document.getElementById('grid').classList.remove('disabled')
            document.getElementById('resetBtns').classList.remove('disabled')
        }
    }, PATH_SPEED)
}

export const visualizeInstantly = (wasSolvable, grid, solution, path) => {
    solution.forEach(node => {
        document.getElementById(node.id).classList.add('visited')
    })
    if (wasSolvable) visualizeInstantPath(grid, path);
    document.getElementById('grid').classList.remove('disabled')
    document.getElementById('resetBtns').classList.remove('disabled')
}

const visualizeInstantPath = (grid, path) => {
    path.forEach(node => {
        document.getElementById(node.id).classList.add('path')
        grid[node.row][node.column].isPath = true;
    })
}



export const clearPreviousSolution = (grid) => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            document.getElementById(grid[i][j].id).classList.remove('visited')
            document.getElementById(grid[i][j].id).classList.remove('path')
        }
    }
}
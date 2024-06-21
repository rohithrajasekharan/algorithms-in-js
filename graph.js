function matrixDfs(graph,r,c,visit){
    let ROWS = graph.length, COLS = graph[0].length;
    if(Math.min(r,c)<0 || r==ROWS || c==COLS || visit[r][c]==1 || graph[r][c]==1){
        return 0;
    }
    if(r==ROWS-1 && c==COLS-1){
        return 1;
    }
    visit[r][c] = 1;

    let count = 0;

    count += matrixDfs(graph,r+1,c,visit);
    count += matrixDfs(graph,r-1,c,visit);
    count += matrixDfs(graph,r,c+1,visit);
    count += matrixDfs(graph,r,c-1,visit);

    visit[r][c] = 0;
}

function matrixBfs(grid){
   let ROWS = grid.length, COLS = grid[0].length;
   let visit = new Array(4).fill(0).map(()=> new Array(4).fill(0));
   let queue = new Array();
   queue.push(new Array(2).fill(0));
   visit[0][0] = 1;
   while (queue.length>0){
    let queueLength = queue.length;
    for(let i=0; i<queueLength;i++){
        let pair = queue.shift();
        let r = pair[0], c = pair[1];
        if(r == COLS-1 && c == ROWS-1){
            return queueLength;
        }
        let neighbors = [[r,c+1],[r,c-1],[r+1,c],[r-1,c]];
        for (let j=0; j<neighbors.length; j++){
            let newR =  neighbors[j][0], newC = neighbors[j][1];
            if(Math.min(newR,newC)<0 || newR == ROWS || newC == COLS || visit[newR][newC]==1 || grid[newR][newC]==1){
                continue;
            }
            queue.push(newR,newC);
            visit[newR][newC] = 1;
        }
    }
   }
}

function adjacencyList(node,target,grid,visit){
    if(visit.has(node)){
        return 0;
    }
    if(node == target){
        return 1;
    }
    let count = 0;
    visit = new Set();
    visit.add(node);
    for(let neighbor of grid.get(node)){
        count += adjacencyList(neighbor,target,grid, visit);
    }
    visit.delete(node);
    return count;
}
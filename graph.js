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
    
}

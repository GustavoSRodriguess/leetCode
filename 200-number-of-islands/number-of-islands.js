/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let countIsland = 0

    for(let rowIndex in grid){
        for(let colIndex in grid[rowIndex]){
            if(grid[rowIndex][colIndex] === '1'){
                countIsland++;
                terraform(parseInt(rowIndex), parseInt(colIndex), grid)
            }
        }
    }
    return countIsland
};

const terraform = (rowIn, colIn, grid) =>{
    if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === '0')return;

    grid[rowIn][colIn] = '0'

    terraform(rowIn+1, colIn, grid);
    terraform(rowIn-1, colIn, grid);
    terraform(rowIn, colIn+1, grid);
    terraform(rowIn, colIn-1, grid);
}
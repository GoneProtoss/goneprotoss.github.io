// get valid cells around cell(r, c) in a field(row, col)
function get_cells_around(r, c, row, col) {
    let results = [];
    if (r-1 >= 0  && c-1 >= 0 ) {results.push([r-1, c-1]);}
    if (r-1 >= 0              ) {results.push([r-1, c  ]);}
    if (r-1 >= 0  && c+1 < col) {results.push([r-1, c+1]);}
    if (             c-1 >= 0 ) {results.push([r,   c-1]);}
    if (             c+1 < col) {results.push([r,   c+1]);}
    if (r+1 < row && c-1 >= 0 ) {results.push([r+1, c-1]);}
    if (r+1 < row             ) {results.push([r+1, c  ]);}
    if (r+1 < row && c+1 < col) {results.push([r+1, c+1]);}
    return results;
}
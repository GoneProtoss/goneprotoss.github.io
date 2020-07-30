// 0: nothing, 1-8: digits, 9: mine
var Field = {
    mine_left: 0,
    field: [],
    init_field: function(level) {
        this.mine_left = level.mine;

        // fill up cells with mines
        while (this.mine_left > 0) {
            for (let row = 0; row < level.row; row++) {
                if (this.field.length < row+1) {
                    this.field.push([]);
                }
                for (let col = 0; col < level.col; col++) {
                    let random_number = Math.random();
                    let val = 0;
                    if (random_number < 0.05 && this.mine_left > 0) {
                        this.mine_left = this.mine_left - 1;
                        val = 9;
                    }
                    if (this.field[row].length < col+1) {
                        this.field[row].push(val);
                    } else if (this.field[row][col] !== 9 && val === 9) {
                        this.field[row][col] = 9;
                    }
                }
            }
        }

        // fill up cells with digits
        for (let row = 0; row < level.row; row++) {
            for (let col = 0; col < level.col; col++) {
                if (this.field[row][col] !== 9) {
                    let sum = 0;
                    let cells_around = get_cells_around(row, col, level.row, level.col);
                    for (let cell_cor of cells_around) {
                        if (this.field[cell_cor[0]][cell_cor[1]] === 9) {sum++;}
                    }
                    this.field[row][col] = sum;
                }
            }
        }
    }
};
var levels = {
    easy: {row: 9, col: 9, mine: 10},
    normal: {row: 16, col: 16, mine: 40},
    hard: {row: 16, col: 30, mine: 99}
};
var current_level = levels.easy;

var the_field = Object.create(Field);
the_field.init_field(current_level);

console.log(the_field.field);
var field_node = document.querySelector(".mine-field");
field_node.style.width = current_level.col*16 + "px";

var cell_dict = [
    "",
    "<span style='color:blue'>1</span>",
    "<span style='color:green'>2</span>",
    "<span style='color:red'>3</span>",
    "<span style='color:darkblue'>4</span>",
    "<span style='color:darkred'>5</span>",
    "<span style='color:cadetblue'>6</span>",
    "<span style='color:black'>7</span>",
    "<span style='color:gray'>8</span>",
    "<span>🚩</span>",
    "<span>💣</span>",
    "<span>💥</span>",
];

for (let row of the_field.field) {
    let row_node = document.createElement("div");
    row_node.className = "row";
    for (let item of row) {
        let cell_node = document.createElement("div");
        cell_node.innerHTML = cell_dict[item];
        cell_node.classList = item < 9 ? "cell cell-solved" : "cell cell-unknown";
        // cell_node.classList = "cell cell-unknown";
        row_node.appendChild(cell_node);
    }
    field_node.appendChild(row_node);
}

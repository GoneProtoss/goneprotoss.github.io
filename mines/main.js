window.onload = ()=>{
    // init default status
    let current_level = levels.get_curent();
    let the_field = Object.create(Field);

    the_field.create_new_field(current_level);

    /**
     * bind events for level btns to init the board
     */
    let level_btns = document.querySelectorAll(".level-d");
    for (let level_btn of level_btns) {
        level_btn.addEventListener("click", (event)=>{
            event.preventDefault();
            if (event.target.className.indexOf("level-d-active") === -1) {
                level_btns.forEach((item)=>{item.className = "level-d"});
                event.target.className = "level-d level-d-active";

                // setting up current level
                current_level = levels.get_curent();

                // create new board(game)
                the_field.create_new_field(current_level);
            }
            return false;
        });
    }

    /**
     * bind event for start btn
     */
    let start_btn = document.querySelector("#start-btn");
    let start_btn_emoji = start_btn.innerHTML;
    start_btn.addEventListener("mousedown", (event)=>{
        event.preventDefault();
        start_btn_emoji = start_btn.innerHTML;
        start_btn.innerHTML = "😯";
        start_btn.className = "mousedown";
        return false;
    });
    start_btn.addEventListener("mouseup", (event)=>{
        event.preventDefault();
        start_btn.innerHTML = start_btn_emoji;
        start_btn.className = "";
        // setting up current level
        current_level = levels.get_curent();
        // create new board(game)
        the_field.create_new_field(current_level);
        return false;
    });

    // the_field.init_field(current_level);
}
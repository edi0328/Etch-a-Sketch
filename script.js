//Get grid div to add grid blocks

const grid = document.querySelector("#grid");


//Create 16 divs x 16 divs
for (let i = 0; i < 16; i++) {
    const blockRow = document.createElement("div");
    blockRow.setAttribute("class", "gridRow")
    for (let j = 0; j < 16; j++) {
        const block = document.createElement("div");
        block.setAttribute("class", "block");
        blockRow.appendChild(block);
    }
    grid.appendChild(blockRow);
}

//For hovering effect
grid.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("block")) {
        e.target.setAttribute("style", "background: red;")
        e.stopPropagation();
    }

})

grid.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("block")) {
        e.target.setAttribute("style", "background: white;");
        e.stopPropagation();
    }
})
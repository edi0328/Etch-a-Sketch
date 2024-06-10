//Get grid div to add grid blocks

let grid = document.querySelector(".grid");

//Create 16 divs x 16 divs
function createGrid(size, grid) {
    for (let i = 0; i < size; i++) {
        const blockRow = document.createElement("div");
        blockRow.setAttribute("class", "gridRow")
        for (let j = 0; j < size; j++) {
            const block = document.createElement("div");
            block.setAttribute("class", "block");
            blockRow.appendChild(block);
        }
        grid.appendChild(blockRow);
    }
}

function makeHover(grid) {
    //For hovering effect
    grid.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("block")) {
            e.target.setAttribute("style", "background: red;")
            e.stopPropagation();
        }

    })

    //Turn off hovering when mouse leaves
    grid.addEventListener("mouseout", (e) => {
        if (e.target.classList.contains("block")) {
            e.target.setAttribute("style", "background: white;");
            e.stopPropagation();
        }
    })
}

function resizeGrid() {
    let newSize;
    do {
        newSize = Number(prompt("How big do you want?"));
    } while (!(newSize <= 100 && newSize > 0));
    grid.remove();

    const newGrid = document.createElement("div");
    newGrid.setAttribute("class", "grid");

    createGrid(newSize, newGrid);
    const body = document.querySelector("body");
    body.appendChild(newGrid);
    grid = newGrid;
    makeHover(grid);
}


createGrid(16, grid);
makeHover(grid);

const btn = document.querySelector("button");
btn.onclick = resizeGrid;


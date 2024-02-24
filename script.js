let TOTAL_SIZE = window.innerHeight;
let GRID_SIZE = 16;
let BOX_SIZE = Math.floor(TOTAL_SIZE / GRID_SIZE);

let console = document.querySelector('.console');

function setup() {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < GRID_SIZE; i++) {
        row = document.createElement('div');
        row.classList.add('gridrow');

        // Create all the boxes for current row
        for (let j = 0; j < GRID_SIZE; j++) {
            square = document.createElement('div');
            square.style.width = `${BOX_SIZE}px`;
            square.style.height = `${BOX_SIZE}px`;
            square.classList.add('square');
            row.appendChild(square);
        }

        grid.appendChild(row);
    }

    grid.addEventListener('mouseover', changeBackground);
}

function changeBackground(event) {
    if (event.target.classList.contains('square')) {
        event.target.classList.add('hover');
    }
}

setup();
// console.textContent = BOX_SIZE;
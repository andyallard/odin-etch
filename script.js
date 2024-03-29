let IS_MOBILE = /Mobi|Android/i.test(navigator.userAgent);

IS_MOBILE ? TOTAL_SIZE = window.innerWidth : TOTAL_SIZE = window.innerHeight;

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
            square.setAttribute('data-number', '0');
            square.classList.add('square');
            if (i === 0 && j === 0) {
                settings = document.createElement('p');
                settings.classList.add('settings');
                // settings.textContent = '?';
                settings.style.fontSize = `${BOX_SIZE - 4}px`;
                
                settings.addEventListener('click', changeGridSize);

                square.appendChild(settings);
            }

            // if on mobile, this will add touch listeners to each square.
            // this impacts performance, so is only done on mobile.
            if (IS_MOBILE) {
                square.addEventListener('touchstart', touchChangeBackground);
                square.addEventListener('touchmove', touchChangeBackground);
            }

            row.appendChild(square);
        }

        grid.appendChild(row);
    }

    if (!IS_MOBILE) {
        grid.addEventListener('mouseover', changeBackground);
    }
}

function changeBackground(event) {
    if (event.target.classList.contains('square')) {
        square = event.target
        // event.target.classList.add('hover');
        opacity = Math.min(parseInt(square.getAttribute('data-number')) + 1, 10);
        square.setAttribute('data-number', opacity);
        square.style.backgroundColor = `rgba(22, 90, 112, ${opacity / 10})`;
    }
}

function touchChangeBackground(event) {
    event.preventDefault();
    alert(Array(...event.touches));
    event.target.classList.add('hover');
}

function changeGridSize() {
    GRID_SIZE = 0;
    while (GRID_SIZE > 100 || GRID_SIZE < 2 || isNaN(parseInt(GRID_SIZE))) {
        GRID_SIZE = window.prompt('Choose a new grid size! For example, if you enter 30, it will create a 30x30 grid.\n\nMIN SIZE = 2, MAX SIZE = 100');
    }
    
    TOTAL_SIZE = window.innerHeight;
    BOX_SIZE = Math.floor(TOTAL_SIZE / GRID_SIZE);
    IS_MOBILE = /Mobi|Android/i.test(navigator.userAgent);

    div = document.querySelector('.grid');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    setup();
}

setup();
// console.textContent = BOX_SIZE;
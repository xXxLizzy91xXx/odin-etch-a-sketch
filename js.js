/*
Etch A Sketch game

Create using js 
1. container the grid will be in- HTML
2. create 16 x 16 grid- JS
3. Set hover effect so grid changes color when mouse goes over
4. Add button top of the screen that will popup asking user how many squares they want for their grid
max 100

*/

function createGrid(x) {
    const container = document.getElementById('container');

    for (let row = 0; row < x; row++){
        for (let col= 0; col < x; col++) {
            let div = document.createElement('div');
            div.className = 'grid';
            container.appendChild(div);
        }
    }

    let grids = document.getElementsByClassName('grid');
    let gridWidth = 500 / x;

    for (let i = 0; i < grids.length; i++) {
        grids[i].style.width= gridWidth + 'px';
        grids[i].style.height= gridWidth + 'px';
    }
}

function clearGrid(){
    let grids = document.getElementsByClassName('grid');

    while (grids.length > 0) {
        grids[0].parentNode.removeChild(grids[0]);
    }
}

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addGridEventListeners() {
    let grids = document.getElementsByClassName('grid');

    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = getRandomColor();
        });
    }
}

function refreshGrid() {
    let z = prompt("How many boxes?");
    clearGrid();
    createGrid(z);
    addGridEventListeners();
}

document.addEventListener('DOMContentLoaded', function() {
    createGrid(5);
    addGridEventListeners();


    let newGridButton = document.getElementsByClassName('newGrid')[0];
    newGridButton.addEventListener('click', function() {
        refreshGrid;

        let grids = document.getElementsByClassName('grid');

        for (let i=0; i < grids.length; i++){
            grids[i].addEventListener('mouseover', function() {
                this.style.backgroundColor = getRandomColor();
            });
        }
    });
});
'use strict';

console.log('>> Ready :)');

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const width = 8;
    const squares = [];

    const candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ]

    //Create Board
    function createBoard () {
        for (let i = 0; i < width*width; i++) {
            const square = document.createElement('div');
            square.setAttribute('draggable', true);
            square.setAttribute('id', i);
            let randomColor = Math.floor(Math.random() * candyColors.length);
            square.style.backgroundColor = candyColors[randomColor];
            grid.appendChild(square);
            squares.push(square);
        }
    }
    createBoard ();

    //Drag the candies
let colorBeingDragged
let colorBeingReplaced
let squareIdBeingDragged
let squareIDBeingReplace


    squares.forEach(square => square.addEventListener('dragstart', dragStart));
    squares.forEach(square => square.addEventListener('dragend', dragEnd));
    squares.forEach(square => square.addEventListener('dragover', dragOver));
    squares.forEach(square => square.addEventListener('dragenter', dragEnter));
    squares.forEach(square => square.addEventListener('dragleave', dragLeave));
    squares.forEach(square => square.addEventListener('drop', dragDrop));

    function dragStart () {
        colorBeingDragged = this.style.backgroundColor;
        squareIdBeingDragged = parseInt(this.id);
        console.log('colorBeingDragged');
        console.log(this.id, 'dragstart');

    }

    function dragEnd () {
        console.log(this.id, 'dragend');
    }

    function dragOver (e) {
        e.preventDefault();
        console.log(this.id, 'dragover');
    }

    function dragEnter (e) {
        e.preventDefault();
        console.log(this.id, 'dragenter');
    }

    function dragLeave () {
        console.log(this.id, 'dragleave');
    }

    function dragDrop () {
        console.log(this.id, 'drop');
        colorBeingReplaced = this.style.backgroundColor;
        squareIDBeingReplace = parseInt(this.id);
        this.style.backgroundColor = colorBeingDragged;
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
    }

})

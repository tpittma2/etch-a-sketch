const boxSize = document.getElementById('box-range');

const gameContainer = document.querySelector('.game-container');
const btnClear = document.querySelector('.clear');
const btnToggleGrid = document.querySelector('.toggle-grid');
const colorButtons = document.querySelectorAll('color-option-button');
const btnPenColor = document.querySelector('pen-color');
const colorPicker = document.getElementById('pen-color');
const ACTIVE_COLOR_CLASS = 'active-color';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function setColorMethod(control)
{

    colorButtons.forEach(x=> {
        if(x == control)
        {
            x.classList.add(ACTIVE_COLOR_CLASS);
        }
        else
        {
            x.classList.remove(ACTIVE_COLOR_CLASS);
        }
    })
}

function buildGame()
{
    let gameSize = parseInt( boxSize.value);
    removeAllChildNodes(gameContainer);
    for(let i=0; i < gameSize; i++)
    {
        let newRow = document.createElement("div");
        newRow.classList.add('game-row');
        gameContainer.appendChild(newRow);
        for(let j=0; j < gameSize; j++)
        {
            let newSquare = document.createElement('div')
            newSquare.classList.add('game-square');
           // newSquare.classList.add('grid');
            newSquare.addEventListener('mouseover', function(e){ colorBox(e)});
            newRow.appendChild(newSquare);
        }
    }
}

function toggleGridLines() {
    const gameSquares = document.querySelectorAll('.game-square');
    gameSquares.forEach(square => { square.classList.toggle('grid'); })
}

function colorBox(e) {
    e.target.style['background-color'] = getRandomColor(); //'black';
}

function setBoxSizeText()
{
    const boxSizeElements = document.querySelectorAll('.box-size');
    boxSizeElements.forEach(x=> x.textContent = `${boxSize.value}x${boxSize.value}`);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }





boxSize.addEventListener('input', function(e)
{
    const boxSizeElements = document.querySelectorAll('.box-size');
    boxSizeElements.forEach(x=> x.textContent = `${e.target.value}x${e.target.value}`);
});
boxSize.addEventListener('change', buildGame);
btnClear.addEventListener('click', buildGame);
btnToggleGrid.addEventListener('click', toggleGridLines);
colorButtons.forEach(x=> x.addEventListener('click', function(e){setColorMethod(e.target)}));

boxSize.value = 16;
setBoxSizeText();
buildGame();


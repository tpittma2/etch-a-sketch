const boxSize = document.getElementById('box-range');
const gameContainer = document.querySelector('.game-container');
const btnClear = document.querySelector('.clear');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
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
            newSquare.addEventListener('mouseover', function(e){ colorBox(e)});
            newRow.appendChild(newSquare);
        }
    }
}

function colorBox(e) {
    e.target.style['background-color'] = 'black';
}




boxSize.addEventListener('input', function(e)
{
    const boxSizeElements = document.querySelectorAll('.box-size');
    boxSizeElements.forEach(x=> x.textContent = `${e.target.value}x${e.target.value}`);
});
boxSize.addEventListener('change', buildGame);
btnClear.addEventListener('click', buildGame);
buildGame();

//applyButton.addEventListener()
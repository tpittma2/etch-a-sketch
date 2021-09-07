const boxSize = document.getElementById('box-range');
const gameContainer = document.querySelector('.game-container');

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
            newRow.appendChild(newSquare);
        }
    }
}






boxSize.addEventListener('input', function(e)
{
    console.log(`in oninput`);
    const boxSizeElements = document.querySelectorAll('.box-size');
    boxSizeElements.forEach(x=> x.textContent = e.target.value);
});
boxSize.addEventListener('change', buildGame);

buildGame();

//applyButton.addEventListener()
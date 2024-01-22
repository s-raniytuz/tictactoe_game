const gameBoard = document.querySelector('#game-wrapper');
const currentItem = document.querySelector('#current-item');
const gameItems = Array.from(document.querySelectorAll('.game-item'));

function allEqual(arr) {
    if (arr[0].textContent !== '') {
        return arr.every((item) => item.textContent === arr[0].textContent);
    }
}

function currentSwitch() {
    if (currentItem.textContent === 'X') {
        currentItem.textContent = 'O';
    } else {
        currentItem.textContent = 'X';
    }
}

gameBoard.addEventListener('click', function (evt) {
    const target = evt.target;
    const placeItem = currentItem.textContent;
    if (target.textContent === '') {
        target.textContent = placeItem;
        currentSwitch();
        checkGameStatus();
    }
});

function checkGameStatus() {
    /*if (
        (gameItems[0].textContent === gameItems[1].textContent &&
            gameItems[0].textContent === gameItems[2].textContent) ||
        (gameItems[0].textContent === gameItems[3].textContent &&
            gameItems[0].textContent === gameItems[6].textContent) ||
        (gameItems[0].textContent === gameItems[4].textContent &&
            gameItems[0].textContent === gameItems[8].textContent)
    ) {
        gameItems[0].style.color = 'red';
    }*/
    const row1 = [gameItems[0], gameItems[1], gameItems[2]];
    const row2 = [];
    const row3 = [];
    const column1 = [];
    const column2 = [];
    const column3 = [];
    const diagonalLeftRight = [];
    const diagoanalRightLEft = [];

    if (allEqual(row1)) {
        console.log('it works');
    } else if (allEqual(row2)) {
        console.log('it works');
    }
}

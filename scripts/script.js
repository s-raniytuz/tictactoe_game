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
        target.classList.add('transition-class');
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
    const row2 = [gameItems[3], gameItems[4], gameItems[5]];
    const row3 = [gameItems[6], gameItems[7], gameItems[8]];
    const column1 = [gameItems[0], gameItems[3], gameItems[6]];
    const column2 = [gameItems[1], gameItems[4], gameItems[7]];
    const column3 = [gameItems[2], gameItems[5], gameItems[8]];
    const diagonalLeftRight = [gameItems[0], gameItems[4], gameItems[8]];
    const diagoanalRightLEft = [gameItems[6], gameItems[4], gameItems[2]];

    if (allEqual(row1)) {
        console.log('it works');
    } else if (allEqual(row2)) {
        console.log('it works');
    } else if (allEqual(row3)) {
        console.log('it works');
    } else if (allEqual(column1)) {
        console.log('it works');
    }
}

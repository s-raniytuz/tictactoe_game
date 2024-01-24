const gameBoard = document.querySelector('#game-wrapper');
const currentItem = document.querySelector('#current-item');
const gameItems = Array.from(document.querySelectorAll('.game-item'));
const crossLine = document.querySelector('#cross-line');

let counterX = 0;
let counterO = 0;

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

function itemTransform(arrWin, arrLose) {
    arrWin.forEach((item) => {
        item.classList.remove('.transition-class');
        item.classList.add('win-class');
    });

    arrLose.forEach((item) => {
        item.classList.remove('transition-class');
        item.classList.add('lose-class');
    });
}

function checkGameStatus() {
    const row1 = [gameItems[0], gameItems[1], gameItems[2]];
    const row2 = [gameItems[3], gameItems[4], gameItems[5]];
    const row3 = [gameItems[6], gameItems[7], gameItems[8]];
    const column1 = [gameItems[0], gameItems[3], gameItems[6]];
    const column2 = [gameItems[1], gameItems[4], gameItems[7]];
    const column3 = [gameItems[2], gameItems[5], gameItems[8]];
    const diagonalLeftRight = [gameItems[0], gameItems[4], gameItems[8]];
    const diagonalRightLeft = [gameItems[6], gameItems[4], gameItems[2]];

    if (allEqual(row1)) {
        itemTransform(row1, row2.concat(row3));
        crossLine.classList.remove('hidden');
        crossLine.classList.add('winRow1');
    } else if (allEqual(row2)) {
        itemTransform(row2, row1.concat(row3));
    } else if (allEqual(row3)) {
        itemTransform(row3, row1.concat(row2));
    } else if (allEqual(column1)) {
        itemTransform(column1, column2.concat(column3));
    } else if (allEqual(column2)) {
        itemTransform(column2, column1.concat(column3));
    } else if (allEqual(column3)) {
        itemTransform(column3, column1.concat(column2));
    } else if (allEqual(diagonalLeftRight)) {
        const arrLost = [];
        gameItems.forEach((item) => {
            if (!diagonalLeftRight.includes(item)) {
                arrLost.push(item);
            }
        });
        itemTransform(diagonalLeftRight, arrLost);
    } else if (allEqual(diagonalRightLeft)) {
        const arrLost = [];
        gameItems.forEach((item) => {
            if (!diagonalRightLeft.includes(item)) {
                arrLost.push(item);
            }
        });
        itemTransform(diagonalRightLeft, arrLost);
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

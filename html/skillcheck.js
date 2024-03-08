var timerInterval = null;
var eKeyPressed = false;
var slotPosition = 0;
var currPosition = 1;

function startGame() {
    var hackingContainer = document.querySelector('.hacking-container');
    var movingSquare = document.querySelector('.moving-square');
    var buttonPress = document.querySelector('.button-press');
    var squareSlot = document.querySelector('.square-slot');
    hackingContainer.style.display = 'flex'
    movingSquare.style.boxShadow = "0 0 5px 0px #d41936";
    movingSquare.style.marginLeft = "1%";
    buttonPress.style.background = '#7e1921';
    movingSquare.style.background = '#7e1921';
    squareSlot.style.setProperty('--background-gradient', 'radial-gradient(circle, #d41936, red)');
    eKeyPressed = false;
    currPosition = 0;
    randomizeSquareSlot();
    tick();
}

function checkWin() {
    var movingSquare = document.querySelector('.moving-square');
    var squareSlot = document.querySelector('.square-slot');
    var buttonPress = document.querySelector('.button-press');
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    if (slotPosition - 2 <= currPosition && currPosition <= slotPosition + 2) {
        movingSquare.style.scale = '1.2';
        setTimeout(function () {
            movingSquare.style.scale = '1';
        }, 300);
        return true;
    }
    movingSquare.style.background = "#121212";
    buttonPress.style.background = "#121212";
    return false;
}

function tick() {
    var movingSquare = document.querySelector('.moving-square');
    timerInterval = setInterval(function () {
        movingSquare.style.marginLeft = "".concat(currPosition, "%");
        currPosition += 1;
        if (currPosition > Math.min(slotPosition + 7, 94)) {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
            handleKeyPress(new KeyboardEvent('keydown', { key: 'E' }));
        }
    }, 50);
}

function handleKeyPress(event) {
    if (!eKeyPressed && (event.key.toLowerCase() === 'e')) {
        eKeyPressed = true;
        var won = checkWin();
        fetch(`https://${GetParentResourceName()}/GetResult`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: won
        });

        setTimeout(function () {
            var hackingContainer = document.querySelector('.hacking-container');
            hackingContainer.style.display = 'none'
        }, 1000);
    }
}
function randomizeSquareSlot() {
    var squareSlot = document.querySelector('.square-slot');
    slotPosition = Math.floor(Math.random() * (90 - 15) + 15);
    squareSlot.style.marginLeft = "".concat(slotPosition, "%");
    squareSlot.style.display = "flex";
}

document.addEventListener('keydown', handleKeyPress);

window.addEventListener('message', (event) => {
    if (event.data.type === 'start') {
        startGame();
    }
});
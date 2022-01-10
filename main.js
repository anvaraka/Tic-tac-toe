import {
    drawOnTile,
    checkWinner
} from "./helper.js";

let lastClickedTile;
let tileX;
let tileY;
let gameOver = false;
let currentPlayer = "X";

let tileMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const sign = document.querySelector(".winner-sign")

const clickTile = (event) => {
    if (event.target.nodeName === "TD" && !gameOver) {
        lastClickedTile = event.target


        const tileClassName = lastClickedTile.className.split("-")[1]

        const tileX = tileClassName[0];
        const tileY = tileClassName[1]
        /* console.log(tileClassName)

        console.log(tileX)
        console.log(tileY) */

        if (tileMatrix[tileX][tileY] !== 0) {
            return
        }

        tileMatrix[tileX][tileY] = currentPlayer;
        /* console.log(tileMatrix) */


        gameOver = checkWinner(tileMatrix, tileX, tileY, currentPlayer);

        if (gameOver) {
            sign.innerText = `The winner is ${currentPlayer}`;
            sign.style.top = "calc(50% - 25px)"
        }

        currentPlayer = drawOnTile(lastClickedTile, currentPlayer);
    }
}

document.addEventListener('click', clickTile)

const clearTiles = () => {
    document.querySelectorAll('td').forEach(tile => tile.innerText = "");
    sign.innerText = "";
    sign.style.top = "-50px";
    gameOver = false;
    currentPlayer = "X";
    tileMatrix = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
};

document.querySelector(".restart").addEventListener("click", clearTiles);
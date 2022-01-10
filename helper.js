export const drawOnTile = (tile, currentPlayer) => {
    tile.innerText = currentPlayer;
    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    return nextPlayer;
}

export const checkWinner = (tileMatrix, tileX, tileY, currentPlayer) => {
    // checking row
    const rowWin = tileMatrix[tileX].every(matrixValue => matrixValue === currentPlayer)
    //checking column
    const colWin = tileMatrix.every((rowOfMatrixValues) => rowOfMatrixValues[tileY] === currentPlayer);
    //checking left to right diagonal 
    const leftToRight = tileMatrix.every(
        (rowOfMatrixValues, index) => rowOfMatrixValues[index] === currentPlayer
    );
    //checking right to left diagonal 
    const rightToLeft = tileMatrix.every((rowOfMatrixValues, index) => rowOfMatrixValues[2 - index])

    return rowWin || colWin || leftToRight || rightToLeft;
};
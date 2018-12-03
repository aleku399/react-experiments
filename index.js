const makeEmptyBoard = () => {
    let board = [];
    for (let i = 0; i < 8; i++) {
            board[i] = [];
            for (let j = 0; j < 8; j++) {
                board[i][j] = false;
        }
    }
    return board;
}
const makeBoard = () => {
    let cells = [];
    for (let y = 0;  y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            console.log(makeEmptyBoard()[y][x]);
            if (!makeEmptyBoard()[y][x]) cells.push({ x: x, y: y});
        }
    }
    return cells;
}
console.log(makeBoard())

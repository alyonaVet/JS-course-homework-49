const chessBoard = (width: number, height: number): string => {
    let chessboard: string = '';
    for (let i: number = 0; i < width; i++) {
        for (let j: number = 0; j < height; j++) {
            const cellColor: '#' | ' ' = (i + j) % 2 === 0 ? '#' : ' ';
            chessboard += cellColor;
        }
        chessboard += '\n';
    }
    return chessboard;
};
const chessboard: string = chessBoard(8, 8);
console.log(chessboard);
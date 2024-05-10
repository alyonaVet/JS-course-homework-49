const alpha:string = "abcdefghijklmnopqrstuvwxyz";
const chessBoard = (width: number, height: number): string => {
    width = width < 27 ? width : 26
    const letters:string = `  ${alpha.slice(0,width)}   \n`;
    const horizBorder:string = `  ${'-'.repeat(width)}   \n`;

    let chessboard: string = '';
    chessboard += letters;
    chessboard += horizBorder;

    for (let i: number = 0; i < height; i++) {
        chessboard += `| `;
        for (let j: number = 0; j < width; j++) {
            const cellColor: '\u25A0' | ' ' = (i + j) % 2 === 0 ? '\u25A0' : ' ';
            chessboard += cellColor;
        }
        chessboard += ` | ${height-(i)}\n`;
    }
    chessboard += horizBorder;

    return chessboard;
};
const chessboard: string = chessBoard(8, 8);
console.log(chessboard);
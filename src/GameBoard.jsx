import { useState } from "react"

const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onSelectSquare, turns}) {

    let gameBoard = intialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const { row, col} = square;
        gameBoard[row][col] = player;
    }
    // const [gameBoard, setGameBoard] = useState(intialGameBoard);
    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGmBoard) => {
    //         const updatedBoard = [...prevGmBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex] [colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }
    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) =>
                    <li key={ colIndex }>
                        <button onClick={()=> onSelectSquare(rowIndex, colIndex)}>{playerSymbol}
                        </button>
                    </li>)}
            </ol>
        </li>)}
    </ol>
}
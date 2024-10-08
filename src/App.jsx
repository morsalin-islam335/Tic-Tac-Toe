import { useState } from "react";
import "./App.css";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-stone-400 border border-gray-100 h-20 w-20 m-1 text-white leading-20 font-extrabold"
      onClick={onSquareClick}
    >
      <h1>{value}</h1>
    </button>
  );
}

function DetermineWinner(squares) {
  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return `Winner is ${squares[a]}`;
    }
  }
  return null; // Return null if no winner
}
export default function Board() {
  const [squares, setSquare] = useState(Array(9).fill(null)); // make 9 elements array and fill them with null
  const [xIsNext, Toggle] = useState(true);
  const [status, nextMove] = useState("Start The Game");

  function handleClick(i) {
    if (squares[i]) return; // Ignore the click if the square is already filled
    if (DetermineWinner(squares)) {
      nextMove(DetermineWinner(squares));
      return;
    } // winner have already declared.

    const newSquare = [...squares]; // Create a copy of the squares
    newSquare[i] = xIsNext ? "X" : "Y"; // Set the square based on whose turn it is
    setSquare(newSquare); // Update the state

    // declare winner
    const winner = DetermineWinner(squares);
    if (winner) {
      nextMove(winner); // Update the status to show the winner
      return;
    } else {
      nextMove(`Next is ${xIsNext ? "Y" : "X"}`); // Update the status for the next player
    }
    Toggle(!xIsNext); // Toggle the turn
  }
  return (
    <>
      <div className="flex ms-10">
        <h3 className="text-amber-500 text-xl">{status}</h3>
      </div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

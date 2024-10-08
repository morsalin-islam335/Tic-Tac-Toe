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

export default function Board() {
  const [squares, setSquare] = useState(Array(9).fill(null)); // make 9 elements array and fill them with null
  const [xIsNext, Toggle] = useState(true);
  function handleClick(i) {
    if (squares[i]) return; // squares of i is already fill then it will return
    const newSquare = [...squares];
    newSquare[i] = xIsNext ? "X" : "Y";
    Toggle(!xIsNext);
    setSquare(newSquare);
  }
  return (
    <>
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

import React, { useState } from 'react'
import Square from './Square';
export default function Board() {
    function renderSquare(i) {
        return (
          <Square
            value={first.squares[i]}
            onClick={() => {
              const squares = first.squares.slice();;
              squares[i] = 'X';
              setfirst({ squares: squares });
            }}
          />
        );
      }
      
    const [first, setfirst] = useState({
       squares : Array(9).fill(null) 
    })
    const status = 'Next player: X';
  return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
  )
}

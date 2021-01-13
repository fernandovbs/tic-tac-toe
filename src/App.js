import './App.css';
import Node from './Node'
import { useState } from 'react'
import logo from './tic-tac-toe.png'

function App() {
  let [currentPlayer, setCurrentPlayer] = useState('xplayer')
  let [board, setBoard] = useState(new Array(9).fill(''))
  let [winner, setWinner] = useState('');

  const possibleCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const setMovement = (position, index) => {
    if (board[index] === '' && winner === '') {
      let newMovement = board
      newMovement[index] = currentPlayer
      setBoard(newMovement)
      
      if (checkResults(currentPlayer)) {
          currentPlayer === 'xplayer' ? setWinner('X Player') : setWinner('O Player')
      }  
      currentPlayer === 'xplayer' ? setCurrentPlayer('oplayer') : setCurrentPlayer('xplayer') 
    }
  }

  const checkResults = (currentPlayer) => {
    let checkedPositions = board.map((player, index) => player === currentPlayer ? index : false)

    for (const possibleCombination of possibleCombinations) {
      const found = possibleCombination.every(position => checkedPositions.indexOf(position) >= 0)

      if (found) {
        return true;
      }
    }
    return false;
  }

  const restart = () => {
    setBoard(new Array(9).fill(''))
    setWinner('')
  }

  if (winner) {

  }
  return (
    <div className="App">
      <img src={logo} width="150" height="150"/>
      <h2>{winner && `The winner is ${winner}!`}</h2>
      <button onClick={() => {restart()}}>Restart match</button>
      <div className="board">
        {board.map((position, index) => <a href="#" key={index} onClick={() => {setMovement(position, index)}}><Node  position={index} value={board[index]}/></a>)}
      </div>
    </div>
  );
}

export default App;

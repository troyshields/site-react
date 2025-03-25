import { useState, useRef, useEffect } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import ReactConfetti from 'react-confetti'
import './Tenzies.css'

export default function Tenzies() {

  const [dice, setDice] = useState(() => generateAllNewDice())

  const buttonRef = useRef(null)
  
  // every returns boolean
  const allHeld = dice.every(die => die.isHeld)
  const firstValue = dice[0].value;
  const allSameValue = dice.every(die => die.value === firstValue);
  
  const gameWon = allHeld && allSameValue

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus()
    }

  }, [gameWon])
  
  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        // value: 5,
        isHeld: false,
        id: nanoid()
      }));
  }
  
  const diceElements = dice.map((dieObj) => <Die
    key={dieObj.id} 
    value={dieObj.value} 
    isHeld={dieObj.isHeld}
    hold={() => hold(dieObj.id)}
    />);

  function rollDice() {
    if (!gameWon) {
      setDice(oldDice => oldDice.map(die => 
          die.isHeld ?
              die :
              { ...die, value: Math.ceil(Math.random() * 6) }
      ))
    } else {
      setDice(generateAllNewDice());
    }
  }
  
  function hold(id) {

    setDice(oldDice => oldDice.map(die =>
      die.id === id ?
          { ...die, isHeld: !die.isHeld } :
          die
    ))
  }
  
  return (
    <>
      <h1>Tenzies</h1>
      <div className='tenzies'>
        <div className='inner'>
          <h2 className="title">Tenzies</h2>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          
          <div className="dice-container">
              {diceElements}
          </div>
          
          <button 
            ref={buttonRef}
            className='roll-dice' 
            onClick={rollDice}
            >{gameWon ? "New Game" : "Roll Dice"}
          </button>
          {gameWon ? <ReactConfetti /> : null}
          <div aria-live="polite" className='sr-only'>
              {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
          </div>
        </div>       
      </div>
    </>
  )
}
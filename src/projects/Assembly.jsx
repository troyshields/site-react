import { useState, useRef, useEffect } from 'react'
import './Assembly.css'
import { languages } from '../data/assemblylanguages'
import clsx from 'clsx'
import { getFarewellText, getRandomWord } from '../data/assemblyutils'
import ReactConfetti from 'react-confetti'

export default function Assembly() {
  // state values
  const [guessedLetters, setGuessedLetters] = useState([])
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [farewellMessage, setFarewellMessage] = useState('')
  const [screenReaderMessage, setScreenReaderMessage] = useState('');

  // derived values
  const wrongGuessCount = guessedLetters.reduce((count, guessed) => {
    return guessed.isCorrect ? count : count + 1  
  }, 0)
  const isGameWon = currentWord.split('').every(letter =>
    guessedLetters.some(guessed => guessed.letter === letter && guessed.isCorrect)
  )
  const isGameLost = wrongGuessCount >= languages.length
  const isGameOver = isGameWon || isGameLost

  // static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const languageChips = languages.map((language, index) => {
    
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color
    }

    return (

      <li 
        key={language.name}
        style={styles}
        className={clsx({
          lost: index < wrongGuessCount, 
        })}
        >
        {language.name}
      </li>
    )}
  )

  const letterElements = currentWord.split('').map((letter, index) => {
    const isGuessedCorrectly = guessedLetters.some(
      (guessed) => guessed.letter === letter && guessed.isCorrect
    )

    const letterClassName = clsx({
      'revealed-letter': isGameLost && !isGuessedCorrectly
    })

    return (
      <li 
        key={index}
        className={letterClassName}
      >
        {isGuessedCorrectly ? letter : isGameLost ? letter : ''}
      </li>
    )
  })

  const keyboardElements = alphabet.split('').map((letter) => {
    const guessedLetter = guessedLetters.find(item => item.letter === letter)
    const className = clsx({
      'correct': guessedLetter && guessedLetter.isCorrect,
      'incorrect': guessedLetter && guessedLetter && !guessedLetter.isCorrect,
      'guessed': guessedLetter,
    })

    return (
      <button 
        key={letter}
        onClick={() => handleLetterClick(letter)}
        className={className}
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
      >
        {letter}</button>
    )
  })

  function handleLetterClick(letter) {   
    const isCorrect = currentWord.includes(letter);

    setGuessedLetters(prevLetters => {
      const letterAlreadyGuessed = prevLetters.some(
        item => item.letter === letter
      )

      if (letterAlreadyGuessed) {
        return prevLetters
      }

      const newGuessedLetters = [...prevLetters, { letter, isCorrect }];
      const wrongGuessCount = newGuessedLetters.filter(
        (guessed) => !guessed.isCorrect
      ).length;

      const guessesLeft = languages.length - wrongGuessCount;

      let message = `The letter ${letter} was ${
        isCorrect ? 'correct' : 'incorrect'
      }. You have ${guessesLeft} guesses left.`;

      if (isGameWon) {
        message = 'You won the game!';
      } else if (isGameLost) {
        message = 'You lost the game.';
      }

      setScreenReaderMessage(message);
      return newGuessedLetters;
    })
  }

  useEffect(() => {
    if (wrongGuessCount > 0 && wrongGuessCount <= languages.length) {
      const lostLanguage = languages[wrongGuessCount - 1].name
      setFarewellMessage(getFarewellText(lostLanguage))
    } else {
      setFarewellMessage('')
    }
  }, [wrongGuessCount, isGameWon, isGameLost])

  const gameStatusClass = clsx("status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: farewellMessage
  })

  function handleNewGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])

  }

  return (
    <>

      <h1>Assembly: Endgame</h1>

      <div className="assembly">
        <div className="inner">
          <h2 className="title">Assembly: Endgame</h2>

          <p className="instructions">Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>

          <div aria-live='polite' role='status' className={gameStatusClass}>
            
            {isGameOver ? (
              isGameWon ? (
                <>
                  <h2>You win!</h2>
                  <p>Well done! 🎉</p>
                </>
              ) : (
                <>
                  <h2>Game over!</h2>
                  <p>You lose! Better start learning Assembly 😭</p>
                </>
              )
            ) : (
              null
            )}
            {farewellMessage && !isGameWon && !isGameLost && (
              <>
                {farewellMessage}
              </>
            )}
          </div>

          <div className="language-chips">
            <ul>
              {languageChips}
            </ul>
          </div>

          <div className="current-word">
            <ul>
              {letterElements}
            </ul>
          </div>
          <div className='sr-only' aria-live='polite' role='status'>
            {screenReaderMessage}
          </div>

          <div className="alphabet">
            {keyboardElements}
          </div>

          {isGameOver && 
            <button 
              className="new-game"
              onClick={handleNewGame}
            >New Game</button>
          }

          {isGameWon && 
            <ReactConfetti
              recycle={false}
              numberOfPieces={10000} 
            />}

        </div>
      </div>
    </>
  )
}
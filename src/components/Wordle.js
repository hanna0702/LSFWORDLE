import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'
import jsonData from './../data/data.json'

export default function Wordle({ solution ,difficulty} ) {
  console.log("In Wordle Function", solution)
  console.log("difficulty:", difficulty)
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, usedLetters } = useWordle(solution)
  const [showModal, setShowModal] = useState(false)
  const [letterDict, setLetterDict] = useState({})
  const [letters, setLetters] = useState(null)


  const handleParentClick = (value) => {
    console.log('keypad button pressed: ', value);
    handleKeyup(value)
  };
  
  useEffect(() => {
    const json = jsonData.letters
        console.log("LETTERS", json)
        
        if (difficulty == "difficile"){
        
          for(let i = 0 ; i < json.length; i++){
            json[i].image = json[i].imagehard
          }
       }

      setLetters(json)
        for (let i = 0; i < json.length; i++) {
          letterDict[json[i].key] = json[i].image

        }
        console.log("LETTER DICT", letterDict)
  }, [ ])

  // This commented out code is for the Keyboard. Enable it to use the keyboard

   useEffect(() => {
     

    if (isCorrect) {
       setTimeout(() => setShowModal(true), 2000)
      
     }
     if (turn > 5) {
       setTimeout(() => setShowModal(true), 2000)
       
     }

   
   }, [handleKeyup, isCorrect, turn])

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} usedLetters={usedLetters} solution={solution} letterDict={letterDict}/>
      <Keypad onClick={handleParentClick} usedKeys={usedKeys} letters={letters}/>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  )
}

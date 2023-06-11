import React from 'react'

// components
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn, usedLetters, solution, letterDict }) {
  console.log("in Grid")
//  console.log(guesses)
  //console.log(currentGuess)
// console.log(turn)
  console.log(usedLetters)
 
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} usedLetters={usedLetters} solution={solution} letterDict={letterDict}/>
        }
        return <Row key={i} guess={g} usedLetters={usedLetters} solution={solution} letterDict={letterDict}/> 
      })}
    </div>
  )
}

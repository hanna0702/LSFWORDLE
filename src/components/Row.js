import React from 'react'

export default function Row({ guess, currentGuess, usedLetters, solution, letterDict }) {
  if (guess) {
    let letters = guess
    let usedLettersKey = []
    let usedLettersImage = []

    console.log("GUESS:", guess, "usedLetterKey:", usedLettersKey, "Used LettersImage:", usedLettersImage)
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            <img
              src={letterDict[l.key]} alt='' width="100%"
              height="100%"
              transform={'translate("-50%", "-50%")'}
              position={"absolute"}
              left={"50%"}
              top={"50%"}
            />
          </div>
        ))}
      </div>
    )
  }
  const solutionLength = solution.split('').length;

  if (currentGuess) {
    console.log("guess:", currentGuess)
    let letters = currentGuess.split('')
    let usedLettersKey = []
    let usedLettersImage = []
    console.log("USED LETTER:", usedLetters)

    console.log("USED LETTER KEY:", usedLettersKey)
    console.log("USED LETTER IMG", usedLettersImage)
    console.log("CURRENT GUESS AS ARRAY:", letters)

    return (
      <div className="row current">
        {letters.map((letter, i) => {

          return (
            <div key={i} className="filled">
              <script>{console.log("Image/letter:", letter, " index:", i)}</script>
              <img src={letterDict[letter]} width="60" height="60" /></div>
          )
        })}
        {[...Array(solutionLength - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      {solution.split('').map((letter, i) => (
        <div key={i}>
        </div>
      ))}


    </div>
  )

}

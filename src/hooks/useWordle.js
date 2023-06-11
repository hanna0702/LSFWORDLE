import { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({}) // {a: 'grey', b: 'green', c: 'yellow'} etc
  const [usedLetters, setusedLetters] = useState([])

  const solutionLength= solution.split('').length;

  // format a guess into an array of letter objects 
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let letters = currentGuess.split('')
    let lettersObj = {}
    let usedLettersKey  = [] 
    let usedLettersImage  = []

    

    for(let i = 0; i < usedLetters.length; i++){
      
      if(letters.includes(usedLetters[i].key)){
        lettersObj[usedLetters[i].key] = usedLetters[i].image
        usedLettersKey.push(usedLetters[i].key)
        usedLettersImage.push(usedLetters[i].image)
      }
    }
    console.log("LETTERS OBJ", lettersObj)

    let solutionArray = [...solution]
    let formattedGuess = [...currentGuess].map((l) => {
      return {key: l, color: 'grey', image: lettersObj[l]}
    })

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solution[i] === l.key) {
        formattedGuess[i].color = 'green'
        solutionArray[i] = null
      }
    })
    
    // find any yellow letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== 'green') {
        formattedGuess[i].color = 'yellow'
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess) => {
    console.log('addNewGuess')
    if (currentGuess === solution) {
      setIsCorrect(true)
    }
    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setHistory(prevHistory => {
      return [...prevHistory, currentGuess]
    })
    setTurn(prevTurn => {
      return prevTurn + 1
    })
    setUsedKeys(prevUsedKeys => {
      console.log('prevUsedKeys', prevUsedKeys)
      formattedGuess.forEach(l => {
        const currentColor = prevUsedKeys[l.key]

        if (l.color === 'green') {
          prevUsedKeys[l.key] = 'green'
          return
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          prevUsedKeys[l.key] = 'yellow'
          return
        }
        if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
          prevUsedKeys[l.key] = 'grey'
          return
        }
      })

      return prevUsedKeys
    })
    setCurrentGuess('')
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = (input) => {
    let key = input.key
    let image = input.image

    //This if statement is needed for this function to work with the keyboard AND keypad
    //When you are done using the keyboard, you can get rid of it
    if (!(typeof key === 'string')){
      key = key.key
    }
    if (key === 'Enter') {
      // only add guess if turn is less than 5
      if (turn > solutionLength) {
        console.log('you used all your guesses!')
        return
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log('you already tried that word.')
        return
      }
      // check word is 5 chars
      if (currentGuess.length !== solutionLength) {
        console.log(`word must be ${solutionLength} chars.`) 
        return
      }
      const formatted = formatGuess()
      addNewGuess(formatted)
    }
    if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
      setusedLetters(prev => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < solutionLength) {
        console.log("Current guess:", currentGuess)
        setCurrentGuess(prev => prev + key )
        setusedLetters(oldArray => [...oldArray, {key: key, image: image}]);
      }
    }
  }

  return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup, usedLetters}
}

export default useWordle
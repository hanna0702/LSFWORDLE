import { useEffect, useState } from 'react'
import Wordle from './Wordle'
import Menu from './Menu'
import jsonData from './../data/data.json'
export default function MainMenu() {

const [solution, setSolution] = useState(null)
const [difficulty, setDifficulty] = useState(null)
const [displayMenu, setdisplayMenu] = useState(null)

  console.log("IN APP")

  useEffect(() => {
        // random int between 0 & 14
        const json = jsonData.solutions
        const randomSolution = json[Math.floor(Math.random() * json.length)]
        console.log("solution is:", randomSolution)
        setSolution(randomSolution.word)
        
  }, [setSolution])

  const handleDifficultyClick = (value) => {
    setdisplayMenu("none")
    console.log('difficulty pressed', value.target.innerText);
    setDifficulty(value.target.innerText)
  };


return (<div className= "difficultymenu">
    {<Menu />}
    <div style={{display: displayMenu}} >
<p className= "Welcome">
        Bienvenue sur Dactylomo !
    </p>
    <p className= "SelectDifficulty">
        Choisis la difficulté:
    </p>
<button className="easy" onClick={handleDifficultyClick} value="easy" >
    facile

    
</button>
<button className="difficile" onClick={handleDifficultyClick} value="difficile">
difficile
</button>
</div>
<div className="app-menu">
        
        </div>
        <div className="wordleGame">
            {console.log("Loading WOrld")}
        {difficulty && solution && <Wordle solution={solution} difficulty={difficulty}/>  } 
        </div>




</div>)



}

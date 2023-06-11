import React from 'react'


export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Victoire!</h1>
          <p className="solution">{solution}</p>
          <p>Tu as trouvé le mot en {turn} essais :)</p>
          <video autoplay width="350" height="275" controls>
          <source src="/media/Avion1.mp4" type="video/mp4"/>
     </video>
         
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>échec</h1>
          <p className="solution"> Le mot était: 
 {solution}</p>
          <p>à demain pour un nouveau mot :)</p>
          <video autoplay width="350" height="275" controls>
          <source src="/media/Avion1.mp4" type="video/mp4"/>
     </video>
        </div>
      )}
    </div>
  )
}



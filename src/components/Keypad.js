import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Modal from './Modal'


export default function Keypad({ usedKeys, onClick, letters  }) {
  const [letterDict, setLetterDict] = useState({})

  // This function gets the value of the key that was clicked and passes it to the Wordle.js file that has the handleKeyup function
  // HandleKeyup is the function that handles keys being pressed or clicked
  const handleClick = (event) => {
    console.log("JSON LETTER", letterDict)
    const value = event.target.getAttribute('value');
    console.log("event", event)
    console.log(JSON.parse(value))
    onClick(JSON.parse(value));
  };

  const specificKeyIndex = 19;
  return (
    <div className="keypadcontainer">
      <div className="keypad">
        {letters &&
          letters.map((l, index) => {
            const color = usedKeys[l.key];
            const image_for_letter = l.image;

            return (
              <React.Fragment key={l.key}>
                {index === specificKeyIndex && (
                  <button className= "backspace"
                    onClick={handleClick}
                    value={JSON.stringify({ key: "Backspace", image: "" })}
                  >
                    &#9003; 
                  </button>
                )}
                <div className={color} onClick={handleClick} value={JSON.stringify(l)}>
                  <img
                    value={JSON.stringify(l)}
                    alt=""
                    src={image_for_letter}
                    width="100%"
                    height="100%"
                    transform={'translate("-50%", "-50%")'}
                    position= "absolute"
                    left={"50%"}
                    top={"50%"}
                  />
                </div>
              </React.Fragment>
            );
          })}
      <button onClick={handleClick} value={JSON.stringify({key: 'Enter', image: ''})} >
      &#9166;
      </button>
      </div>
    </div>
  );

  
}
function sayHelloWorld(stringImage){
  console.log(stringImage)

}

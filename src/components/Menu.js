import { useEffect, useState } from 'react'


const image_for_a = "http://drive.google.com/uc?export=view&id=1WIPi_yVkBISE0vxkJwkHcFsAhHhqvlcT"
const image_for_i = "http://drive.google.com/uc?export=view&id=1gSLZwKaCHaWKjtt08OclxzIMNDpaTSKZ"
const image_for_o = "http://drive.google.com/uc?export=view&id=1C9uvOG8yZzMuDLsbZGMxlPC08QHYcMdL"
const image_for_n = "http://drive.google.com/uc?export=view&id=1WQsXxbxKvJQoK_D9Fk8ljPuqtcn0gbbU"
const image_for_v = "http://drive.google.com/uc?export=view&id=1PccWD1LzTu7INy0PBtcjqbhlf82YLqlR"
const image_for_s = "http://drive.google.com/uc?export=view&id=1DIWRoReyPM9vfZWFrXOc2cc82ms3uo03"
const image_for_e = "http://drive.google.com/uc?export=view&id=1EA47SJX-3ZoEecdPjXJ9q5gzkqSU-kLp"
const image_for_c = "http://drive.google.com/uc?export=view&id=13Gwrnv5GgV2DNfep_u85_S6N3-JkPGQC"
const image_for_r = "http://drive.google.com/uc?export=view&id=12kbOH4hx3GUJWUUTKpx4FJvj-fIK5-mS"
const image_for_p = "http://drive.google.com/uc?export=view&id=1gTXBF-j0PAQduzS97Qvivq-YjzX2peZT"

export default function Menu() {
    const [instruction_button, setInstruction] = useState(false)
    const [instructionDisplay, setInstructionDisplay] = useState("none")
    function display_instructions() {
        setInstruction(true)
        setInstructionDisplay("block")
        
        //onclick()
    }
    function turn_off_instructions() {
        setInstruction(true)
        setInstructionDisplay("none")
        //onclick()
    }

    return <div>
        <button id= "instructions" onClick={display_instructions}>
        ?
  

       </button>

        <div class="inst_modal" style={{display: instructionDisplay}}>
        
        <button class="close_button" onClick={turn_off_instructions}>
        &#10007;
        </button>
        <h2 className= "commentjouer" >Comment jouer ? </h2>

       

        <div class="container">

            <button class="tries-button">
                Vous avez 6 essais pour trouver le mot
            </button>
            <button class="correct-button">
                Une lettre en <span class="span_vert"> VERT</span> est bien placée
                <div>
                    <button class="menubutton">
                        <img src={image_for_c}
                            alt=""
                            width="100%"
                            height="100%"
                            

                        />
                    </button>
                    <button class="menubutton">
                        <img src={image_for_e}
                            alt=""
                            width="100%"
                            height="100%"
                        />
                    </button>
                    <button class="r_button">
                        <img src={image_for_r}
                            alt=""
                            width="100%"
                            height="100%"
                        />
                    </button>
                    <button class="menubutton">
                        <img src={image_for_i}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="s_button">
                        <img src={image_for_s}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="menubutton">
                        <img src={image_for_e}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>

                </div>
            </button>

            <button class="wrongplace-button">
                Une lettre en <span class="span_jaune"> ORANGE </span>existe dans le mot mais est mal placée

                <div>
                    <button class="menubutton">
                        <img src={image_for_p}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="a_button">
                        <img src={image_for_a}
                            alt=""
                            width="100%"
                            height="100%"
                            

                        />
                    </button>
                    <button class="menubutton">
                        <img src={image_for_p}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="menubutton">
                        <img src={image_for_i}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="e_button">
                        <img src={image_for_e}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="menubutton">
                        <img src={image_for_r}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>

                </div>
            </button>

            <button class="unexistant-button">
                Une lettre en <span class="span_violet"> BLEU</span> n'existe pas dans le mot

                <div>
                    <button class="menubutton">
                        <img src={image_for_a}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="v_button">
                        <img src={image_for_v}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="i_button">
                        <img src={image_for_i}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="o_button">
                        <img src={image_for_o}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="menubutton">
                        <img src={image_for_n}
                            alt=""
                            width="100%"
                            height="100%"
                            
                        />
                    </button>
                    <button class="menubutton">
                        <img src={image_for_s}
                            alt=""
                            width="100%"
                            height="100%"
                        
                        />
                    </button>

                </div>
            </button>

        </div>


    </div>

    </div>
}


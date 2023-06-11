# Next steps for this:

- Add the images for all the other letters
- Since the keyboard will be disabled, you need onscreen buttons that do the same as the "enter" key and the "backspace" to delete letters
    - The useWordle file already has logic for this (Line 90 and 109), to have it work with the keypad do this:
        1. Create the button in the keypad file (Remember the "<button>" tag)
            - instead of having it send a letter like the other keypad keys, have it send the "enter" and "backspace" keys
            - you can do this by have a "value='enter' " in the tag
            - you also have to give "onClick={handleClick}" to the 2 new button elements

- Change the "Row.js" file so that it displays images instead of letters (Do this in the IF statement on line 17)
    - That file has an if statement on line 5, that if statement is when u are guessing a word
    - The if statement on line 17 is for when you are only adding a letter
    - Look at how we changed the if statement on Line 5 to display and image. Try doing the same for if statement on 17


- I think thats all u need! Good Luck! Lmk if u need more help!


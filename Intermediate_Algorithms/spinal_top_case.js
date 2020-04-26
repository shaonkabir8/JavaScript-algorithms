/*
    🔥 Intermediate Algorithm Scripting: Spinal Tap Case

    ⚡ Instruction: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

    🌏 Refference: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
*/



function spinalCase(str) {

    // convert string into Array with split();
    // separate every word with RegExp
    // after that, Join the separated words with "-"
    // convert back to String with join();
    // finally retrun spinal-case

    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase()

}


spinalCase('thisIsSpinalTap');
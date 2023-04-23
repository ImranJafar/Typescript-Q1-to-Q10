/* check vovel words in regular function
function vovel(letter:string) {
    if (letter==="a"){ 
        console.log ( "a is vovel word");
    }
        else if (letter==="e"){ 
            console.log ( "e is vovel word");
    }
    else if (letter==="i"){ 
        console.log ( "i is vovel word");
}
else if (letter==="o"){ 
    console.log ( "o is vovel word");
}
else if (letter==="u"){ 
    console.log ( "u is vovel word");
}
else {
    console.log (` ${letter} is not vovel world`)
}
}
vovel("d")
// tsc checkvovel.ts && node checkvovel.js*/

/* check vovel words in function exprsion
const vovel= function (letter:string) {
    if (letter==="a"||letter==="e"||letter==="i"||letter==="o"|| letter==="u"){ 
    return` letter ${letter} is vovel world`
    }
       
else {
    return` letter ${letter} is not vovel world`
}
}
// console.log(vovel("b")) or 

let result = vovel ("u")
console.log(result) */

// check vovel words in Arrow Function with metnod of array.toLowerCase()
const vovel= (letter:string) =>{
    letter=letter.toLocaleLowerCase();
    if (letter==="a"||letter==="e"||letter==="i"||letter==="o"|| letter==="u"){ 
    return` letter ${letter} is vovel world`
    }
       
else {
    return` letter ${letter} is not vovel world`
}
}
// console.log(vovel("b")) or 

let result = vovel ("e")
console.log(result)


 //tsc checkvovel.ts && node checkvovel.js





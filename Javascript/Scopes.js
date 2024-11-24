let a = 10
const b = 20
var c = 30

console.log(a, b, c)


// {} --- scope ----------------------

// var c =300  // globally - outside of the block 

if (true) {
    // local scope within the block 
    let a = 10   // --o/p -> undefined -- remains in the block outside value is not printed
    const b = 20   //--o/p -> undefined -- remains in the block outside value is not printed
    var c = 90    // --o/p -> 90 -- override the value for all 'c'
}


console.log(c)  // var value is --- coming outside the block that is wrong as we can use teh same var anywhere else also so it will override that

// let will show the scope value  within teh block it reamis same and globally we are using then teh global value will extract



// nested scope  child -> parent value access but parent cant access child  value

function one() {
    const username = "aastha"

    function two() {
        const website = "youtube"
        console.log(username)
    }
           // scope- website 
           // console.log(website)
    two()
}

one()



// ---- expression is like var can hold function but acess locally only or below of this expression

// console.log(addTwo(6))   -- will give error as add two is not defined brefore calling

const addTwo=function(num) {
  return num +2
}

console.log(addTwo(6))  // here teh same code will work

// ---- simple function

console.log(addaOne(10))  // it will print the output -- it will work outside as well or above the block

function addaOne(num) {
    return num +10
  }

  
// console.log(addaOne(6))   ---- It willl also work as function can be accesssed globally 


//-----------------------------------------

// IIFE --> Imedietaly Invoked Function Expressions (IIFE)

// WHY IIFE USED ? ----   global scope ke poluttion se problem us poluttion ko remove krne ke liye IIFE used


function Example_IIFE() {
    console.log(`DB CONNECTED `)
}

Example_IIFE();

(function testing() {
 console.log(`DB CONNECTED new  `)
})();

// () first me , function defination 2 ,  ()  execution



// ---Arrow Function IIFE invoked while passing teh value as well
((name) => {
 console.log(`db is coneected via arrow function ${name} `)
})('hitesh')
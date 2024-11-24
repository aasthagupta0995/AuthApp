// Function -> make package -> and can use its copies to perform action to avoid re write again and again we can resue 

function sayName() {  // parameter 
    console.log("Hi")
    console.log("Hi")
    console.log("Hi")
    console.log("Hi")

}

sayName()  // refrence and execution and arguements will pass 




function TwoSumStandard(a, b) {   // (parameters)
    console.log(a + b);
    return a + b;
}

TwoSumStandard(2, 5)  //  o/p---> 7   ---(arguements)


// TwoSum(2,"5")  --->  25 takes as string
// TwoSum(2,"a")  --->  2a takes as string

function ThreeSum(a, b, c) {

    let result = a + b + c
    console.log(result)
    return result
    // console.log(result)
    // return k baad koi kaam nahi krega , kuch print nahi hoga 

}

ThreeSum(20, 60, 20)

function loginUser(username) {
    if(username){
    return `${username} LoggedIn`
    }
    else{
        console.log('please enter username')
    }
}

console.log(loginUser("Aastha"))




function calculateCarPrice(...num1) {   // rest operator if multiple values need to pass it will add that value in array
    return num1;
}

console.log(calculateCarPrice(200,400,600))  // o/p --->[ 200, 400, 600 ]


// passing object in function

const user={
    username:"aas",
    price:199,

}

function handleUserDetails (anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)

}

handleUserDetails(user)


// passing array in function 

const marks =[100, 400, 300]

function CalculateMarks (data){
return console.log(`marks are ${data[1]}`)
}

CalculateMarks(marks)




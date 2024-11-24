// this --> refers to the current object/ current context

const userRegister = {   // this will be used to access this object only
    username: 'Aas',
    price: '456',
    welcomeMsg: function () {
        console.log(`${this.username} welcome website`)

        console.log(this)
    }
}

userRegister.welcomeMsg()
userRegister.username = 'rohit'

userRegister.welcomeMsg()


// console.log(this)  -- refers to thes empty object , but in browser it shows 
// window global object 


function thisinfunction (){
    let username ='aasthaaaaa..'
    // console.log(this)

    // this is not  be able to use in function only in objects this keyword will work
}

thisinfunction ()



// -------Arrow frunction
const chai =(num1 , num2)=>{
    return num1 +num2     // explicit return if {}

}
console.log(chai(7,9))


// implicit return 
const chai_code =(num1 , num2)=> num1 +num2
// or 
const code =(num1 , num2)=> ({username:'club'})  // object in arrow function
console.log(code(7,9))
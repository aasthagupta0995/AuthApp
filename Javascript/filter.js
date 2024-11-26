
// fiter 

const newUser = [ 9,3,46,7,68,4,356]

const Age = newUser.filter((user)=> user>=60 )
console.log( `Age is above ` , Age)


const books = ["Science" , "Maths " ,"SST " , "Hindi ","Maths " ,"SST " , "Hindi "]

const usedBooks = books.filter((book)=>{
    return book==="Science"
})

console.log(usedBooks,"used Books ")

//-----------------------------------------------------------------

  // mapping
const newmap = [1,2,34,55,6,6]

const mapping = newmap.map((data)=>{
    return data*2
})

console.log(mapping)
//-----------------------------------------------------------------

// for each will not return w have to store and again print 
const ddata =[4,5,6,7,8,10]

const values = ddata.forEach((data)=>{
    const newData = data*3
    console.log(newData)
})

 
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// ------------------------------------------------------
// optional chaining

// method +method ...

const newNum = [1,2,3,4,5,6,7,8]

const chaining = newNum
                .map((num)=>num*10)  // array *10 -- [10,20,30,40,50,60,70,80]
                .map((num)=>num+5)  // now from above map array it will --- +5--[ 15, 25, 35, 45,55, 65, 75, 85  ]
                .filter((num)=>num>50) // now from last -- it will filter  -- above 50 --[ 55, 65, 75, 85 ]

 console.log(chaining)

 //-----------------------------------------------------------------

//  reduce

const number =[1,2,3,4,5]

const TotalNumber = number.reduce((acc,currVal)=>{
    console.log(`values of acc is ${acc} + currValue is ${currVal} = ${acc+currVal}`)
    return acc+currVal
// },0) // initial value can be start from anywhere 
},3)
console.log(TotalNumber)
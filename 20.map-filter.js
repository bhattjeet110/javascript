// map method

let arr = [20, 30, 50,60]

let a = arr.map((value, index, array)=>{

console.log(value,index,array)
return value+1
})

console.log(a)

// filter method

let arr2 = [10,20,30,2,3,4]

let newarry = arr2.filter((value)=>{
   return value<10
})

console.log("filter function che aa: " + newarry)


// reduce method

let arr3 = [1,2,3,4]

let a3 = arr3.reduce((x1, x2)=>{
    return x1 + x2
})

console.log(a3)

// reducemethod 2


let arr31 = [1,2,3,4]

const refunct = (x1,x2) =>{
    return x1 + x2
}
let a31 = arr3.reduce(refunct)

console.log(a31)
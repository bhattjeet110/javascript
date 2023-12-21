let num = [3, 5, 1, 2, 4]

// for(let i=0; i<num.length;i++){
//   console.log(num[i])
// }

// ForEach Loop   // make a function in the loop
num.forEach((element) => {
  console.log(element * element)
})

// Array.from 
let Name = "Jeetu"
let arr = Array.from(Name)
console.log(arr)

// for...of    // MOST IMP
for (let item of num){
  console.log(item)
}

// for...in
for (let i in num){
  console.log(num[i])
}
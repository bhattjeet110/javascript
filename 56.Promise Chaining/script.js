
let j1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log("Resolve after 3 second")
    resolve(56)
  }, 3000)
})

j1.then((value)=>{
console.log(value)

let j2 = new Promise((resolve, reject)=>
{
    setTimeout(( )=>{
        resolve("Promis 2")
    }, 3000)
    
} )
return j2
}) .then((value)=>{
    console.log("we are done")
    return 2
}) .then((value)=>{
    setTimeout(()=>{
        console.log("Abhi to ye final")
    }, 3000)
    
})

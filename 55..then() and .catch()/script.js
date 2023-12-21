let j1 = new Promise((resolve, reject)=>{
    console.log("Promise is panding")
    setTimeout(()=>{
        console.log("I am promise i am resolve")
        resolve(true)
    }, 5000)
})

let j2 = new Promise((resolve, reject)=>{
    console.log("Promise is panding")
    setTimeout(()=>{
        console.log("I am promise2 i am rejected")
        reject(new Error("I am an erro"))
    }, 5000)
})

j1.then((value)=>{
    console.log(value)

})

j1.catch((error)=>{
    console.log(error,"Some errors accured in j2")

})

// j1.then((value)=>{
//     console.log(value)
// }, (erro)=>{
//     console.log(error)
// })

// j2.catch((error)=>{
//     console.log("Some errors accured in j2")
// })
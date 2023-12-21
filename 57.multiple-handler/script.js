console.log("This is multiple handler")
let j = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("promise is not resolved")
        resolve()
    }, 2000)
})

j.then(()=>{
 alert("congo your promise is resolved")
})

j.then(()=>{
   console.warn("ho gaya he bhai abhi usko ren de")
   })
   

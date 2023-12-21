async function jeet (){

    let vwther = new Promise((resolve, reject)=>{
         setTimeout(() => {
            resolve("25 deg.")
         }, 2000);
    })

    let awther = new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve("30 deg.")
        }, 5000);
   })
   console.log("Fetching vadodara Weather Please wait ...")
   let vadodarawether = await vwther
   console.log("Fetched vadodara Weather: " + vwther)
   console.log("Fetching Ahmedabad Weather Please wait ...")
   let ahmedabadwether = await awther
   console.log("Fetched ahmedabad Weather: " + awther)

   return[vwther, awther]


}
console.log("welcome to jeet control room")
let a = jeet()
console.log(a)
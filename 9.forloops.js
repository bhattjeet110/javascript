//programs to add a naturals number

// let sum = 0;
// let n = prompt("enter the value of n");
// n = Number.parseInt(n)
// for ( let a = 0; a < n; a++ ){
// sum += ( a + 1 )
// }
// console.log("sum of first" + n + "naturals Number is" + sum);

let obj = {
    jeet:  20,
    dipen: 30,
    romit: 10,
    kartik: 0
}
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
    // console.log("Marks of " + a + " are " + obj[a])
}
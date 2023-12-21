console.log(console) // check all console method
console.log("Hii Jeet Bhatt") // give the msg
console.error("Dont touch Bhai varana gaya!!!!") // give erroer its visible RED Color
console.assert(5>50) // Check condition and answer give by if true = undifine otherwise false = red alert msg
let Obj = {
    a:3,
    b:4,
    c:5
}
console.table(Obj)

console.warn("Dont Drink Daru Otherwise your kidney will faile!") //give warning yellow color
console.info("Thise is IMP info for us!") // give information relacted doc

console.time('a') //chek your operation timing

console.timeEnd('a')
console.time('forloop')
for(let i=0; i<5; i++){
    console.log(230)
}
console.timeEnd('forloop')

console.time('whileloop')

let i = 0;
while(i<5){
    console.log(230)
    i++;
}

console.timeEnd('whileloop')
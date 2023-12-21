// console.log(document.cookie)
document.cookie = "name = jeet0012"
document.cookie = "name2 = jeet002312"

let key = prompt("enter your key")
let value = prompt("enter your value")

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`

console.log(document.cookie)
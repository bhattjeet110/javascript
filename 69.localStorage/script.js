
let key = prompt("Enter your KEY to set")
let value = prompt("Enter your VALUE to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || "blue"){
    localStorage.removeItem(key)
}

if (key == 0){
    localStorage.clear()
}
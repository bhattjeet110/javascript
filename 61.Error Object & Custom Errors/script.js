
try {

    let age = prompt ("Enter your age")
    age = Number.parseInt(age)
    if (age>150)
    {
        //throw new Error ("This is such me possibble nahi he bhai")
        throw new ReferenceError ("This is such me possibble nahi he bhai")
    }
}
catch (error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("Still script is running")
let a = {
    name2: "jeet",
    language: "JavaScript",
   
  }
  console.log(a)
  
  
  let p = {
    run: () => {
      alert("run")
    }
  }
  
  
  a.__proto__ = p
  a.run()
  console.log(a.name)
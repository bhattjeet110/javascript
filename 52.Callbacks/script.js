// // Callbacks
// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function() {
//       console.log("Loaded script with SRC: " + src)
//       callback(null, src);
//     }
//     script.onerror = function() {
//       console.log("Error loading script with SRC: " + src);
//       callback(new Error("Src got some error"))
//     }
//     document.body.appendChild(script);
//   }
  
//   function hello(error, src) {
//     if (error) {
//       console.log(error)
//       return
//     }
//     alert('Hello World!' + src);
//   }
  
  
//   function goodmorning(error, src) {
    
//     if (error) {
//       console.log(error)
//       sendEmergencyMessageToCeo();
//       return
//     }
//     alert('Good morning' + src);
//   }
  
//   loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 

//****  noramal call back function
// function show()
// {
//     console.log("I am Show function")
// }

// function jeet (callback) {
//     callback();
// }

// jeet(show)

//***** call backfunction i argument */

// function show(a) {
//     console.log("I am show " + a )
    
// }

// function jeet(callback) {
//     let a = 101;
//     callback(a);
// }

// jeet(show)

// aerrow function used with callback //

// function jeet(callback) {
//     let a = 101;
//     callback(a);
// }

// jeet(a => console.log("I ame show your number: " + a))


// syncronous method
// let a = prompt (" ener your name")
// let b = prompt (" enter your last name")
// let c = prompt ("enter your number")

// console.log(a + b + "and " + a + " number is " + c) 

// Asyncronous method
document.write("your window is open in 3 second")
setTimeout ( function window() {
    let a = prompt ("enter your name")
    document.write("your name is " + a)
}, 
3000)
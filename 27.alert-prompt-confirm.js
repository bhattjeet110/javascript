alert("Bhai first number enter karo")
let a = prompt("tamare kayo number Joeye che?", "578")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
let write = confirm("tamare aa page ne follow karvu che?")
if (write) {
  document.write(a)
}
else {
  document.write("First follw karo ne pachi pachi aavjo haa!!")
}


let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}
  a.onmouseout = () => {
    let c = document.getElementsByClassName("container")[0]
    console.log("Mouse Bhara gaya he")
  }

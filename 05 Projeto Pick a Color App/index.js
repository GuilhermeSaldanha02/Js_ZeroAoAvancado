
const colors = ["red", "green", "blue", "purple", "orange"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")


btn.addEventListener("click", function(){
  const randomColor = getRandomColor()
  document.body.style.background = colors[randomColor]
  // console.log(randomColor)
  color.textContent = colors[randomColor]
  
})

function getRandomColor(){
  return Math.floor(Math.random() * colors.length)
}



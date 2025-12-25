let images = document.querySelectorAll("#slider_container>img")
let index = 0;
function showImages() {
  images.forEach((img, i) => {
    // console.log(images)
    // console.log(i);
    img.classList.toggle("hide", i !== index)
  })
}

let rightArrow = document.getElementById("right_arrow")
rightArrow.addEventListener("click", () => {
  index++
  if (index >= images.length) {
    index = 0
  }
  showImages()
})

let leftArrow = document.getElementById("left_arrow")
leftArrow.addEventListener("click", () => {
  index--
  if (index < 0) {
    index = images.length - 1
  }
  showImages()
})
showImages()


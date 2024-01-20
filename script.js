const boxess = document.querySelector(".boxes");
const colors = [
  "aqua",
  "red",
  "blueviolet",
  "chartreuse",
  "coral",
  "gold",
  "maroon",
  "hotpink",
];

const colorList = [...colors, ...colors];
const boxLength = colorList.length;
//console.log(boxlength);
//console.log(color)

let waitingTime = false;
let revealCount = 0;
let activeBox = 0;

function buildBoxes(color) {
  const element = document.createElement("div");
  element.classList.add("box");
  element.setAttribute("data-color", color);
  element.setAttribute("data-revealed","false")
  element.addEventListener("click", () => {
    if (waitingTime) {
      return;
    }
    element.style.backgroundColor = color;

    if (!activeBox) {
      activeBox = element;
      return;
    }

    const colorMatch = activeBox.getAttribute("data-Color");
    if (colorMatch === color) {
      activeBox.setAttribute("data-revealed","true")
      element.setAttribute("data-revealed","true")
      activeBox = null;
      waitingTime = false;
       //revealCount += 2;
     // if (revealCount === boxLength) {
        //alert("Congratulation!😍 You won the game");
       //}
      return;
     }

    // console.log(activeBox);
    waitingTime = true;

    setTimeout(() => {
      element.style.backgroundColor = null;
      activeBox.style.backgroundColor = null;
      waitingTime = false;
      activeBox = null;
    }, 1000);
  });
  return element;
}

for (let i = 0; i < boxLength; i++) {
  const randomIndex = Math.floor(Math.random() * colorList.length);
  const color = colorList[randomIndex];

  colorList.splice(randomIndex, 1);
  const box = buildBoxes(color);

  boxess.append(box);
}

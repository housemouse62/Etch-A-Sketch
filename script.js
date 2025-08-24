let squaresPerSide;

const userPrompt = () => {
while (true) {
    squaresPerSide = prompt("How many squares per side do you want for your Etch-A-Sketch?\nNo higher than 100 please, we don't wanna crash the system!", 0);
if (squaresPerSide > 100) {
    alert("Number too high");
    continue;
} else {
    return;
}
}};
userPrompt();

const container = document.querySelector("#container");

const oneSquareSide = (960 / squaresPerSide) + "px";

const createDivs = (parent) => {
    const newSquare = document.createElement("div");
    newSquare.style.width = oneSquareSide;
    newSquare.style.height = oneSquareSide;
    newSquare.style.backgroundColor = "lightblue";
    newSquare.classList.add("square");
    parent.append(newSquare);

    newSquare.addEventListener("mouseover", () => {
    newSquare.style.backgroundColor = "white";
    });

//    newSquare.addEventListener("mouseout", () => {
//    newSquare.style.backgroundColor = "lightblue";
//   });
}

for (let i = 1; i <= (squaresPerSide * squaresPerSide); i++) {
    createDivs(container);
 }

const newSquare = document.querySelector(".square");




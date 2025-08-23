
function numberOfSquares() {
const numberOfSquaresPerSidePrompt = prompt("How many squares per side do you want for your Etch-A-Sketch?", 0);
if (numberOfSquaresPerSidePrompt > 100) {
    alert("Don't get greedy, choose a number of less than 100 please");
    numberOfSquares();
} else {
    const numberOfSquaresPerSide = numberOfSquaresPerSidePrompt;
    return;
}
}

numberOfSquares();
const container = document.querySelector("#container");

const squareHeightAndWidth = (960 / numberOfSquaresPerSide) + "px";

const createDivs = (parent) => {
    const newSquare = document.createElement("div");
    newSquare.style.width = squareHeightAndWidth;
    newSquare.style.height = squareHeightAndWidth;
    newSquare.style.backgroundColor = "lightblue";
    newSquare.classList.add("square");
    parent.append(newSquare);

    newSquare.addEventListener("mouseover", () => {
    newSquare.style.backgroundColor = "white";
    });

    newSquare.addEventListener("mouseout", () => {
    newSquare.style.backgroundColor = "lightblue";
    });

    console.log(newSquare);
}

for (let i = 1; i <= (numberOfSquaresPerSide * numberOfSquaresPerSide); i++) {
    createDivs(container);
}

const newSquare = document.querySelector(".square");



console.log(newSquare)

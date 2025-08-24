const container = document.querySelector("#container");

const initGame = () => {
    const startGame = confirm("Would you like to use this Etch-A-Sketch?");
    if (startGame) {
        const squaresPerSide = numberOfSquaresPerSide();
        createBoard(numberOfSquaresPerSide);
    } else {
        alert("Ok, come on back soon then!");
    }
};

const numberOfSquaresPerSide = () => {
while (true) {
    const input = parseInt(getNumberOfSquares(), 10);

    if (input > 100) {
        invalidChoice();
        continue;
    } else {
        return input;
    }
}
};

const createBoard = (squaresPerSide) => {
const squareHeightAndWidth = (960 / numberOfSquaresPerSide) + "px";

for (let i = 1; i <= (numberOfSquaresPerSide * numberOfSquaresPerSide); i++) {
    createDivs(container);
}};

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
};

const newSquare = document.querySelector(".square");



const invalidChoice = () => {
    alert("Your number is too high!")
};

getNumberOfSquares = () => {
    return prompt("How many squares per side do you want for your Etch-A-Sketch?", 0);
}

initGame();

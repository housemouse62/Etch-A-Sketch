let squaresPerSide;

const container = document.querySelector("#container");

const initGame = () => {
    const startGame = confirm("Are you sure you would like to use this Etch-A-Sketch?");
    startGame ? userPrompt() : alert('Well alrighty then, come back soon');
};


const userPrompt = () => {
while (true) {
    squaresPerSide = parseInt(prompt("How many squares per side do you want for your Etch-A-Sketch?\nNo higher than 100 please, we don't wanna crash the system!", 0), 10);
if (squaresPerSide > 100) {
    alert("Number too high");
    continue;
} else {
    createBoard(squaresPerSide);
    break;
}
}};

const createBoard = (squaresPerSide) => {
    container.innerHTML = "";
    const oneSquareSide = (960 / squaresPerSide) + "px";

    for (let i = 1; i <= (squaresPerSide * squaresPerSide); i++) {
    createDivs(container, oneSquareSide);
}
};

const createDivs = (parent, size) => {
    const newSquare = document.createElement("div");
    newSquare.style.width = size;
    newSquare.style.height = size;
    newSquare.style.backgroundColor = "lightblue";
    newSquare.classList.add("square");
    parent.append(newSquare);

    newSquare.addEventListener("mouseover", () => {
    newSquare.style.backgroundColor = "white";
    });
 };

const newSquare = document.querySelector(".square");


const newBoard = document.createElement('button');
newBoard.innerText = 'New Board';
container.parentNode.insertBefore(newBoard, container);

newBoard.addEventListener('click', () => {
userPrompt();
});

initGame();
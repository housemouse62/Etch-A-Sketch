const container = document.querySelector("#container");

const squareHeightAndWidth = (960 / 4) + "px";
console.log(squareHeightAndWidth);

const createDivs = (parent) => {
    const newSquare = document.createElement("div");
    newSquare.style.width = squareHeightAndWidth;
    newSquare.style.height = squareHeightAndWidth;
    newSquare.style.backgroundColor = "#000";
    newSquare.classList.add("square");
    parent.append(newSquare);
    console.log(newSquare);
}

//createDivs(container)
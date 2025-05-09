//red
var redButton = document.querySelector(".Red");
let count = 0;
redButton.addEventListener("click", function () {
    if (count === 0) {
        document.body.style.backgroundColor = "red";
        count = 1;
    } else {
        document.body.style.backgroundColor = "transparent";
        count = 0;
    }
});
//yellow
var yellowButton = document.querySelector(".Yellow");
//let count =0;
yellowButton.addEventListener("click", function () {
    if (count === 0) {
        document.body.style.backgroundColor = "yellow";
        count = 1;
    } else {
        document.body.style.backgroundColor = "transparent";
        count = 0;
    }
});
//black
var blackButton = document.querySelector(".Black");
blackButton.addEventListener("click", function () {
    if (count === 0) {
        document.body.style.backgroundColor = "black";
        count = 1;
    } else {
        document.body.style.backgroundColor = "transparent";
        count = 0;
    }
});
//purple
var purpleButton = document.querySelector(".Purple");
purpleButton.addEventListener("click", function () {
    if (count === 0) {
        document.body.style.backgroundColor = "purple";
        count = 1;
    } else {
        document.body.style.backgroundColor = "transparent";
        count = 0;
    }
});
//green
var greenButton = document.querySelector(".Green");
greenButton.addEventListener("click", function () {
    if (count === 0) {
        document.body.style.backgroundColor = "green";
        count = 1;
    } else {
        document.body.style.backgroundColor = "transparent";
        count = 0;
    }
});

//blue
var blueButton = document.querySelector(".Blue");
blueButton.addEventListener("click", function () {
    if (count === 0) {
        document.body.style.backgroundColor = "blue";
        count = 1;
    } else {
        document.body.style.backgroundColor = "transparent";
        count = 0;
    }
});
//default
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
var defaultButton = document.querySelector(".Default");
defaultButton.addEventListener("click", function () {
    if (count === 0) {
        document.body.style.backgroundColor = randomColor();
        count = 1;
    } else {
        document.body.style.backgroundColor = "transparent";
        count = 0;
    }
});




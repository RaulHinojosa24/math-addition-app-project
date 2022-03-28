const maxNumber = 100;
let solution;

$(document).ready(function () {
    setAddition();

    $("#btn").click(() => {
        let userSolution = $("#guess").val();

        if (userSolution == solution) {
            alert("Correct!");
        } else {
            alert("Incorrect! The answer is: " + solution);
        }

        setAddition();
    });
});

function setAddition() {
    const firstNumer = generateNumber(maxNumber);
    const secondNumer = generateNumber(maxNumber);
    solution = firstNumer + secondNumer;

    loadNumbers(firstNumer, secondNumer);

    return solution;
}

function loadNumbers(firstNumer, secondNumer) {
    $("#primary-number").text(firstNumer);
    $("#secondary-number").text(secondNumer);
    $("#guess").val("");
    $("#guess").focus();
}

function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

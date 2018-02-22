// 
// var arrayOfButtons = [$("crystal"), $("malachite"), $("redcrystal"), $("shawdowshard")];
// var compChoice = [];
// var Losses = 0;
// var Wins = 0;
// var targetNumber = 53;


var arrayOfButtons = [$("#crystal"), $("#malachite"), $("#redcrystal"), $("#shawdowshard")];
var compChoice = [];
var losses = parseFloat($("#losses").html());
var wins = parseFloat($("#wins").html());
var score = parseFloat($("#yourScore").html());
var total = [];
var targetNumber = 53;
console.log(arrayOfButtons);

compChoose();
assignValues();


function assignValues() {
    arrayOfButtons.forEach(function (button) {
        var value = Math.floor(Math.random() * 12) + 1;
        console.log(value)
        button.attr("data-number", value);
        return value
    })
}

function compChoose() {
    var choice = Math.floor(Math.random() * 102) + 19;
    $("#compNumber").html(choice);
    compChoice.push(choice);
}

function reset() {
    compChoice = [];
    total = [];
    compChoose();
    assignValues();
    $("#yourScore").html('0');
}

function checkForWin() {
    var sum = 0;
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
        $("#yourScore").html(sum);
        console.log(score)

        if (sum === compChoice[0]) {
            wins++;
            $("#wins").html(wins)
            sum = 0;
            reset();
        }

        if (sum > compChoice[0]) {
            losses++;
            $("#losses").html(losses);
            sum = 0;
            reset();
        }
    }

}

$("#crystal").click(function () {
    total.push(parseInt($(this).attr("data-number")));
    console.log(total)
    checkForWin();
})
$("#malachite").click(function () {
    total.push(parseInt($(this).attr("data-number")));
    checkForWin();

})
$("#redcrystal").click(function () {
    total.push(parseInt($(this).attr("data-number")));
    checkForWin();

})
$("#shawdowshard").click(function () {
    total.push(parseInt($(this).attr("data-number")));
    checkForWin();
})

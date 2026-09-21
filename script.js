// import * as commands from './commands.js';

console.log("Js is here!");
var renameString = "User-User@PC>>"
var historyString = new String();
var userString = new String();
var currentString = new String();
var outputElem = document.getElementById("demo");
var historyOutputElem = document.getElementById("history");
var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;

function help() {
    this.description = "Shows all avalible functions, their arguments and descriptions.";
};

function drawBorder() {

};

document.addEventListener('resize', function () {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    console.log(viewportHeight + ", " + viewportWidth)
});

document.addEventListener('keydown', function (event) {

    event.preventDefault();
    historyOutputElem.innerHTML = "event = " + event + "<br>event.key = " + event.key + "<br> event.shift = " + event.shiftKey + "<br> event.alt = " + event.altKey + "<br> event.code = " + event.code + "<br> window.innerWidth = " + viewportWidth + "<br> window.innerHeight = " + viewportHeight;
    switch (event.key) {
        case "Backspace":
            userString = userString.slice(0, -1);
            break;

        case "Shift":
            break;

        case "Alt":
            break;

        case "Control":
            break;

        case "Tab":
            userString += "   ";
            break;
        case "Enter":
            userString += "<br>";
            historyString += renameString + userString;
            userString = "";
            outputElem.scrollTo();
            break;
        default:
            userString += event.key;
    }
    historyOutputElem.innerHTML += "<br>" + historyString;
    outputElem.innerHTML = renameString + userString;

});

// (function() {


//     var outputElem = document.getElementById("demo");  //where to output the letter on the screen
//         current = 0;  //start index in the array
//         console.log("we got here");
//         startupString = "WELCOME... \n ENTER CREDENTIALS>>>";
//         timer = window.setInterval(  //this is how we will loop with an interval
//             function () {
//                 var letter = startupString[current];  //get next letter
//                 if (letter) {  //if there is no letter, it will be undefined and we will be done
//                     outputElem.innerHTML += letter;  //show the letter to the user
//                     current++;  //update the index
//                     console.log("in the loop");
//                 } else {
//                     window.clearInterval(timer);  //cancel the timer since we ran out of things to display
//                 }
//             }
//         ,25);  //number of seconds to wait between iterations

// }());


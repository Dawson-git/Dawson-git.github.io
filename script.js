// import * as commands from './commands.js';

console.log("Js is here!");
var historyString = new String();
var userString = new String();
var currentString = new String();

function help(){
    this.description = "Shows all avalible functions, their arguments and descriptions.";
};


document.addEventListener('keydown', function(event) {
    var outputElem = document.getElementById("demo");
    var historyOutputElem = document.getElementById("history");
    event.preventDefault();
    historyOutputElem.innerHTML = "event = " + event + "<br>event.key = " + event.key + "<br> event.shift = " + event.shiftKey + "<br> event.alt = " + event.altKey + "<br> event.code = " + event.code;
    switch(event.key) {
        case "Backspace":
            userString = userString.slice(0,-1);
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
            historyString += userString;
            userString = "";
            outputElem.scrollTo();
            break;
        default:
            userString += event.key;
    }
    historyOutputElem.innerHTML += "<br>" + historyString;    
    outputElem.innerHTML = userString;

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


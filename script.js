console.log("Js is here!");
(function() {


    var outputElem = document.getElementById("demo");  //where to output the letter on the screen
        current = 0;  //start index in the array
        console.log("we got here");
        startupString = "WELCOME... \n ENTER CREDENTIALS>>>";
        timer = window.setInterval(  //this is how we will loop with an interval
            function () {
                var letter = startupString[current];  //get next letter
                if (letter) {  //if there is no letter, it will be undefined and we will be done
                    outputElem.innerHTML += letter;  //show the letter to the user
                    current++;  //update the index
                    console.log("in the loop");
                } else {
                    window.clearInterval(timer);  //cancel the timer since we ran out of things to display
                }
            }
        ,25);  //number of seconds to wait between iterations

}());

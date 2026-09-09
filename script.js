console.log("Js is here!");
(function() {

    var outputElem = document.getElementById("demo"),  //where to output the letter on the screen
        current = 0,  //start index in the array
        randomChars = ["W","E","L","C","O","M","E","!"],  //characters to show
        timer = window.setInterval(  //this is how we will loop with an interval
            function () {
                var letter = randomChars[current];  //get next letter
                if (letter) {  //if there is no letter, it will be undefined and we will be done
                    outputElem.innerHTML = letter;  //show the letter to the user
                    current++;  //update the index
                } else {
                    window.clearInterval(timer);  //cancel the timer since we ran out of things to display
                }
            }
        ,1000);  //number of seconds to wait between iterations

}());
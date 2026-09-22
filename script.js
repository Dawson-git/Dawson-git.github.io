console.log("JS is here!");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var randomText = "Now is the winter of our discontent Made glorious summer by this sun of York; And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths; Our bruised arms hung up for monuments; Our stern alarums changed to merry meetings, Our dreadful marches to delightful measures. Grim-visaged war hath smooth'd his wrinkled front; And now, instead of mounting barded steeds To fright the souls of fearful adversaries, He capers nimbly in a lady's chamber To the lascivious pleasing of a lute. But I, that am not shaped for sportive tricks, Nor made to court an amorous looking-glass; I, that am rudely stamp'd, and want love's majesty To strut before a wanton ambling nymph; I, that am curtail'd of this fair proportion"
var defaultTextColor = "#F9824A";
var terminalColor = "#632A00";
var charWidth = 0;
var charHeight = 0;
var textWidth = 0;
var textHeight = 0;
// canvas.width = canvas.clientWidth;
// canvas.heigt = canvas.clientHeight;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.textBaseline = 'middle';

context.fillAlign = 'start';

context.font = "20px Roboto Mono"

context.fillStyle = terminalColor;
context.fillRect(0, 0, window.innerWidth, window.innerHeight);
context.strokeStyle = defaultTextColor;
context.fillStyle = defaultTextColor;
context.strokeText(randomText, 0, 20);


window.addEventListener('resize', resizeHandler);
window.addEventListener('load', startupSequence);

function resizeHandler(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log("Resized!");
};

// function drawInital
// setInterval(resizeHandler, 5000);

function startupSequence(){
    textWidth = context.measureText(randomText).width;
    charWidth = Math.floor(canvas.width/ textWidth);
    textHeight = (context.font).slice(0,2);
    charHeight = Math.floor(canvas.height / textHeight);
    context.strokeText(charHeight + " " + charWidth, 100,100);
    console.log({textWidth, charWidth, textHeight, charHeight});
}

console.log(canvas.width + ", " + canvas.height);
console.log()

console.log("JS is here!");

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "#FF0000"
context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
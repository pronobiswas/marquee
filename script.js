let canva = document.getElementById('myCanva');
canva.style.width= "100%";
let ctx = canva.getContext('2d');
ctx.fillStyle = "rgb(200 0 0)";
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "rgb(0 0 200 / 50%)";
ctx.fillRect(30, 30, 50, 50);
// Set font and color
ctx.font = "20px Arial";
ctx.fillStyle = "black";

// Draw text on canvas
ctx.fillText("Lorem ipsum dolor sit amet con mollitia.", 10, 30);

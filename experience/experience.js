console.log('r/place');
var canvas = document.querySelector('canvas')
    ;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// let particleArray = [];

// // mouse
// let mouse = {
//     x: null,
//     y: null,
//     radius: 100,
// }

// window.addEventListener('mousemove',
//     function (event) {
//         mouse.x = event.x + canvas.clientLeft / 2;
//         mouse.y = event.y + canvas.clientTop / 2;
//     })

// function drawImage() {
//     let imageWidth = png.width;
//     let imageHeight = png.height;
//     const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     class Particle {
//         constructor(x, y, color, size) {
//             this.x = x + canvas.width / 2 - png.width * 2,
//                 this.y = y + canvas.height / 2 - png.height * 2,
//                 this.color = color,
//                 this.size = 2,
//                 this.baseX = x + canvas.width / 2 - png.width * 2,
//                 this.baseY = y + canvas.height / 2 - png.height * 2,
//                 this.density = (Math.random() * 10) + 2;
//         }
//         drawImage() {
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//             ctx.closePath()
//             ctx.fill();
//         }
//         update() {
//             ctx.fillStyle = this.color;
//             // collision detection
//             let dx = mouse.x - this.x;
//             let dy = mouse.y - this.y;
//             let distance = Math.sqrt(dx * dx + dy * dy)
//             let forceDirectionX = dx / distance;
//             let forceDirectionY = dy / distance;

//             //max distance, past that the force will be zero
//             const maxDistance = 100;
//             let force = (maxDistance - distance) / maxDistance;
//             if (force < 0) force = 0;

//             let directionX = (forceDirectionX * force * this.density * 0.6)
//             let directionY = (forceDirectionY * force * this.density * 0.6)

//             if (distance < mouse.radius + this.size) {
//                 let dx = this.x - this.baseX;
//                 this.x -= dx / 20;
//             } if (distance < mouse.radius + this.size) {
//                 let dy = this.y - this.baseY;
//                 this.y -= dy / 20;
//             }
//         }
//         this.draw()
// }

// }
// function init() {
//     particleArray = []

//     for (let y = 0, y2 = data.height; y < y2; y++) {
//         for (let x = 0, x2 = data.width; x < x2; x++) {
//             if (data.data[(y * 4 data.width)])
//         }
//     }
// }
// }


















c.fillStyle = "#fa34a3";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "green"
c.fillRect(400, 100, 100, 100);

console.log(canvas);

// line

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.stroke();
c.strokeStyle = "#fa34a3";

Arc / Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

for (var i = 0; i < 25; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
}





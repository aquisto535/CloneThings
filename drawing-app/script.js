const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const toolbox = document.getElementById('toolbox');

const ctx = canvas.getContext('2d');

let size = 20;
let x = undefined;
let y = undefined;
let isPressed = false;
let color = 'black';

canvas.addEventListener('mousedown', (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
	isPressed = false;
	x = undefined;
	y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x = e.offsetX;
		const y = e.offsetY;

		drawCircle(x, y);
	}
});

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = color;
}

function line(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.fillStyle = color;
}

increaseBtn.addEventListener('click', () => {
	size += 5;

	if (size > 50) {
		size = 50;
	}
	updateSize();
});
decreaseBtn.addEventListener('click', () => {
	size -= 5;
	if (size < 5) {
		size = 5;
	}
	updateSize();
});

colorEl.addEventListener('change', (e) => {
	color = e.target.value;
	toolbox.style.backgroundColor = color;
});

function updateSize() {
	sizeEl.innerText = size;
}

// function draw() {
// 	ctx.clearRect(0, 0, canvas.Width, canvas.height);

// 	drawCircle(x, y);

// 	requestAnimationFrame(draw);
// }

// draw();

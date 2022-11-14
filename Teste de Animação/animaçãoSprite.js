const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext("2d");

const W = canvas.width = 3000 , H = canvas.height = 800;

let bgX = -1000
let bgY = -1000

let wKey = false;
let dKey = false;
let aKey = false;
let sKey = false;

//Imagens
let bg = new Image();
bg.src = '../Tilesets/map.png';

let imageIdle = new Image();
imageIdle.src = '../Packs/Sprite_Menina/Sprite_Menina_Stop.png'

let imageUp = new Image();
imageUp.src = '../Packs/Sprite_Menina/Sprite_Menina_Back.png'

let imageWalkRight = new Image();
imageWalkRight.src = '../Packs/Sprite_Menina/Sprite_Menina_Right.png'

let imageWalkLeft = new Image();
imageWalkLeft.src = '../Packs/Sprite_Menina/Sprite_Menina_Left.png'

let imageWalkDown = new Image();
imageWalkDown.src = '../Packs/Sprite_Menina/Sprite_Menina_Front.png';

let image;

window.onload = function () {
	//setInterval(render, 2050 / 15); 

	image = imageIdle;
	render()
};


//Sprite frame counter 		
let frameIndex = 0;
let animationFrameCount = 0;

function render() {
	ctx.clearRect(0, 0, W, H);
	ctx.drawImage(bg, bgX, bgY, 5865, 3894);
	if (wKey) {
		bgY -= 7;
	}
	if (dKey) {
		bgX -= 7;
	}
	if (aKey) {
		bgX += 7;
	}
	if (sKey) {
		bgY += 7;	
	}




	ctx.drawImage(image, frameIndex * 32, 0, 32, 32,
		110, 80, 100, 100);


	animationFrameCount++;
	if (animationFrameCount % 1 == 0) {
		frameIndex++;
		if (frameIndex == 4)
			frameIndex = 0; //reset the number of frames counter
	}
	requestAnimationFrame(render)
}


//Teclado
window.addEventListener("keydown", keyPressed);

function keyPressed(click) {
	console.log(click.key)
	if (click.key == "w" || click.key == "W") {
		image = imageUp
		wKey = true
	} else if (click.key == "d" || click.key == "D") {
		image = imageWalkRight
		dKey = true
	} else if (click.key == "a" || click.key == "A") {
		image = imageWalkLeft
		aKey = true
	} else if (click.key == "s" || click.key == "S")
		image = imageWalkDown
		sKey = true
}

window.addEventListener('keyup', keyReleased);

function keyReleased(click) {
	if (click.key == "w" || click.key == "W") {
		image = imageIdle
		wKey = false
	} else if (click.key == "d" || click.key == "D") {
		image = imageIdle
		dKey = false
	} else if (click.key == "a" || click.key == "A") {
		image = imageIdle
		aKey = false
	} else if (click.key == "s" || click.key == "S")
		image = imageWalkDown
		sKey = false
}
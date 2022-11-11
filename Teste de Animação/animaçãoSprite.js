const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext("2d");

const W = canvas.width = 500 , H = canvas.height = 500;


/* //Imagens
let imageIdle = new Image();
imageIdle.src = '../Packs/Monsters/Pink_Monster/Pink_Monster_Idle_4.png'

let imageUp = new Image();
imageUp.src = '../Packs/Monsters/Pink_Monster/Pink_Monster_Climb_4.png'

let imageWalkRight = new Image();
imageWalkRight.src = '../Packs/Monsters/Pink_Monster/Pink_Monster_Walk_6.png'

let imageWalkLeft = new Image();
imageWalkLeft.src = '../Packs/Monsters/Pink_Monster/Pink_Monster_Walk_6(versão2).png'

let image;

window.onload = function () {
	setInterval(render, 2050 / 15); 
	image = imageIdle;
};


//Sprite frame counter 		
let frameIndex = 0;

function render() {
ctx.clearRect(0, 0, W, H);

ctx.drawImage(image, frameIndex * 32, 0, 32, 32,
    110, 80, 100, 100);

frameIndex++;
if (frameIndex == 4)
	frameIndex = 0; //reset the number of frames counter


}


//Teclado
window.addEventListener("keydown", keyPressed);

function keyPressed(click){
	console.log(click.key)
	if (click.key == "w" || click.key == "W"){
		image = imageUp
	}else if (click.key == "d" || click.key == "D"){
		image = imageWalkRight
	}else if (click.key == "a" || click.key == "A"){
		image = imageWalkLeft
	}else if (click.key == "s" || click.key == "S")
		image = imageIdle //mudar
}

window.addEventListener('keyup',keyReleased);

function keyReleased(click){
	if(click.key == "w" || click.key =="W"){
		image = imageIdle
	}else if (click.key == "d" || click.key == "D"){
		image = imageIdle
	}else if (click.key == "a" || click.key == "A"){
		image = imageIdle
	}else if (click.key == "s" || click.key == "S")
		image = imageIdle
} */




//Images
let imageFront = new Image();
imageFront.src = 'Sprite_Menina_Front.png'

let imageBack = new Image();
imageBack.src = 'Sprite_Menina_Back.png'

let imageWalkRight = new Image();
imageWalkRight.src = 'Sprite_Menina_Right.png'

let imageWalkLeft = new Image();
imageWalkLeft.src = 'Sprite_Menina_Left.png'

let imageStop = new Image();
imageStop.src = 'Sprite_Menina_Stop.png'


let image;

window.onload = function () {
	setInterval(render, 2050 / 15); 
	image = imageStop
};


//Sprite frame counter 		
let frameIndex = 0;

function render() {
ctx.clearRect(0, 0, W, H);

//ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh) 
/* sx - Onde começa a imagem (x)
sy - Onde começa a imagem (y) 
sw - Tamanho da imagem (x)
sh - Tamanho da imagem (y)
dx - Localização da imagem (x)
dy - Localização da imagem (y)
dw - */
ctx.drawImage(image,frameIndex * 64, 0, 64, 64,
    0, 0, 100, 100);

frameIndex++;
if (frameIndex == 4)
	frameIndex = 0;

}

//Teclado
window.addEventListener("keydown", keyPressed);

function keyPressed(click){
	console.log(click.key)
	if (click.key == "w" || click.key == "W"){
		image = imageBack
	}else if (click.key == "d" || click.key == "D"){
		image = imageWalkRight
	}else if (click.key == "a" || click.key == "A"){
		image = imageWalkLeft
	}else if (click.key == "s" || click.key == "S")
		image = imageFront 
}

window.addEventListener('keyup',keyReleased);

function keyReleased(click){
	if(click.key == "w" || click.key =="W"){
		image = imageStop
	}else if (click.key == "d" || click.key == "D"){
		image = imageStop
	}else if (click.key == "a" || click.key == "A"){
		image = imageStop
	}else if (click.key == "s" || click.key == "S")
		image = imageStop
} 
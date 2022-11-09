const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext("2d");

const W = canvas.width, H = canvas.height;

let imageIDLE = new Image();
imageIDLE.src = '../Packs/Monsters/Pink_Monster/Pink_Monster_Idle_4.png'

let imageUP = new Image();
imageUP.src = '../Packs/Monsters/Pink_Monster/Pink_Monster_Climb_4.png'

let imageWalkRight = new Image();
imageWalkRight.src = '../Packs/Monsters/Pink_Monster/Pink_Monster_Walk_6.png'

let imageWalkLeft = new Image();
imageWalkLeft.src = '../Packs/Monsters/Pink_Monster/Pink_Monster_Walk_6(versão2).png'

let image;

window.onload = function () {
	setInterval(render, 2050 / 15); 
	image = imageIDLE;
};

//sprite frame counter 		
let frameIndex = 0;

function render() {
ctx.clearRect(0, 0, W, H);

ctx.drawImage(image, frameIndex * 32, 0, 32, 32,
    110, 80, 100, 100);


frameIndex++;
if (frameIndex == 4)
	frameIndex = 0; //reset the number of frames counter

}

//TECLADO
window.addEventListener("keydown", keypressed);

function keypressed(click){
	console.log(click.key)
	if (click.key == "w"){
		image = imageUP
	}else if (click.key == " "){
		image = imageIDLE
	}else if (click.key == "d"){
		image = imageWalkRight
	}else if (click.key == "a"){
		image = imageWalkLeft
	}
}

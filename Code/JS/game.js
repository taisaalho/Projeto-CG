const canvas = document.querySelector('#idCanvas');
const ctx = canvas.getContext("2d");

canvas.width = 1400;
canvas.height = 800;
let W = canvas.width;
let H = canvas.height;


/*variaveis movimento*/
let bgX = -3565
let bgY = -2500

let pX = 0
let pY  = 0

let wKey = false;
let dKey = false;
let aKey = false;
let sKey = false;



/* imagem background */

let bg = new Image();
bg.src = "/Tilesets/map.png"


//Imagens
let imageIdle = new Image();
imageIdle.src = '/Packs/Sprite_Menina/Sprite_Menina_Stop.png'

let imageUp = new Image();
imageUp.src = '/Packs/Sprite_Menina/Sprite_Menina_Back.png'

let imageWalkRight = new Image();
imageWalkRight.src = '/Packs/Sprite_Menina/Sprite_Menina_Right.png'

let imageWalkLeft = new Image();
imageWalkLeft.src = '/Packs/Sprite_Menina/Sprite_Menina_Left.png'

let imageWalkDown = new Image();
imageWalkDown.src = '/Packs/Sprite_Menina/Sprite_Menina_Front.png';

let image;



window.onload = function(){
    image= imageIdle
    render();
}



let frameIndex = 0;
let animationFrameCount = 0 


//functions 
function render(){
    ctx.clearRect(0,0,W,H)
    ctx.drawImage(bg, bgX,bgY,5865,3894)
    

    if(wKey){
        bgY += 2
    }

    if(dKey){
        bgX -= 2
    }

    if(aKey){
        bgX += 2
    }

    if(sKey){
        bgY -=2
    }
    
    ctx.drawImage(image, frameIndex * 64,0,64,64,W/2,H/2,100,100)    
    animationFrameCount++

    if(animationFrameCount % 4 ==0){
        frameIndex++

        if(frameIndex ==4){
            frameIndex = 0
        }
    }
    
    
    
    
    
    requestAnimationFrame(render)
}



/* functions teclado */

window.addEventListener("keydown",keyPressed)

function keyPressed(click){
    


    if (click.key == "w" || click.key == "W") {
		image = imageUp 
		wKey = true
	} else if (click.key == "d" || click.key == "D") {
		image = imageWalkRight 
		dKey = true
	} else if (click.key == "a" || click.key == "A") {
		image = imageWalkLeft
		aKey = true
	} else if (click.key == "s" || click.key == "S"){

        image = imageWalkDown
        sKey = true
    }
        

}

window.addEventListener("keyup", keyReleased)

function keyReleased(click){

    if (click.key == "w" || click.key == "W") {
		image = imageIdle
		wKey = false
	} else if (click.key == "d" || click.key == "D") {
		image = imageIdle
		dKey = false
	} else if (click.key == "a" || click.key == "A") {
		image = imageIdle
		aKey = false
	} else if (click.key == "s" || click.key == "S"){

        image = imageIdle
		sKey = false
    }

}

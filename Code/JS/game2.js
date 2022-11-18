const canvas = document.querySelector('#idCanvas');
const ctx = canvas.getContext("2d");

canvas.width = 1400;
canvas.height = 800;
let W = canvas.width;
let H = canvas.height;

/*variaveis movimento*/
let bgX = -3500
let bgY = -2000


let collisionsMap = []
for(let i = 0; i <collisions.length; i+=240){
    collisionsMap.push(collisions.slice(i,240 + i))
}
class Boundary{
    static width = 24
    static height = 48
    constructor({position}){
        this.position = position;
        this.width = 24   /* tamanhos do tiled x3 (300 zoom) */
        this.height = 48
    }
    draw(){
        ctx.fillStyle = "red"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        console.log("pau")
    }
}
let boundaries =[]
let offset = {
    x:-3500,
    y: -2000
}
collisionsMap.forEach((row , i)=>{
    row.forEach((symbol,j) =>{
        if(symbol !=0){

            boundaries.push(
                new Boundary({
                    position:{
                        X: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
        }
        
    })
})

console.log(boundaries)
/* posicao character no meio do ecra */
let characterX = W/2
let characterY  = H/2

/* booleans de movimento */
let wKey = false;
let dKey = false;
let aKey = false;
let sKey = false;

/* character animation variables */
let frameIndex = 0;
let animationFrameCount = 0 






/* Imagem background */
let bg = new Image();
bg.src = "/Tilesets/mapNew.png"








/* Imagem Rapaz */
let imageIdleBoy = new Image()
imageIdleBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_Stop.png'

let imageUpBoy = new Image()
imageUpBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_Up.png'

let imageWalkRightBoy = new Image();
imageWalkRightBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_Right.png'

let imageWalkLeftBoy = new Image();
imageWalkLeftBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_Left.png'

let imageWalkDownBoy = new Image();
imageWalkDownBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_Down.png'

let image= imageIdleBoy











window.onload = function(){
    render()
}



function render(){
    ctx.clearRect(0,0,W,H)
    ctx.drawImage(bg, bgX,bgY,5865,3894)

    boundaries.forEach(boundary =>{
        boundary.draw()
    })
     
    /* map movement */

    if(wKey){
        bgY +=2
    }

    if(sKey){
        bgY -=2
    }
    if(aKey){
        bgX +=2
    }
    if(dKey){
        bgX -=2
    }
    

    ctx.drawImage(image, frameIndex * 64,0,64,64,W/2,H/2,100,100)    
    animationFrameCount++
     

    /* character animation */
    if(animationFrameCount % 4 ==0){
        frameIndex++

        if(frameIndex ==4){
            frameIndex = 0
        }
    }

    


    requestAnimationFrame(render)
}











/* EVENT LISTENERS TECLADO */
window.addEventListener("keydown",keyPressed)
window.addEventListener("keyup", keyReleased)





function keyReleased(click){
    if (click.key == "w" || click.key == "W") {
		
        image = imageIdleBoy
		wKey = false
	} else if (click.key == "d" || click.key == "D") {
		
        image = imageIdleBoy
		dKey = false
	} else if (click.key == "a" || click.key == "A") {
		
        image = imageIdleBoy
		aKey = false
	} else if (click.key == "s" || click.key == "S"){
         
        image = imageIdleBoy
		sKey = false
    }

}

function keyPressed(click){
    if (click.key == "w" || click.key == "W") {
         
        image = imageUpBoy
        wKey = true
    } else if (click.key == "d" || click.key == "D") {
        
        image = imageWalkRightBoy
        dKey = true
    } else if (click.key == "a" || click.key == "A") {
        
        image = imageWalkLeftBoy
        aKey = true
    } else if (click.key == "s" || click.key == "S"){
       
        image = imageWalkDownBoy
        sKey = true
    }
        

}

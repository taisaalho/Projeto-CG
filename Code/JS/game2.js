const canvas = document.querySelector('#idCanvas');
const ctx = canvas.getContext("2d",{willReadFrequently: true});

canvas.width = 1400;
canvas.height = 800;
let W = canvas.width;
let H = canvas.height;

/*variaveis movimento*/
let bgX = -3500
let bgY = -2000




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

let pixel




/* Imagem background */
let bg = new Image();
bg.src = "/Tilesets/mapNew.png"

let bgWhite = new Image();
bgWhite.src ="/Tilesets/mapCollisions.png"







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







if(wKey){
    bgY +=5
}

if(aKey){
    bgX -=5
}


if(sKey){
    bgY -=5
}


if(dKey){
    bgX +=5
}


window.onload = render




function render(){
    ctx.clearRect(0,0,W,H)
    ctx.drawImage(bg, bgX,bgY,5865,3894)
    

     
    /* map movement */
    


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


function keyPressed(click){

    /* ctx.drawImage(bgWhite,bgX,bgY,5865,3894) */
    
    if (click.key == "w" || click.key == "W") {
        /* pixel  = ctx.getImageData(characterX,characterY-1, 64,1)
        if(verifyPixel(pixel)){
        } */
        image = imageUpBoy
        wKey = true
    } 
    
    else if (click.key == "d" || click.key == "D") {
        /* 
        pixel  = ctx.getImageData(characterX+1,characterY, 64,1)
        if(verifyPixel(pixel)){
        } */
        image = imageWalkRightBoy 
        dKey = true
        
        
        
     
    } 
    
    else if (click.key == "a" || click.key == "A") {
       /*  image = imageWalkLeftBoy
        bgX +=2 */



        /* pixel  = ctx.getImageData(characterX-1,characterY, 64,1)
        if(verifyPixel(pixel)){
        } */
        image = imageWalkLeftBoy 
        aKey = true
    } 
    
    else if (click.key == "s" || click.key == "S"){
        

        /* pixel  = ctx.getImageData(characterX,characterY+1, 64,1)
        if(verifyPixel(pixel)){
        } */
        image = imageWalkDownBoy 
        sKey = true




    }
}


function keyReleased(){
    if (click.key == "w" || click.key == "W") {
        /* pixel  = ctx.getImageData(characterX,characterY-1, 64,1)
        if(verifyPixel(pixel)){
        } */
        image = imageIdleBoy
        wKey = false
    } 
    
    else if (click.key == "d" || click.key == "D") {
        /* 
        pixel  = ctx.getImageData(characterX+1,characterY, 64,1)
        if(verifyPixel(pixel)){
        } */
        image = imageWalkRightBoy 
        dKey = true
        
        
        
     
    } 
    
    else if (click.key == "a" || click.key == "A") {
       /*  image = imageWalkLeftBoy
        bgX +=2 */



        /* pixel  = ctx.getImageData(characterX-1,characterY, 64,1)
        if(verifyPixel(pixel)){
        } */
        image = imageWalkLeftBoy 
        aKey = true
    } 
    
    else if (click.key == "s" || click.key == "S"){
        

        /* pixel  = ctx.getImageData(characterX,characterY+1, 64,1)
        if(verifyPixel(pixel)){
        } */
        image = imageWalkDownBoy 
        sKey = true




    }
}

function verifyPixel(pixel) {
    let pix = []
    for (let i = 0 ; i< pixel.data.length/4; i++){
        pix.push([pixel.data[i*4],pixel.data[i*4+1],pixel.data[i*4+2],pixel.data[i*4+3]])
    }
    return !pix.find(x=>x[0] == 0 && x[1] == 0 && x[2] == 0)

}

    const canvas = document.querySelector('#idCanvas');
    const ctx = canvas.getContext("2d",{willReadFrequently: true});


    canvas.width = 1400;
    canvas.height = 800;
    let W = canvas.width;
    let H = canvas.height;

    let storeItems = [
        {
            id:0,
            name: "Flyers",
            cost:1000,
            image:"/Packs/Sprite_Rapaz/Sprite_Boy_Stop.png"
        },

        {
            id:1,
            name: "Trash Bag",
            cost:2000,
            image:"/Packs/Sprite_Rapaz/Sprite_Boy_Stop.png"
        },

        {
            id:2,
            name: "Trash Catcher",
            cost:2000,
            image:"/Packs/Sprite_Rapaz/Sprite_Boy_Stop.png"
        },

    ]

    
    /*variaveis movimento*/
    let bgX = -1600
    let bgY = -1000

    let inStore



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

    let xCursorPosition
    let yCursorPosition


    /* Imagem background */
    let bg = new Image();
    bg.src = "/Tilesets/mapNew.png"

    let bgWhite = new Image();
    bgWhite.src ="/Tilesets/mapCollisions.png"


    let shopBackground = new Image();
    shopBackground.src ="/shopBackground.png"



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
    class Player{
        constructor(type,name){
            this.type = type;
            this.name = name;
            this.inventory = [];
            this.gold = 500;
            this.timePlayed = 0;
        }


        buyItem1(){
            if(this.gold >= storeItems[0].cost){

                if(this.inventory.length ==0){
                    
                    this.inventory.push(storeItems[0])
                    console.log("item 1 bought")
                }else{
                    
                    (this.inventory).forEach(invItem =>{
                        
                        if(invItem.id == 0){
                            
                            console.log("Item Already in Inventory")
                        }else{
                            this.inventory.push(storeItems[0])
                            
                        }
                    })
                }
            }else{
                console.log("not enough gold")
            }
            console.log(this.inventory)      
        }
    }

    player = new Player("1","Joao")






    window.onload = render




    function render(){
        ctx.clearRect(0,0,W,H)
        ctx.drawImage(bg, bgX,bgY,5865,3894)
        /* console.log("x:",bgX)
        console.log("y:",bgY) */
        


        /* map movement */



        ctx.drawImage(image, frameIndex * 64,0,64,64,characterX,characterY,100,100)    
        animationFrameCount++
        

        /* character animation */
        if(animationFrameCount % 4 ==0){
            frameIndex++

            if(frameIndex ==4){
                frameIndex = 0
            }
        }

        
        if(bgY > -930 && bgX >-1745 && bgX < -1590){
            store()
            
        }
        
        if(wKey){
            
            if(bgY > -450){
                characterY -=5
            }else{
                bgY +=5
                if(characterY > H/2){
                    characterY -=5
                }

            }
            
        }
        
        if(aKey){
            if(bgX >-500){
                characterX -=5
            }else if(bgY <-2200){
                
                characterX -= 5
            }else if(bgX>-3000 && bgY >-500){
                characterX -= 5
            }else{
                bgX +=5
                if(characterX > W/2){
                    characterX -=5
                }
                

            }
            
            
            
            
        }
        
        
        if(sKey){

            
            
            
            
            if(bgY <-2500){
                characterY += 5
                
            } else{
                bgY -=5
                if(characterY < H/2){
                    characterY +=5
                }
            }
            
        
        }
        
        
        if(dKey){
            if(bgY <-1100 && bgX < -4000){
                characterX += 5
            }else if(bgY <-2200){
                characterX += 5
            } else{
                bgX -=5
                if(characterX <W/2){
                    characterX +=5
                }

            }
            
            
            
        }
        
    
        
        
        

        requestAnimationFrame(render)
    }

    function getCursorPosition(event){
        /* let event = window.event */
        let xCursorPosition = event.clientX
        let yCursorPosition = event.clientY
        console.log(xCursorPosition)
        console.log(yCursorPosition)
        if(xCursorPosition >= 640 && xCursorPosition <= 705 && yCursorPosition >= 385 && yCursorPosition <=400){
            player.buyItem1()
        }
        if(xCursorPosition >=870 && xCursorPosition <=925 && yCursorPosition >=385 && yCursorPosition <=405){
            buyItem2()
        }
        
        if(xCursorPosition >=1090 && xCursorPosition <=1145 && yCursorPosition >=385 && yCursorPosition <=405){
            buyItem3()
        }


        if(xCursorPosition >= 465 && xCursorPosition <=550  && yCursorPosition >=10 && yCursorPosition <=30){
            goBack()
        }

        
    }

    let count = 0
    function store(){
        
        
        
        textX=350
        textY=300
        ctx.clearRect(0,0,W,H)
        ctx.drawImage(shopBackground, 0,0,1500,800)
        ctx.beginPath()
        ctx.rect(W/2-500,H/2-330,1000,660)
        ctx.strokeStyle = "rgba(0,0,0, 0.5)"
        ctx.stroke()
        ctx.fillStyle = "rgba(0,0,0, 0.5)"
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.font = "50px gameFont"
        ctx.fillStyle="White"
        ctx.fillText("Shop",W/2-100,150)
        ctx.closePath()
        
        storeItems.forEach(item =>{

            ctx.beginPath()
            ctx.fillStyle = "white"
            ctx.font="18px gameFont"
            let imageItem = new Image()
            imageItem.src = `${item.image}`
            ctx.fillText(item.name,textX,textY)
            
            ctx.closePath()
            ctx.drawImage(imageItem,textX+30,350,64,64) 
            
            ctx.beginPath()
            ctx.fillStyle = "white"
            ctx.font="18px gameFont"
            ctx.fillText("Buy",textX+50,textY+200)
            ctx.closePath()
            
            ctx.beginPath()
            ctx.font="18px gameFont"
            ctx.fillText("Back",220,125)
            ctx.closePath()
            textX += 220
            
            
            
            
            
            

        })
        inStore = false
        
    }






    /* EVENT LISTENERS TECLADO */
    window.addEventListener("keydown",keyPressed)
    window.addEventListener("keyup", keyReleased)




    

    function buyItem2(){
        
        console.log("item 2 bought")
        
    }

    function buyItem3(){
        console.log("item 3 bought")
    }

    function goBack(){
        bgX = -1600
        bgY = -1000
        /* render() */
    }

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


    function keyReleased(click){
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
            image = imageIdleBoy 
            dKey = false
            
            
            
        
        } 
        
        else if (click.key == "a" || click.key == "A") {
        /*  image = imageWalkLeftBoy
            bgX +=2 */



            /* pixel  = ctx.getImageData(characterX-1,characterY, 64,1)
            if(verifyPixel(pixel)){
            } */
            image = imageIdleBoy 
            aKey = false
        } 
        
        else if (click.key == "s" || click.key == "S"){
            

            /* pixel  = ctx.getImageData(characterX,characterY+1, 64,1)
            if(verifyPixel(pixel)){
            } */
            image = imageIdleBoy 
            sKey = false




        }
    }

    function verifyPixel(pixel) {
        let pix = []
        for (let i = 0 ; i< pixel.data.length/4; i++){
            pix.push([pixel.data[i*4],pixel.data[i*4+1],pixel.data[i*4+2],pixel.data[i*4+3]])
        }
        return !pix.find(x=>x[0] == 0 && x[1] == 0 && x[2] == 0)

    }

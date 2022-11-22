    const canvas = document.querySelector('#idCanvas');
    const ctx = canvas.getContext("2d",{willReadFrequently: true});


    canvas.width = 1400;
    canvas.height = 800;
    let W = canvas.width;
    let H = canvas.height;
    let itemCount

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
    let bgY = -1200

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
    bgWhite.src ="/Tilesets/mapCollisionsFinal.png"


    let shopBackground = new Image();
    shopBackground.src ="/shopBackground.png"



    /* Imagem Rapaz */
    let imageIdleBoy = new Image()
    imageIdleBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_StopNew.png'

    let imageUpBoy = new Image()
    imageUpBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_UpNew.png'

    let imageWalkRightBoy = new Image();
    imageWalkRightBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_RightNew.png'

    let imageWalkLeftBoy = new Image();
    imageWalkLeftBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_LeftNew.png'

    let imageWalkDownBoy = new Image();
    imageWalkDownBoy.src = '/Packs/Sprite_Rapaz/Sprite_Boy_DownNew.png'

    let image= imageIdleBoy
    class Player{
        constructor(type,name){
            this.type = type;
            this.name = name;
            this.inventory = [];
            this.gold = 50000;
            this.timePlayed = 0;
        }


        buyItem(n){
            
                
                if(this.inventory.length >0){
                    if(this.inventory.find(item => item.id == storeItems[n].id) == undefined && this.gold >= storeItems[n].cost){
                        this.inventory.push(storeItems[n])
                        this.gold -= storeItems[n].cost
                        console.log("item bought")
                    }else{
                        console.log("U already have this item")
                    }
                } else{
                    if(this.gold >= storeItems[n].cost){
                        this.gold -= storeItems[n].cost
                        this.inventory.push(storeItems[0])
                        console.log("item bought")
                    }
                }
            
        }


        
        
        
    }   

    player = new Player("1","Joao")






    window.onload = render




    function render(){
        ctx.clearRect(0,0,W,H)
        
        ctx.drawImage(bgWhite, bgX,bgY,5865,3894)
        ctx.drawImage(bg, bgX,bgY,5865,3894) 
        

        
        /* map movement */


        ctx.drawImage(image, frameIndex * 39,0,39,56,characterX,characterY,70,70)    
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
        
        

        requestAnimationFrame(render)
    }

    function getCursorPosition(event){
        /* let event = window.event */
        let xCursorPosition = event.clientX
        let yCursorPosition = event.clientY
        
        if(xCursorPosition >= 655    && xCursorPosition <= 710 && yCursorPosition >= 550 && yCursorPosition <=565){
            
            player.buyItem(0)
        }
        if(xCursorPosition >=880 && xCursorPosition <=930 && yCursorPosition >=550 && yCursorPosition <=565){
            player.buyItem(1)
        }
        
        if(xCursorPosition >=1100 && xCursorPosition <=1150 && yCursorPosition >=550 && yCursorPosition <=565){
            player.buyItem(2)
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
        
        ctx.beginPath()
        ctx.font = "20px gameFont"
        ctx.fillStyle = "white"
        ctx.fillText(`Gold: ${player.gold}`, 950,100)
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
                
                
            textX += 220
            
        })
        inStore = false
        
    }
     

   window.addEventListener("keydown",(event) => {
        
        
        switch (event.keyCode) {
            case 87:
                ctx.clearRect(0,0,W,H)
                ctx.drawImage(bgWhite, bgX, bgY, 5865, 3894)
                pixel = ctx.getImageData(characterX,characterY-7,39,39)
                
                if(!verifyPixel(pixel.data,0,0,0)){
                    image=imageUpBoy
                    if(bgY > -450){
                        characterY -=5
                    }else{
                        bgY +=5
                        if(characterY > H/2){
                            characterY -=5
                        }
        
                    }
                }
                break;
            case 68:
                ctx.clearRect(0,0,W,H)
                ctx.drawImage(bgWhite, bgX, bgY, 5865, 3894)
                pixel = ctx.getImageData(characterX+7,characterY,39,39)
                
                if(!verifyPixel(pixel.data,0,0,0)){
                    image=imageWalkRightBoy 
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
                
            
                break;
            case 65:
                ctx.clearRect(0,0,W,H)
                ctx.drawImage(bgWhite, bgX, bgY, 5865, 3894)
                pixel = ctx.getImageData(characterX-7,characterY,39,39)
                
                if(!verifyPixel(pixel.data,0,0,0)){
                    image=imageWalkLeftBoy 
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

                
                break;  
            case 83:
                ctx.clearRect(0,0,W,H)
                ctx.drawImage(bgWhite, bgX, bgY, 5865, 3894)
                pixel = ctx.getImageData(characterX,characterY+7,39,39)
                
                if(!verifyPixel(pixel.data,0,0,0)){
                    image=imageWalkDownBoy 
                    if(bgY <-2500){
                        characterY += 5
                        
                    } else{
                        bgY -=5
                        if(characterY < H/2){
                            characterY +=5
                        }
                    }
                    
                }
            
                break;      
            default:
                break;
        } 
    }) 


    window.addEventListener("keyup",(event)=> {
        switch (event.keyCode) {
            case 87:
                
                image=imageIdleBoy
                    
                
                break;
            case 68:
                image = imageIdleBoy
                break;
            case 65:
                image = imageIdleBoy

                        
        
                    

                
                break;  
            case 83:
                image = imageIdleBoy
                break;      
            default:
                break;
        } 
    }) 

    function verifyPixel(pixel,r,g,b) {
        let pix = []
        
        for(let i = 0; i < pixel.length/4; i++) {
            
            pix.push([pixel[i*4],pixel[i*4+1],pixel[i*4+2],pixel[i*4+3]])
        }

        let pixFilter = pix.filter(data => data[0] == r && data[1] == g && data[2] == b )

        
        if( r == 0 && g==0 && b == 0){
            
            if(pixFilter.length >= 39/2){
                return true
            }else{
                return false
            }
        }
    }

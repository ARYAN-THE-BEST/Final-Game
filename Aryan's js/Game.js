class Game{
constructor(){


}

start(){
form = new Form();
form.display();



player=createSprite(683,100,10,10);
player.addImage(playerImg);
player.scale=0.2;
bullet=createSprite(player.x,player.y)
bullet.visible=false
enemy1=createSprite(683,250,10,10);
enemy1.addImage(enemyImg);
enemy1.scale=0.3;
enemy1.velocityX=6
enemy2=createSprite(683,350,10,10);
enemy2.addImage(enemyImg);
enemy2.scale=0.3;
enemy2.velocityX=-6
enemy3=createSprite(335,450,10,10);
enemy3.addImage(enemyImg);
enemy3.scale=0.3;
enemy3.velocityX=6
nuclearCode=createSprite(683,580,10,10)
nuclearCode.addImage(nuclearCodeImg)
nuclearCode.scale=0.4;
nuclearCode.velocityX=-5;
border1=createSprite(50,405,5,830);
border1.shapeColor= "black"
border2=createSprite(1310,405,5,830);
border2.shapeColor= "black"
border3=createSprite(683,590,1366,5);
border3.shapeColor= "black"
door1=createSprite(255,100,700,5)
door1.shapeColor="black"
door2=createSprite(1100,100,700,5)
door2.shapeColor="black"
spike1=createSprite(735,200,10,10)
spike1.addImage(spikeimg)
spike1.scale=0.3
spike1.velocityX=6;
spike2=createSprite(735,300,10,10)
spike2.addImage(spikeimg)
spike2.scale=0.3
spike2.velocityX=-6;
spike3=createSprite(335,400,10,10)
spike3.addImage(spikeimg)
spike3.scale=0.3
spike3.velocityX=6
spike4=createSprite(1035,500,10,10)
spike4.addImage(spikeimg)
spike4.scale=0.3
spike4.velocityX=-6




}

play(){
    form.hide();

    player.velocityX=0;
    player.velocityY=0;    

    if(keyWentDown("o")&&direction===3){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=-10;
        bullet.velocityY=0; 
     }

     if(keyWentDown("p")&&direction===2){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=10;
        bullet.velocityY=0; 
     }

     if(keyWentDown("k")&&direction===4){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=0;
        bullet.velocityY=10;       
     }

     if(keyWentDown("l")&&direction===1){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=0;
        bullet.velocityY=-10; 
     }
    if(keyIsDown(DOWN_ARROW)&&dummyvar===true){
       player.rotation=0
       player.velocityX=0;
       player.velocityY=10;
       direction=4
      }
     

      if(keyIsDown(UP_ARROW)&&dummyvar===true){
        player.rotation=180
        player.velocityX=0;
        player.velocityY=-10;
        direction=1;
       }
       
       if(keyIsDown(RIGHT_ARROW)&&dummyvar===true){
        player.rotation=270
        player.velocityX=10;
        player.velocityY=0;
        direction=2
       }

       if(keyIsDown(LEFT_ARROW)&&dummyvar===true){
        player.rotation=90
        player.velocityX=-10;
        player.velocityY=0;
        direction=3
       }

       player.collide(door1)
       player.collide(door2)
       player.collide(border1)
       player.collide(border2)
       player.collide(border3)
       
            
       if(player.isTouching(enemy1)|| player.isTouching(spike1)){
         lifeCount-=1
         console.log()
         player.x=683;
         player.y=100;
      }
      if(player.isTouching(enemy2)||player.isTouching(spike2)){
         lifeCount-=1
         console.log()
         player.x=683;
         player.y=100;
      }
      if(player.isTouching(enemy3)|| player.isTouching(spike3)|| player.isTouching(spike4)){
         lifeCount-=1
         console.log()
         player.x=683;
         player.y=100;
      }

      if(bullet.isTouching(enemy1)){
         enemy1.destroy();
         bullet.destroy();
      }
      if(bullet.isTouching(enemy2)){
         enemy2.destroy();
         bullet.destroy();
      }
      if(bullet.isTouching(enemy3)){
         enemy3.destroy();
         bullet.destroy();
      }
      

      if(lifeCount===0){
         textSize(90)
         fill("green")
         text("👎 !!GAME OVER!! 👎",230,200)
         text("👎 !!YOU LOSE!!  👎",280,400)
         player.velocityX=0
         player.velocityY=0
         dummyvar=false
         nuclearCode.velocityX=0;
         spike1.velocityX=0
         spike2.velocityX=0
         spike3.velocityX=0
         spike4.velocityX=0
         enemy1.velocityX=0
         enemy2.velocityX=0
         enemy3.velocityX=0
      }

      if(player.isTouching(nuclearCode)){
         textSize(90)
         fill("green")
         text("👍 !!HOORAY!! 👍",340,200)
         text("👍 !!YOU WIN!!👍",350,400)
         player.velocityX=0
         player.velocityY=0
         nuclearCode.velocityX=0;
         spike1.velocityX=0
         spike2.velocityX=0
         spike3.velocityX=0
         spike4.velocityX=0
         enemy1.velocityX=0
         enemy2.velocityX=0
         enemy3.velocityX=0

         dummyvar=false;
      }
      if(dummyvar===false){
         player.velocityX=0;
         player.velocityY=0;
           }

         drawSprites();
         textSize(28)
         fill("green")     
         text("CurrentLifeCount : "+lifeCount,90,90)
           
         if(player.isTouching(enemy1)|| player.isTouching(spike1)){
            lifeCount-=1
            console.log()
         }
         if(player.isTouching(enemy2)|| player.isTouching(spike2)){
            lifeCount-=1
            console.log()
         }
         if(player.isTouching(enemy3)|| player.isTouching(spike3)|| player.isTouching(spike4)){
            lifeCount-=1
            console.log()
         } 
        
         
         nuclearCode.bounceOff(border1)
         nuclearCode.bounceOff(border2)
         
         spike1.bounceOff(border1)
         spike1.bounceOff(border2)

         spike2.bounceOff(border1)
         spike2.bounceOff(border2)

         spike3.bounceOff(border1)
         spike3.bounceOff(border2)
         
         spike4.bounceOff(border1)
         spike4.bounceOff(border2)

         enemy1.bounceOff(border1)
         enemy1.bounceOff(border2)

         enemy2.bounceOff(border1)
         enemy2.bounceOff(border2)

         enemy3.bounceOff(border1)
         enemy3.bounceOff(border2)
       
         
       
}
}

function setup() {
  createCanvas(400,400);
  spriteBox = createSprite(100, 232, 20, 200)

}

function draw() 
{
  background('black');
 drawSprites()
 if (keyDown(LEFT_ARROW)){
 background('purple')   
 } 

if (keyDown(RIGHT_ARROW)){
  background('red')
}


}





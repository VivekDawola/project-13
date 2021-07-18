var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a826b482-5243-4b55-8b32-039c3955a0f6"],"propsByKey":{"a826b482-5243-4b55-8b32-039c3955a0f6":{"name":"fly_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png","frameSize":{"x":124,"y":141},"frameCount":2,"looping":true,"frameDelay":2,"version":"CVtigtRo1bAJVBogp8xBgu85MC15nutH","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":141},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Out=0;

var chor = createSprite(20,190,13,13);
chor.shapeColor = "green";


var police1=createSprite(90,130,10,10);
 police1.shapeColor="red";
 
var police2=createSprite(140,130,10,10);
  police2.shapeColor="red";

var police3 =createSprite(195,130,10,10);
 police3.shapeColor="red";

var police4=createSprite(250,130,10,10);
  police4.shapeColor="red";

var police5=createSprite(310,130,10,10);
 police5.shapeColor="red";

var line1 = createSprite(190,120,420,3);
line1.shapeColor="black";

var line2 = createSprite(190,260,420,3);
line2.shapeColor="black";




gameState="serve";

function draw() {
  background("white");
  textSize(20);
   text("Out: " + Out,200,100);
  
  
 if (gameState=="serve") {
   
textSize(20);
text("Welcome! Press Enter to Start.",80,50);

if (keyDown("enter")) {
  
 police1.velocityY=3;
police2.velocityY=4;
police3.velocityY=5;
police4.velocityY=6;
police5.velocityY=7;
  
  gameState="play";
}
 }
 
  if (gameState=="play") {
    
     if (keyDown("right")) {
chor.x=chor.x+2;
}

if (keyDown("left")) {
chor.x=chor.x-2; 
}
   
  if (chor.isTouching(police1)||chor.isTouching(police2)||chor.isTouching(police3)||chor.isTouching(police4)||chor.isTouching(police5)) {
   chor.x=20; 
    chor.y=190;
    Out=Out+1;
    
   playSound("assets/default.mp3", false);
  }
  }
  
   strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  police1.bounceOff(line1);
  police1.bounceOff(line2);

 police2.bounceOff(line1);
 police2.bounceOff(line2);

 police3.bounceOff(line1);
 police3.bounceOff(line2);

 police4.bounceOff(line1);
 police4.bounceOff(line2);
  
 police5.bounceOff(line1);
 police5.bounceOff(line2);
  
   
   if (chor.isTouching(police1)) {
     
   textSize(20);
  text("Game Over!",200,350)
     
   }
   
   if (chor.isTouching(police1)) {
     
   textSize(20);
  text("Game Over!",200,350)
     
   }
   
   if (chor.isTouching(police2)) {
     
   textSize(20);
  text("Game Over!",200,350)
     
   }
   if (chor.isTouching(police3)) {
     
   textSize(20);
  text("Game Over!",200,350)
     
   }
   if (chor.isTouching(police4)) {
     
   textSize(20);
  text("Game Over!",200,350)
     
   }
   
   if (chor.isTouching(police5)) {
     
   textSize(20);
  text("Game Over!",200,350)
     
   }
   
   
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

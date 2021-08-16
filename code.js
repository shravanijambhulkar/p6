var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7c99e8c4-c9df-4cf8-93b0-76bd5bb6c382","b9380acd-7b32-4b87-b76b-bd49697c6966"],"propsByKey":{"7c99e8c4-c9df-4cf8-93b0-76bd5bb6c382":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bwFLSQjiHD5ZFxfJ77gs.onezW6SV0gC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7c99e8c4-c9df-4cf8-93b0-76bd5bb6c382.png"},"b9380acd-7b32-4b87-b76b-bd49697c6966":{"name":"animation1","sourceUrl":"assets/api/v1/animation-library/gamelab/1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U/category_people/gameplayadventure_06.png","frameSize":{"x":271,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1CsoooarvF5NSOLgVvkFmhtm5QhmIN_U/category_people/gameplayadventure_06.png"}}};
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

var thief = createSprite(10,385,10,10);
thief.shapeColor = "black" ;

var laser1 = createSprite(298,32,200,5);
laser1.shapeColor = "red";
laser1.velocityY = 5;

var laser2 = createSprite(100,310,200,5);
laser2.shapeColor = "red";
laser2.velocityY = -5;

var diamond = createSprite(370,50);
diamond.setAnimation("animation_1");




function draw() {
  background("white");
  createEdgeSprites();
  
  thief.bounceOff(edges);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  
  thief.velocityX = 0;
  thief.velocityY = 0;
  
  if (keyDown("UP_ARROW")) {
    thief.velocityY = -3;
    
    
  }
  
  if (keyDown("DOWN_ARROW")) {
    thief.velocityY = 3;
    
  }
  
    
   if (keyDown("RIGHT_ARROW")) {
    thief.velocityX = 3;
    
  }
  
  if (keyDown("LEFT_ARROW")) {
    thief.velocityX = -3;
    
  }
  
  if(thief.isTouching(diamond)){
    textSize(20);
    stroke("black");
    text("DIAMOND IS STOLEN!!!",100, 200);
    
    thief.setVelocity(0,0);
    laser1.setVelocity(0,0);
    laser2.setVelocity(0,0);
    
    
  }
  
   if (laser1.isTouching(thief) || laser2.isTouching(thief)) {
    textSize(20);
    text("THIEF IS CAUGHT!!", 100, 200);
    
     laser1.setVelocity(0, 0);
     laser2.setVelocity(0,0);
     thief.setVelocity(0,0);
    
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

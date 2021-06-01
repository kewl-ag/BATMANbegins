class Umbrella {
      
     constructor(){
          var options = {
               isStatic: true,
               restitution : 0.5
          };

this.image = loadImage("Man.png");

          this.body = Matter.Bodies.circle(100,250,50, options);
          this.radius=50;
          World.add(world, this.body);
     }
     display(){
          var pos = this.body.position;
          image(this.image, pos.x, pos.y,300,300);
     }
}

    class ball {
      constructor(x,y,radius) {
        var options={
          isStatic:false,
          restitution:0.6,
          friction:1,
          density:0.5,
        }
        this.body = Bodies.circle(x, y, 20,options);
        this.radius = 20;
       
        
        World.add(world, this.body);
      }
      
      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(3);
        fill("pink");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
  };
  
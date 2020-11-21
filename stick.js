class Stick extends ParentClass{
    constructor(x, y, width, height,angle) {
    super(x,y,width,height)
      Matter.Body.setAngle(this.body,angle)
    this.image = loadImage("images/wood2.png")
    }
    display(){
    super.display()
    }
  };
  
class Slingshot { 
    constructor(body1,point2){
        var  options = {bodyA:bird.body,pointB:point2,stiffness:0.9,length:10}
        this.chain=Matter.Constraint.create(options)
        Matter.World.add(world,this.chain)
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }

    display(){
        image(this.sling1,200,60)
        image(this.sling2,175,60)
        if (this.chain.bodyA){
        var pos1 = this.chain.bodyA.position
        var pos2 = this.chain.pointB
        push()
        stroke(42,28,8)
        if(pos1.x<=220){
            strokeWeight(7) 
            line(pos1.x-25,pos1.y-5,pos2.x,pos2.y)
            line(pos1.x-20,pos1.y-5 ,pos2.x+25,pos2.y-5) 
            image(this.sling3,pos1.x-30,pos1.y-10,15,30) 
        }
        else{
            strokeWeight(2) 
            line(pos1.x+25,pos1.y-5,pos2.x,pos2.y)
            line(pos1.x+20,pos1.y-5 ,pos2.x+25,pos2.y-5)
            image(this.sling3,pos1.x+30,pos1.y-10,15,30) 
        }
        pop()     
        }
    }
    Fly(){
        this.chain.bodyA=null
    }


    attach(body){
    this.chain.bodyA=body
    }
}
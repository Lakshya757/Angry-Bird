class Bird{

    constructor(x,y){

    var options = {"restitution": 0.7, "friction": 0.4, "density":1}

    this.body = Bodies.rectangle(x,y,50,50,options)
    this.body.width = 50;
    this.body.height = 50;

    World.add(world,this.body)




    }

    display(){

        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;

        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);

        fill("white")

        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop(); 

    }


}
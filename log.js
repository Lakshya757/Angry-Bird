class Log{

    constructor(x,y,height,angle){

        var options = {'restitution': 0.9, 'friction': 0.5, 'density': 1 }

        this.body = Bodies.rectangle(x,y,20,height,options)
        this.body.width = 20;
        this.body.height = height;

        Matter.Body.setAngle(this.body, angle)
        World.add(world, this.body);


    }


    display(){


        var pos = this.body.position;
        var angle = this.body.angle;

        
        push()

        translate(pos.x,pos.y)
        rotate(angle)

        // *cries in javascript*///////////

     
        stroke("white")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)


        pop()




    }

}
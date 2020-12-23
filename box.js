class Box{
    constructor(x,y,widht,height){
        this.body=Bodies.rectangle(x,y,widht,height,{restitution:1})
        this.width=widht;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER)  
    
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
    }
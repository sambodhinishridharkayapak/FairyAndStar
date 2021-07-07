class stars
{
    constructor(x,y,width,height)
    {
        var options = 
        {
            'restitution':1.5,
            'friction':0.3,
            'density':1.0,
        }

        this.image = loadImage("images/star.png");
        this.body= Bodies.rectangle(x , y , width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);

        
        
    }
    display()
    {
        
        var pos=this.body.position;
        var angle= this.body.angle;
        if(keyCode=== DOWN_ARROW)
        {
            pos.x =fairy.x+130;
            pos.y = fairy.y-40;
            this.scale = 0.09;
        }
    imageMode(CENTER);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    image(this.image,0,0, this.width, this.height);
    pop();
        

    }
}
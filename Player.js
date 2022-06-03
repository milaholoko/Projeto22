class Player{

    constructor( x,y,width,height,angle){

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
        this.playerimage = loadImage("./assets/player.png");
        
    }

    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.playerimage,0,0,this.width,this.height);
        pop();

        image(this.baseimage,70,20,200,200);
        noFill();
    }
}
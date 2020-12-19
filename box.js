class Box{
	constructor(x,y,width,height){
        var options ={
            restitution:1,
            isStatic: false
        }
    
		this.body = Bodies.rectangle(x,y,width,height,options);
		this.width=width
		this.heigth=height
        World.add(world,this.body);
	}
display(){
	rectMode(CENTER);
	push()
    fill("green");
	rect(this.body.position.x,this.body.position.y,this.width,this.height);
	pop()
}


}
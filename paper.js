class Paper {
constructor (x,y,radius){
    var options = {
        isStatic:false,
        restitution:0.1,
        friction:0.1,
        density:1.1
    }
this.radius=20;
    this.body=Bodies.circle(x,y,20,options);
    World.add(world,this.body)

}

display(){
var pos=this.body.position;
push ()
translate(pos.x,pos.y)
fill ("salmon");
ellipseMode(RADIUS)
ellipse(0,0,this.radius,this.radius)
pop ()
}
}
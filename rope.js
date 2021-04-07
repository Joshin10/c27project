class chain
{
constructor(body1,body2,offsetX,offsetY) {

   this.offsetX=offsetX
   this.offsetY=offsetY
   var options={
       
    stiffness:0.05,
    length:10
   }

this.chain= Constraint.create(options);

World.add(world, this.chain);
}
display(){
  var p1=this.chain.bodyA.position
  
  var p2=this.chain.bodyB.position

  line(p1.x,p1.y,p2.x,p2.y);

}
}


class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:50
        }
        this.Chain=Constraint.create(options);
        World.add(world,this.Chain);

    }

    display(){
        var posA=this.Chain.bodyA.position;
        var posB=this.Chain.bodyB.position;
        line(posA.x,posA.y,posB.x,posB.y);
    }
}
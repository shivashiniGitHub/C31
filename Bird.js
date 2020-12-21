class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.array = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
 
    super.display();

    if(this.body.position.x>210 && this.body.velocity.x>10){
    var position = [this.body.position.x,this.body.position.y]
    this.array.push(position)
    }
    for (var b =0;b<this.array.length;b++){
    image(this.smokeImage,this.array[b][0],this.array[b][1])

    }
    
  }
}

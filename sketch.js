//level two
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
//level three
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
//top
block16 = new Block(390,155,30,40);

//polygon holder with slings
polygon=Bodies.circle(50,200,20);
World.add(world,polygon);


slingShot=new Slingshot(this.polygon,{x:100,y:200});


imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);



function keyPressed(){
    if(keyCode===32){
        slingShot.attach(this.polygon);
    }
}

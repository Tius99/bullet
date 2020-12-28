var wall,thickness;
var bullet,speed,weight;
function setup (){
	createCanvas(500,200);
thickness=random(23,83);
wall=createSprite(400,100,thickness,height/2);
wall.shapeColor="gray";
speed=random(23,121);
weight=random(30,52);
bullet=createSprite(50,100,50,5);
bullet.velocityX=speed;
}


function draw () {
background("teal");
if(h_c(bullet,wall)){
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if (damage>10){
wall.shapeColor="red"
}
if(damage<10){
wall.shapeColor="green"
}
}
drawSprites();
}
function h_c(ibullet,iwall){
bulletrightEdge=ibullet.x+ibullet.width
wallleftEdge=iwall.x
if(bulletrightEdge>=wallleftEdge){
return true 
}
return false
}
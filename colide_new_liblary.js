function colide_liblary(object1,object2){
//var object1=bullet.x+bullet.width;
//var object2=wall.x;
var bullet_right=object2.x+object2.width;
var wall_left=object1.x;
if(bullet_right===wall_left){
    object2.velocityX=0;
    return true;
}
else{
return false;
}
}
var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_imgWidth = 30;
block_imgHeight = 30;
var player_object = "";
var block_object = "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_img(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_imgWidth);
        block_object.scaleToHeight(block_imgHeight);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{ 
keyPressed = e.keyCode; 
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80'){
    console.log("P and shift key pressed together");
    block_imgWidth = block_imgWidth + 10;
    block_imgHeight = block_imgHeight + 10;
    document.getElementById("current_width").innerHTML = block_imgWidth;
    document.getElementById("current_height").innerHTML = block_imgHeight;
}
if(e.shiftKey == true && keyPressed == '77'){
    console.log("M and shift key pressed together");
    block_imgWidth = block_imgWidth - 10;
    block_imgHeight = block_imgHeight - 10;
    document.getElementById("current_width").innerHTML = block_imgWidth;
    document.getElementById("current_height").innerHTML = block_imgHeight;
}
if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '70')
{
new_img('thor_face.png');
console.log("f");
}
if(keyPressed == '66')
{
new_img('hulkd_body.png');
console.log("b");
}
if(keyPressed == '76')
{
new_img('spiderman_legs.png');
console.log("l");
}
if(keyPressed == '82')
{
new_img('ironman_right_hand.png');
console.log("r");
}
if(keyPressed == '72')
{
new_img('captin_america_left_hand.png');
console.log("h");
}
}
function up() {
    
if(player_y >=0)
{
player_y = player_y - block_imgHeight;
console.log("block image height = " + block_imgHeight);
console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
} 
}
function left() {
    
    if(player_x >=0)
    {
    player_x = player_x - block_imgWidth;
    console.log("block image height = " + block_imgWidth);
    console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    } 
    }
    function down() {
    
        if(player_y <=500)
        {
        player_y = player_y + block_imgHeight;
        console.log("block image height = " + block_imgHeight);
        console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
        } 
        }
        function right() {
    
            if(player_x <=850)
            {
            player_x = player_x + block_imgWidth;
            console.log("block image height = " + block_imgWidth);
            console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
            canvas.remove(player_object);
            player_update();
            } 
            }
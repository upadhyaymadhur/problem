tint_color = "";
function preload(){

}
function setup(){
canvas = createCanvas(640, 480);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();


}
function draw(){
image(video, 150, 100, 340, 280);
tint(tint_color);

rect(30, 10, 500, 55);
circle(30, 30, 50);



}
function take_snapshot(){
    save('photo.png');
}
function filter1(){
    tint_color = document.getElementById("color_name").value;
}

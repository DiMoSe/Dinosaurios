/*var vid20;

function setup() {
    createCanvas(windowWidth,windowHeight);
	vid20 = createVideo("Material/20/Tira horizontal menor resolución.webm");   
    vid20.hide();
    
}

function draw() {
    imageMode(CENTER);
     background(0);
    image(vid20,width/2,height/2);
}

function mousePressed(){
    vid20.loop();
}
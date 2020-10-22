// Variables
var screen = 7; //Lets the page know which screen to display, increases with clicks.
var gif1;
var gif2;
var gif3;
var gif4;
var audio4;
var gif5;
var gif6;
var gif7;
var gif8;
var gif8_2;
var vid20;

function setup() {
	createCanvas(windowWidth, windowHeight);

    gif1 = loadImage('Material/1/1-huellas_ME.gif');
    
    gif2 = loadImage('Material/2/Cabeza-y-escaleras-sube-y-baja_1.gif');
    
    gif3 = loadImage('Material/3/3-Acordarseee_2_1.gif');
    
    gif4 = loadImage('Material/4/4 sin fondo varios dinos.png');
    audio4 = loadSound('Material/4/AMBIENTE SONORO PARA 4.mp3');
    
    gif5 = loadImage('Material/5/5-Hippocampus_1.gif');
    
    gif6 = loadImage('Material/6/6 bestia y cabeza.png');
    audio6 = loadSound('Material/6/338674__newagesoup__wolf-growl.wav');
    
    gif7 = loadImage('Material/7/7-sin-fondo-se-mueve-bola_1.gif');
    
    gif8 = loadImage('Material/8/8-derecha-huevo-dino.gif');
    gif8_2 = loadImage('Material/8/8-izquierda-huevo-y-varios-dinos.gif');
    audio8 = loadSound('Material/8/DRONE PARA ALGÚN HUEVO.mp3');
    
	vid20 = createVideo('Material/20/Tira_horizontal.webm');
    vid20.hide();
    
	
    
    
}

function draw() {
    imageMode(CENTER);
    
	background(255);
    
	var func = new Function(
		"screen_" + screen +"()"
	)();  
}

/*WindowResize
Keeps the arrangement of objects in the screen despite how the 
user moves or resizes their window*/
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
/*WindowResize
END*/

/*Screens
Each screen function corresponds to a page for the book as 
designated by the artist*/
function screen_0() {
    
}

function screen_1() {    
    var scale = 0.65;
    image(gif1, windowWidth/2, windowHeight/2, scale*width,scale*gif1.height*width/gif1.width); //Fit Width
}

function screen_2() {
    var scale = 0.5;
    image(gif2, windowWidth/2, windowHeight/2, scale*width,scale*gif2.height*width/gif2.width);
}

function screen_3() {
    var scale = 0.95;
    image(gif3, windowWidth/2, windowHeight/2, scale*gif3.width*windowHeight/gif3.height, scale*height); //Fit Height
}

function screen_4() {
    background(0);
    var scale = 0.70;
    image(gif4, windowWidth/2, windowHeight/2, scale*width,scale*gif4.height*width/gif4.width);
}

function screen_5() {
    var scale = 0.65;
    image(gif5, windowWidth/2, windowHeight/2, scale*width,scale*gif5.height*width/gif5.width);
}

function screen_6() {
    var scale = 0.65;
    image(gif6, windowWidth/2, windowHeight/2, scale*width,scale*gif6.height*width/gif6.width);
}

function screen_7() {
    var scale = 0.67;
    image(gif7, windowWidth/2, windowHeight/2, scale*width,scale*gif7.height*width/gif7.width);
}

function screen_8() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
    
    var scale = 0.4;
    var scale2 = 0.39;
    
    image(gif8, windowWidth/4*3, windowHeight/2, scale*width,scale*gif8.height*width/gif8.width); 
    
    image(gif8_2, windowWidth/4, windowHeight/2, scale2*width,scale2*gif8_2.height*width/gif8_2.width); 
}

function screen_9() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(windowWidth/2, windowHeight/2, windowWidth, windowHeight/2);
    

}

function screen_10() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(windowWidth/2, windowHeight/2, windowWidth, windowHeight/2);
}

function screen_11() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth/2, windowHeight/2);
}

function screen_12() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth/2, windowHeight/2);
}

function screen_13() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth/2, windowHeight/2);
}

function screen_14() {

}

function screen_15() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth/2, windowHeight/2);
}

function screen_16() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_17() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_18() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_19() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_20() {
    background(0);
    image(vid20, windowWidth/2, windowHeight/2, 1.09*vid20.width*windowHeight/vid20.height, 1.09*height);    
}

function screen_21() {

}

function screen_22() {

}

function screen_23() {

}

function screen_24() {

}
/*Screens
END*/

/*MousePressed
With each press of the mouse the screen counter goes up 
and so the screen changes to the next page in the book.
When you reach the end of the book the counter resets and sends the
user back to the first page*/
function mousePressed() {
//    if(keyCode === RIGHT_ARROW) {
	screen++;
    clear();
	if (screen > 24) {
		screen = 0
//	}
    }
    console.log(screen);
    
    if (screen == 4) {
        audio4.loop();
    }else{
        audio4.stop();
    }
    
    if (screen == 6) {
        audio6.loop();
    }else{
        audio6.stop();
    }
    
    if (screen == 8) {
        audio8.loop();
    }else{
        audio8.stop();
    }
}

function mouseMoved(){
    vid20.loop();
}
/*MousePressed
END*/
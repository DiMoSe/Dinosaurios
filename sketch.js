
// Variables
var screen = 0; //Lets the page know which screen to display, increases with clicks.
let gif1;
let vid20;

function setup() {
	createCanvas(windowWidth, windowHeight);

    gif1 = loadImage('Material/1/12-huellas.gif');
    
	vid20 = createVideo('Material/20/Tira horizontal menor resolución.mp4');
	vid20.hide();
    
    
}

function draw() {
    imageMode(CENTER);
    
	background(255);
    
	/*var func = new Function(
		"screen_" + screen +"()"
	)();*/
     if (screen == 0) {
    screen_0();
  } else if (screen == 1) {
    screen_1();
  } else if (screen == 2) {
    screen_2();
  } else if (screen == 20) {
      screen_20();
  }
    
   

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
    /*scale = 0.65;
    gif_Width = scale*windowWidth;
    gif_Height = scale*2408*windowWidth/3204;
    gif1.position((windowWidth-gif_Width)/2,(windowHeight-gif_Height)/2);
    gif1.size(gif_Width, gif_Height);*/
    
    
    image(gif1, windowWidth/2, windowHeight/2);
    
//    gif1.loop();
}

function screen_2() {

}

function screen_3() {

}

function screen_4() {

}

function screen_5() {

}

function screen_6() {

}

function screen_7() {

}

function screen_8() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
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
    image(vid20, windowWidth/2, windowHeight/2-1, 1.09*vid20.width*windowHeight/vid20.height, 1.09*height);
    vid20.loop();
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
function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
	screen++;
    clear();
	if (screen > 24) {
		screen = 0
	}
    }
}
/*MousePressed
END*/
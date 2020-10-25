var screen = 0;

var playAudio1 = false;
var playAudio2 = false;

var scale_0 = 0.625;
var scale_1 = 0.45;
var scale_2 = 0.375;
var scale_3 = 0.25;
var scale_4 = 0.29;
var scale_5 = 0.325;
var scale_6 = 0.2;
var scale_7 = 0.5;
var scale_8 = 0.3;
var scale_9 = 0.67;
var scale_10 = 0.313;

var gif0;

var gif1;

var gif2;

var gif3;

var gif4;
var audio4;

var gif5;

var gif6;
var audio6;

var gif7;

var img8;
var img8_2;
var gif8;
var gif8_2;
var audio8;

var img9;
var img9_2;
var img9_3;
var gif9;
var gif9_2;
var gif9_3;
var audio9;

var gif10;
var img10_2;
var img10_3;
var gif10_2;
var gif10_3;
var audio10;
var audio10_2;

var gif11;
var img11_2;
var gif11_2;
var img11_3;
var gif11_3;
var gif11_4;

var img12;
var gif12;
var gif12_2;
var img12_3;
var gif12_3;
var gif12_4;
var audio12;
var audio12_2;

var img13;
var img13_2;
var img13_3;
var gif13;
var gif13_2;
var gif13_3;

var gif14;
var audio14;

var img15;
var img15_2;
var img15_3;
var gif15;
var gif15_2;
var gif15_3;

var img16;
var img16_2;
var gif16;
var gif16_2;
var audio16;

var img17;
var img17_2;
var gif17;
var gif17_2;
var audio17;

var img18;
var gif18;
var gif18_2;
var audio18;
var audio18_2;

var img19;
var img19_2;
var gif19;
var gif19_2;
var audio19;
var audio19_2;

var vid20;
var audio20;

var gif21;

var gif22;

var gif23;
var audio23;

var gif24;
var audio24;

function preload() {
    gif0 = loadImage('Material/0/0_2.png');

    gif1 = loadImage('Material/1/1.gif');
    
    gif2 = loadImage('Material/2/2.gif');
    
    gif3 = loadImage('Material/3/3.gif');
    
    gif4 = loadImage('Material/4/4.png');
    audio4 = loadSound('Material/4/4.mp3');
    
    gif5 = loadImage('Material/5/5.gif');
    
    gif6 = loadImage('Material/6/6.png');
    audio6 = loadSound('Material/6/6.mp3');
    
    gif7 = loadImage('Material/7/7.gif');
    
    img8 = loadImage('Material/8/8.png');
    img8_2 = loadImage('Material/8/8_2.png');
    gif8 = loadImage('Material/8/8.gif');
    gif8_2 = loadImage('Material/8/8_2.gif');
    audio8 = loadSound('Material/8/8.mp3');
    
    img9 = loadImage('Material/9/9.png');
    img9_2 = loadImage('Material/9/9_2.png');
    img9_3 = loadImage('Material/9/9_3.png');
    gif9 = loadImage('Material/9/9.gif');
    gif9_2 = loadImage('Material/9/9_2.gif');
    gif9_3 = loadImage('Material/9/9_3.gif');
    audio9 = loadSound('Material/9/9.mp3');
    
    gif10 = loadImage('Material/10/10.png');
    img10_2 = loadImage('Material/10/10_2.png');
    img10_3 = loadImage('Material/10/10_3.png');
    gif10_2= loadImage('Material/10/10_2.gif');
    gif10_3= loadImage('Material/10/10_3.gif');
    audio10 = loadSound('Material/10/10.mp3');
    audio10_2 = loadSound('Material/10/10_2.mp3');
    
    gif11 = loadImage('Material/11/11.png');
    img11_2 = loadImage('Material/11/11_2.png');
    gif11_2 = loadImage('Material/11/11_2.gif');
    img11_3 = loadImage('Material/11/11_3.png');
    gif11_3 = loadImage('Material/11/11_3.gif');
    gif11_4 = loadImage('Material/11/11_4.png');
    
    img12 = loadImage('Material/12/12.PNG');
    gif12 = loadImage('Material/12/12.gif');
    gif12_2 = loadImage('Material/12/12_2.png');
    img12_3 = loadImage('Material/12/12_3.png');
    gif12_3 = loadImage('Material/12/12_3.gif');
    gif12_4 = loadImage('Material/11/11_4.png');
    audio12 = loadSound('Material/12/12.mp3');
    audio12_2 = loadSound('Material/12/12_2.mp3')
    
    img13 = loadImage('Material/13/13.png');
    img13_2 = loadImage('Material/13/13_2.png');
    img13_3 = loadImage('Material/13/13_3.png');
    gif13 = loadImage('Material/13/13.gif');
    gif13_2 = loadImage('Material/13/13_2.gif');
    gif13_3 = loadImage('Material/13/13_3.gif');
    
    gif14 = loadImage('Material/14/14.gif');
    audio14 = loadSound('Material/14/14.mp3');
    
    img15 = loadImage('Material/15/15.png');
    img15_2 = loadImage('Material/15/15_2.png');
    img15_3 = loadImage('Material/15/15_3.png');
    gif15 = loadImage('Material/15/15.gif');
    gif15_2 = loadImage('Material/15/15_2.gif');
    gif15_3 = loadImage('Material/15/15_3.gif');
    
    img16 = loadImage('Material/16/16.png');
    img16_2 = loadImage('Material/16/16_2.png');
    gif16 = loadImage('Material/16/16.gif');
    gif16_2 = loadImage('Material/16/16_2.gif');
    audio16 = loadSound('Material/16/16.mp3');
    
    img17 = loadImage('Material/17/17.png');
    img17_2 = loadImage('Material/17/17_2.png');
    gif17 = loadImage('Material/17/17.gif');
    gif17_2  = loadImage('Material/17/17_2.gif');
    audio17 = loadSound('Material/17/17.mp3');
    
    img18 = loadImage('Material/18/18.png');
    gif18 = loadImage('Material/18/18.gif');
    gif18_2 = loadImage('Material/18/18_2.png');
    audio18 = loadSound('Material/18/18.mp3');
    audio18_2 = loadSound('Material/18/18_2.mp3');
    
    img19 = loadImage('Material/19/19.png');
    img19_2 = loadImage('Material/19/19_2.png');
    gif19 = loadImage('Material/19/19.gif');
    gif19_2 = loadImage('Material/19/19_2.gif');
    audio19 = loadSound('Material/19/19.mp3');
    audio19_2 = loadSound('Material/19/19_2.mp3');
    
    audio20 = loadSound('Material/20/20.mp3');
    
    gif21 = loadImage('Material/21/21.gif');
    
    gif22 = loadImage('Material/22/22.gif');
    
    gif23 = loadImage('Material/23/23.gif');
    audio23 = loadSound('Material/23/23.mp3');
    
    gif24 = loadImage('Material/24/24.gif');
    audio24 = loadSound('Material/24/24.mp3');
    
    img25 = loadImage('Material/25/25.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    
    vid20 = createVideo('Material/20/20.webm');
    vid20.hide();
}

function draw() {
    imageMode(CENTER);
    frameRate(10);
	background(255);
    strokeWeight(10);
    
	var func = new Function(
		"screen_" + screen +"()"
	)();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function screen_0() {
    image(gif0, windowWidth/2, windowHeight/2, scale_0*width,scale_0*gif0.height*width/gif0.width);
}
    
function screen_1() {    
    image(gif1, windowWidth/2, windowHeight/2, scale_0*width,scale_0*gif1.height*width/gif1.width); //Fit Width
}

function screen_2() {
    image(gif2, windowWidth/2, windowHeight/2, scale_1*width,scale_1*gif2.height*width/gif2.width);
}

function screen_3() {
    var scale = 0.95;
    image(gif3, windowWidth/2, windowHeight/2, scale*gif3.width*height/gif3.height, scale*height);
}

function screen_4() {
    background(0);
    var scale = 0.7;
    image(gif4, windowWidth/2, windowHeight/2, scale*width,scale*gif4.height*width/gif4.width);
}

function screen_5() {
    image(gif5, windowWidth/2, windowHeight/2, scale_9*width,scale_9*gif5.height*width/gif5.width);
}

function screen_6() {
    image(gif6, windowWidth/2, windowHeight/2, scale_0*width,scale_0*gif6.height*width/gif6.width);
}

function screen_7() {
    image(gif7, windowWidth/2, windowHeight/2, scale_9*width,scale_9*gif7.height*width/gif7.width);
}

function screen_8() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
    
    var scale2 = 0.385;
    
    image(img8, windowWidth/4*3, windowHeight/2, scale_10*width,scale_10*img8.height*width/img8.width); 
    
    image(img8_2, windowWidth/4, windowHeight/2, scale2*width,scale2*img8_2.height*width/img8_2.width); 
    
    if(mouseX>windowWidth/2){
        image(gif8, windowWidth/4*3, windowHeight/2, scale_2*width,scale_2*gif8.height*width/gif8.width);
    }else{
       image(gif8_2, windowWidth/4, windowHeight/2, scale2*width,scale2*gif8_2.height*width/gif8_2.width);
    }  
}

function screen_9() {
	var scale = 0.475;
    var scale2 = 0.43;
    var scale3 = 0.15;
    var scale4 = 0.2;
    
    frameRate(5);
    
    image(img9, windowWidth/4, windowHeight/2, scale2*width,scale2*img9.height*width/img9.width);
    
    image(img9_2, windowWidth/4*3, windowHeight/4, scale3*width,scale3*img9_2.height*width/img9_2.width);
    
    image(img9_3, windowWidth/4*3, windowHeight/4*3, scale4*width,scale4*img9_3.height*width/img9_3.width);
    
    if(mouseX<windowWidth/2){
        image(gif9, windowWidth/4, windowHeight/2, scale*width,scale*gif9.height*width/gif9.width);
    } else if(mouseY<windowHeight/2){
        image(gif9_2, windowWidth/4*3, windowHeight/4, scale_6*width,scale_6*gif9_2.height*width/gif9_2.width);
    } else if(mouseY>windowHeight/2){
        image(gif9_3, windowWidth/4*3, windowHeight/4*3, scale_3*width,scale_3*gif9_3.height*width/gif9_3.width);
    }   
    
    if(mouseX>width/2){
        if(playAudio1!=true){
            audio9.loop();
            playAudio1 = true;
        }
    }else{
        if(playAudio1!=false){
            audio9.stop();
            playAudio1 = false;
        }
    }
    
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(windowWidth/2, windowHeight/2, windowWidth, windowHeight/2);
}

function screen_10() {
    var scale2 = 0.24;
    
    image(gif10, windowWidth/4, windowHeight/2, scale_10*width,scale_10*gif10.height*width/gif10.width);

    image(img10_2, windowWidth/4*3, windowHeight/4, scale2*width,scale2*img10_2.height*width/img10_2.width);
    
    image(img10_3, windowWidth/4*3, windowHeight/4*3, scale2*width,scale2*img10_3.height*width/img10_3.width);
    
    if(mouseX>windowWidth/2 && mouseY<windowHeight/2){
        img10_2.hide;
        image(gif10_2, windowWidth/4*3, windowHeight/4, scale2*width,scale2*gif10_2.height*width/gif10_2.width);
    } else if (mouseX>windowWidth/2 && mouseY>windowHeight/2){
        image(gif10_3, windowWidth/4*3, windowHeight/4*3, scale2*width,scale2*gif10_3.height*width/gif10_3.width);
    }  
    
    if(mouseX<width/2){
        if(playAudio1!=true){
            audio10.loop();
            playAudio1 = true;
        }
    }else{
        if(playAudio1!=false){
            audio10.stop();
            playAudio1 = false;
        }
    }
    
    if(mouseX>width/2 && mouseY<height/2){
        if(playAudio2!=true){
            audio10_2.loop();
            playAudio2 = true;
        }
    }else{
        if(playAudio2!=false){
            audio10_2.stop();
            playAudio2 = false;
        }
    }
    
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(windowWidth/2, windowHeight/2, windowWidth, windowHeight/2);
}

function screen_11() {    
    var scale2 = 0.19;
    var scale2_2 = 0.165;
    var scale3 = 0.275;
    
    image(gif11, windowWidth/4, windowHeight/4, scale_2*width,scale_2*gif11.height*width/gif11.width);
    
    image(img11_2, windowWidth/4, windowHeight/4*3, scale2*width,scale2*img11_2.height*width/img11_2.width);
    
    image(img11_3, windowWidth/4*3, windowHeight/4, scale2_2*width,scale2_2*img11_3.height*width/img11_3.width)
    
    if(mouseX<width/2 && mouseY>height/2){
        image(gif11_2, windowWidth/4, windowHeight/4*3, scale2*width,scale2*gif11_2.height*width/gif11_2.width);
    } else if(mouseX>width/2 && mouseY<height/2){
        image(gif11_3, windowWidth/4*3, windowHeight/4, scale2_2*width,scale2_2*gif11_3.height*width/gif11_3.width);
    }
    
    image(gif11_4, windowWidth/4*3, windowHeight/4*3, scale3*width,scale3*gif11_4.height*width/gif11_4.width);
    
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth, windowHeight/2);
}

function screen_12() {
    var scale = 0.36;
    var scale2 = 0.13;
    
    image(img12, windowWidth/4, windowHeight/4, scale*width,scale*img12.height*width/img12.width);
    
    image(img12_3, windowWidth/4*3, windowHeight/4, scale2*width,scale2*img12_3.height*width/img12_3.width);
    
    if(mouseX<width/2 && mouseY<height/2){
        image(gif12, windowWidth/4, windowHeight/4, scale*width,scale*gif12.height*width/gif12.width);
    } else if(mouseX>width/2 && mouseY<height/2){
        image(gif12_3, windowWidth/4*3, windowHeight/4, scale2*width,scale2*gif12_3.height*width/gif12_3.width);
    }
    
    if(mouseX<width/2 && mouseY>height/2){
        if(playAudio1!=true){
            audio12.loop();
            playAudio1 = true;
        }
    }else{
        if(playAudio1!=false){
            audio12.stop();
            playAudio1 = false;
        }
    }
    
    if(mouseX>width/2 && mouseY>height/2){
        if(playAudio2!=true){
            audio12_2.loop();
            playAudio2 = true;
        }
    }else{
        if(playAudio2!=false){
            audio12_2.stop();
            playAudio2 = false;
        }
    }
    
    image(gif12_2, windowWidth/4, windowHeight/4*3, scale_3*width,scale_3*gif12_2.height*width/gif12_2.width);
    
    image(gif12_4, windowWidth/4*3, windowHeight/4*3, scale_4*width,scale_4*gif12_4.height*width/gif12_4.width);
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth, windowHeight/2);
}

function screen_13() {
    var scale2 = 0.27;
    var scale3 = 0.34;
    
    image(img13, windowWidth/4, windowHeight/4, scale_5*width,scale_5*img13.height*width/img13.width);
    
    image(img13_2, windowWidth/4, windowHeight/4*3, scale2*width,scale2*img13_2.height*width/img13_2.width);
    
    image(img13_3, windowWidth/4*3, windowHeight/2, scale3*width,scale3*img13_3.height*width/img13_3.width);
    
    if(mouseX<width/2 && mouseY<height/2){
        image(gif13, windowWidth/4, windowHeight/4, scale_5*width,scale_5*gif13.height*width/gif13.width);
    } else if(mouseX<width/2 && mouseY>height/2){
        image(gif13_2, windowWidth/4, windowHeight/4*3, scale2*width,scale2*gif13_2.height*width/gif13_2.width);
    } else if(mouseX>width/2){
        image(gif13_3, windowWidth/4*3, windowHeight/2, scale3*width,scale3*gif13_3.height*width/gif13_3.width);
    }
         
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth/2, windowHeight/2);
}

function screen_14() {
    image(gif14, windowWidth/2, windowHeight/2, scale_0*width,scale_0*gif14.height*width/gif14.width);
}

function screen_15() {
    var scale2 = 0.23;
    var scale = 0.445;
    var scale3 = 0.22;
    var scale4 = 0.24;
    
    image(img15, windowWidth/4, windowHeight/4, scale*width,scale*img15.height*width/img15.width);
    
    image(img15_2, windowWidth/4, windowHeight/4*3, scale3*width,scale3*img15_2.height*width/img15_2.width);
    
    image(img15_3, windowWidth/4*3, windowHeight/2, scale4*width,scale4*img15_3.height*width/img15_3.width);
    
    if(mouseX<width/2 && mouseY<height/2){
        image(gif15, windowWidth/4, windowHeight/4, scale_1*width,scale_1*gif15.height*width/gif15.width);
    } else if(mouseX<width/2 && mouseY>height/2){
        image(gif15_2, windowWidth/4, windowHeight/4*3, scale2*width,scale2*gif15_2.height*width/gif15_2.width);
    } else if(mouseX>width/2){
        image(gif15_3, windowWidth/4*3, windowHeight/2, scale_4*width,scale_4*gif15_3.height*width/gif15_3.width);
    }
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth/2, windowHeight/2);
}

function screen_16() {
    var scale = 0.425;
    var scale2 = 0.41;
    var scale3 = 0.195;
    
    image(img16, windowWidth/4, windowHeight/2, scale2*width,scale2*img16.height*width/img16.width);
    
    image(img16_2, windowWidth/4*3, windowHeight/2, scale3*width,scale3*img16_2.height*width/img16_2.width);
    
    if(mouseX<width/2){
        image(gif16, windowWidth/4, windowHeight/2, scale*width,scale*gif16.height*width/gif16.width);
    }else{
        image(gif16_2, windowWidth/4*3, windowHeight/2, scale_6*width,scale_6*gif16_2.height*width/gif16_2.width);
    }
    
    if(mouseX<width/2){
        if(playAudio1!=true){
            audio16.loop();
            playAudio1 = true;
        }
    }else{
        if(playAudio1!=false){
            audio16.stop();
            playAudio1 = false;
        }
    }
        
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_17() {    
    var scale2 = 0.239;
    
    image(img17, windowWidth/4, windowHeight/2, scale_10*width,scale_10*img17.height*width/img17.width);
    
    image(img17_2, windowWidth/4*3, windowHeight/2, scale2*width,scale2*img17_2.height*width/img17_2.width);
    
    if(mouseX<width/2){
        image(gif17, windowWidth/4, windowHeight/2, scale_7*width,scale_7*gif17.height*width/gif17.width);
    }else{
        image(gif17_2, windowWidth/4*3, windowHeight/2, scale_3*width,scale_3*gif17_2.height*width/gif17_2.width);
    }
    
    if(mouseX>width/2){
        if(playAudio1!=true){
            audio17.play();
            playAudio1 = true;
        }
    }else{
        if(playAudio1!=false){
            audio17.stop();
            playAudio1 = false;
        }
    }
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_18() {
    var scale = 0.44;
    var scale2 = 0.245;
    var scale3 = 0.245;
    
    image(img18, windowWidth/4, windowHeight/2, scale3*width,scale3*img18.height*width/img18.width);
    
    if(mouseX<width/2){
        image(gif18, windowWidth/4, windowHeight/2, scale*width,scale*gif18.height*width/gif18.width);
    }
    
    if(mouseX<width/2){
        if(playAudio1!=true){
            audio18.play();
            playAudio1 = true;
        }
    }else{
        if(playAudio1!=false){
            audio18.stop();
            playAudio1 = false;
        }
    }
    
    if(mouseX>width/2){
        if(playAudio2!=true){
            audio18_2.loop();
            playAudio2 = true;
        }
    }else{
        if(playAudio2!=false){
            audio18_2.stop();
            playAudio2 = false;
        }
    }
    
    image(gif18_2, windowWidth/4*3, windowHeight/2, scale2*width,scale2*gif18_2.height*width/gif18_2.width);
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_19() {
    var scale = 0.328;
    var scale2 = 0.297;
    
    image(img19, windowWidth/4, windowHeight/2, scale*width,scale*img19.height*width/img19.width);
    
    image(img19_2, windowWidth/4*3, windowHeight/2, scale2*width,scale2*img19_2.height*width/img19_2.width);
    
    if(mouseX<width/2){
        image(gif19, windowWidth/4, windowHeight/2, scale_5*width,scale_5*gif19.height*width/gif19.width);
    } else{
        image(gif19_2, windowWidth/4*3, windowHeight/2, scale_5*width,scale_5*gif19_2.height*width/gif19_2.width);
    }
    
    if(mouseX<width/2){
        if(playAudio1!=true){
            audio19.play();
            playAudio1 = true;
        }
    }else{
        if(playAudio1!=false){
            audio19.stop();
            playAudio1 = false;
        }
    }
    
    if(mouseX>width/2){
        if(playAudio2!=true){
            audio19_2.loop();
            playAudio2 = true;
        }
    }else{
        if(playAudio2!=false){
            audio19_2.stop();
            playAudio2 = false;
        }
    }
        
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_20() {
    background(0);
    frameRate(30);
    
    image(vid20, windowWidth/2, windowHeight/2, 1.09*vid20.width*windowHeight/vid20.height, 1.09*height);    
}

function screen_21() {
    var scale = 0.315;
    
    image(gif21, windowWidth/2, windowHeight/2, scale*width,scale*gif21.height*width/gif21.width);
}

function screen_22() {    
    image(gif22, windowWidth/2, windowHeight/2, scale_8*width,scale_8*gif22.height*width/gif22.width);
}

function screen_23() {
    image(gif23, windowWidth/2, windowHeight/2, scale_8*width,scale_8*gif23.height*width/gif23.width);
}

function screen_24() {
    image(gif24, windowWidth/2, windowHeight/2, scale_7*width,scale_7*gif24.height*width/gif24.width);    
}

function screen_25() {
    var scale = 0.74;
    image(img25, windowWidth/2, windowHeight/2, scale*width,scale*img25.height*width/img25.width);    
}

function mouseClicked() {
	screen++;
    
    playAudio1 = false;
    playAudio2 = false;
    
	if (screen > 25) {
		screen = 0
    }    
    
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
    
    if(screen != 9){
        audio9.stop();
    }
    
    if(screen != 10){
        audio10.stop();
        audio10_2.stop();
    }
    
    if(screen != 12){
        audio12.stop();
        audio12_2.stop();
    }
    
    if(screen == 14){
        audio14.loop();
    }else{
        audio14.stop();
    }
    
    if(screen != 16){
        audio16.stop();
    }
    
    if(screen != 17){
        audio17.stop();
    }
    
    if(screen != 18){
        audio18.stop();
        audio18_2.stop();
    }
    
    if(screen != 19){
        audio19.stop();
        audio19_2.stop();
    }
    
    if(screen == 20){
        audio20.loop();
    }else{
        audio20.stop();
    }
    
    if(screen == 23){
        audio23.loop();
    }else{
        audio23.stop();
    }
    
    if(screen == 24){
        audio24.loop();
    }else{
        audio24.stop();
    }
}

function mouseMoved(){
    vid20.loop();
}
// Variables
var screen = 0; //Lets the page know which screen to display, increases with clicks.
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
var gif8;
var gif8_2;
var audio8;
var gif9;
var gif9_2;
var gif9_3;
var audio9;
var gif10;
var gif10_2;
var gif10_3;
var audio10;
var audio10_2;
var gif11;
var gif11_2;
var gif11_3;
var gif11_4;
var gif12;
var gif12_2;
var gif12_3;
var gif12_4;
var audio12;
var gif13;
var gif13_2;
var gif13_3;
var gif14;
var audio14;
var gif15;
var gif15_2;
var gif15_3;
var gif16;
var gif16_2;
var audio16;
var gif17;
var gif17_2;
var audio17;
var gif18;
var gif18_2;
var audio18;
var audio18_2;
var gif19;
var gif19_2;
var audio19;
var audio19_2;
var vid20;
var gif21;
var gif22;
var gif23;
var audio23;
var gif24;
var audio24;

function preload() {
    gif0 = loadImage('Material/1/1-huellas_ME.png');

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
    
    gif9 = loadImage('Material/9/9-Izquierda-animal-y-escalera.gif');
    gif9_2 = loadImage('Material/9/9-arriba-derecha-ojo_1.gif');
    gif9_3 = loadImage('Material/9/9-abajo-derecha-boca.gif');
    audio9 = loadSound('Material/9/GRRR PARA LADO DERECHO_01.mp3');
    
    gif10 = loadImage('Material/10/10 izquierda dino y escalera.png');
    gif10_2= loadImage('Material/10/10-arriba-derecha-plantas.gif');
    gif10_3= loadImage('Material/10/Abajo-derecha-pies-mueven.gif');
    audio10 = loadSound('Material/10/PARA DINO CON ESCALERA.wav');
    audio10_2 = loadSound('Material/10/PARA PLANTAS.wav');
    
    gif11 = loadImage('Material/11/Arriba a la izquierda tres dinos color.png');
    gif11_2 = loadImage('Material/11/11-abajo-a-la-izquierda_1.gif');
    gif11_3 = loadImage('Material/11/11-arriba-a-la-derecha-humanos-pedestal_1.gif');
    gif11_4 = loadImage('Material/11/11 abajo a la derecha rino (Geo me dijo que se repita esta).png');
    
    gif12 = loadImage('Material/12/12-Arriba-izquierda-huevo-abre-y-cierra-dino.gif');
    gif12_2 = loadImage('Material/12/12 abajo izquierda pájaro.png');
    gif12_3 = loadImage('Material/12/12-arriba-derecha-hombre-y-palmera-salta.gif');
    gif12_4 = loadImage('Material/11/11 abajo a la derecha rino (Geo me dijo que se repita esta).png');
    audio12 = loadSound('Material/12/PARA AVE EN JAULA.wav');
    
    gif13 = loadImage('Material/13/13-arriba-izquierda-perro-y-silueta-escapan.gif');
    gif13_2 = loadImage('Material/13/Animal-cola-abajo-izquierda.gif');
    gif13_3 = loadImage('Material/13/13-derecha-hombre-y-espinas-con-huellas.gif');
    
    gif14 = loadImage('Material/14/14-Figuras-y-huellas.gif');
    audio14 = loadSound('Material/14/TACONES PARA HUELLAS.wav');
    
    gif15 = loadImage('Material/15/15-perro-arriba-izquierda-grafismos.gif');
    gif15_2 = loadImage('Material/15/15-abajo-izquierda-dino-cabeza_1.gif');
    gif15_3 = loadImage('Material/15/15-derecha-lineas.gif');
    
    gif16 = loadImage('Material/16/16-dos-dinos-alas-y-huellas.gif');
    gif16_2 = loadImage('Material/16/16-ADN-color-cambia.gif');
    audio16 = loadSound('Material/16/TAMBOR PARA DINO CON ALAS.wav');
    
    gif17 = loadImage('Material/17/17-izquierda-avestruz-cabeza.gif');
    gif17_2  = loadImage('Material/17/17-lado-derecho-color.gif');
    audio17 = loadSound('Material/17/CAMPANA PARA DETONAR COLOR.wav');
    
    gif18 = loadImage('Material/18/18-Izquierda-ave-huellas-y-cuello.gif');
    gif18_2 = loadImage('Material/18/18 Manguera.png');
    audio18 = loadSound('Material/18/GONG PARA CABEZA DE AVE.wav');
    audio18_2 = loadSound('Material/18/BURBUJAS PARA MANGUERA.wav');
    
    gif19 = loadImage('Material/19/19-ave-con-alas.gif');
    gif19_2 = loadImage('Material/19/19-relojes-y-huellas.gif');
    audio19 = loadSound('Material/19/SONIDO DE ALAS PARA AVE.wav');
    audio19_2 = loadSound('Material/19/SONIDO DE RELOJES ALARMA.wav');
    
	vid20 = createVideo('Material/20/Tira_horizontal.webm');
    vid20.hide();
    
    gif21 = loadImage('Material/21/21-Izquierda-mujer-y-planta-circulos-con-huellas.gif');
    
    gif22 = loadImage('Material/21/21-derecha-personas-y-plantas-cambian.gif');
    
    gif23 = loadImage('Material/22/22-mano-con-sangre.gif');
    audio23 = loadSound('Material/22/SONIDO LÍQUIDO PARA MANO.wav');
    
    gif24 = loadImage('Material/23/23-Luna-rebota.gif');
    audio24 = loadSound('Material/23/A VER SI QUEDA MEJOR ESTE - PELOTA REBOTANDO.wav');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    
    
}

function draw() {
    imageMode(CENTER);
    frameRate(10);
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
    var scale = 0.65;
    image(gif0, windowWidth/2, windowHeight/2, scale*width,scale*gif0.height*width/gif0.width);
}

function screen_1() {    
    var scale = 0.65;
    image(gif1, windowWidth/2, windowHeight/2, scale*width,scale*gif1.height*width/gif1.width); //Fit Width
}

function screen_2() {
    var scale = 0.45;
    image(gif2, windowWidth/2, windowHeight/2, scale*width,scale*gif2.height*width/gif2.width);
}

function screen_3() {
    var scale = 0.95;
    image(gif3, windowWidth/2, windowHeight/2, scale*gif3.width*height/gif3.height, scale*height); //Fit Height
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
    var scale = 0.6;
    image(gif6, windowWidth/2, windowHeight/2, scale*width,scale*gif6.height*width/gif6.width);
}

function screen_7() {
    var scale = 0.67;
    image(gif7, windowWidth/2, windowHeight/2, scale*width,scale*gif7.height*width/gif7.width);
}

function screen_8() {
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
    
    var scale = 0.375;
    var scale2 = 0.385;
    
    image(gif8, windowWidth/4*3, windowHeight/2, scale*width,scale*gif8.height*width/gif8.width); 
    
    image(gif8_2, windowWidth/4, windowHeight/2, scale2*width,scale2*gif8_2.height*width/gif8_2.width); 
}

function screen_9() {
	var scale = 0.5;
    var scale2 = 0.2;
    var scale3 = 0.25;
    
    frameRate(5);
    
    image(gif9, windowWidth/4, windowHeight/2, scale*width,scale*gif9.height*width/gif9.width);
    
    image(gif9_2, windowWidth/4*3, windowHeight/4, scale2*width,scale2*gif9_2.height*width/gif9_2.width);
    
    image(gif9_3, windowWidth/4*3, windowHeight/4*3, scale3*width,scale3*gif9_3.height*width/gif9_3.width);   
    
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(windowWidth/2, windowHeight/2, windowWidth, windowHeight/2);
}

function screen_10() {
    var scale = 0.335;
    var scale2 = 0.25;
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(windowWidth/2, windowHeight/2, windowWidth, windowHeight/2);
    
    image(gif10, windowWidth/4, windowHeight/2, scale*width,scale*gif10.height*width/gif10.width);
    
    image(gif10_2, windowWidth/4*3, windowHeight/4, scale2*width,scale2*gif10_2.height*width/gif10_2.width);
    
    image(gif10_3, windowWidth/4*3, windowHeight/4*3, scale2*width,scale2*gif10_3.height*width/gif10_3.width);
}

function screen_11() {    
    var scale = 0.4;
    var scale2 = 0.195;
    var scale2_2 = 0.17;
    var scale3 = 0.3;
    
    image(gif11, windowWidth/4, windowHeight/4, scale*width,scale*gif11.height*width/gif11.width);
    
    image(gif11_2, windowWidth/4, windowHeight/4*3, scale2*width,scale2*gif11_2.height*width/gif11_2.width);
    
    image(gif11_3, windowWidth/4*3, windowHeight/4, scale2_2*width,scale2_2*gif11_3.height*width/gif11_3.width);
    
    image(gif11_4, windowWidth/4*3, windowHeight/4*3, scale3*width,scale3*gif11_4.height*width/gif11_4.width);
    
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth, windowHeight/2);
}

function screen_12() {
    var scale = 0.37;
    var scale1 = 0.26;
    var scale2 = 0.13;
    var scale3 = 0.30;
    
    image(gif12, windowWidth/4, windowHeight/4, scale*width,scale*gif12.height*width/gif12.width);
    
    image(gif12_2, windowWidth/4, windowHeight/4*3, scale1*width,scale1*gif12_2.height*width/gif12_2.width);
    
    image(gif12_3, windowWidth/4*3, windowHeight/4, scale2*width,scale2*gif12_3.height*width/gif12_3.width);
    
    image(gif12_4, windowWidth/4*3, windowHeight/4*3, scale3*width,scale3*gif12_4.height*width/gif12_4.width);
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth, windowHeight/2);
}

function screen_13() {
    var scale = 0.325;
    var scale2 = 0.27;
    var scale3 = 0.35;
    
    image(gif13, windowWidth/4, windowHeight/4, scale*width,scale*gif13.height*width/gif13.width);
    
    image(gif13_2, windowWidth/4, windowHeight/4*3, scale2*width,scale2*gif13_2.height*width/gif13_2.width);
    
    image(gif13_3, windowWidth/4*3, windowHeight/2, scale3*width,scale3*gif13_3.height*width/gif13_3.width);
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth/2, windowHeight/2);
}

function screen_14() {
    var scale = 0.65;
    
    image(gif14, windowWidth/2, windowHeight/2, scale*width,scale*gif14.height*width/gif14.width);
}

function screen_15() {
    var scale = 0.45;
    var scale2 = 0.23;
    var scale3 = 0.30;
    
    image(gif15, windowWidth/4, windowHeight/4, scale*width,scale*gif15.height*width/gif15.width);
    
    image(gif15_2, windowWidth/4, windowHeight/4*3, scale2*width,scale2*gif15_2.height*width/gif15_2.width);
    
    image(gif15_3, windowWidth/4*3, windowHeight/2, scale3*width,scale3*gif15_3.height*width/gif15_3.width);
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	line(0, windowHeight/2, windowWidth/2, windowHeight/2);
}

function screen_16() {
    var scale = 0.425;
    var scale2 = 0.205;
    
    image(gif16, windowWidth/4, windowHeight/2, scale*width,scale*gif16.height*width/gif16.width);
    
    image(gif16_2, windowWidth/4*3, windowHeight/2, scale2*width,scale2*gif16_2.height*width/gif16_2.width);
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_17() {
    var scale = 0.5;
    var scale2 = 0.25;
    
    image(gif17, windowWidth/4, windowHeight/2, scale*width,scale*gif17.height*width/gif17.width);
    
    image(gif17_2, windowWidth/4*3, windowHeight/2, scale2*width,scale2*gif17_2.height*width/gif17_2.width);
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_18() {
    var scale = 0.45;
    var scale2 = 0.25;
    
    image(gif18, windowWidth/4, windowHeight/2, scale*width,scale*gif18.height*width/gif18.width);
    
    image(gif18_2, windowWidth/4*3, windowHeight/2, scale2*width,scale2*gif18_2.height*width/gif18_2.width);
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_19() {
    var scale = 0.5;
    var scale2 = 0.325;
    
    image(gif19, windowWidth/4, windowHeight/2, scale*width,scale*gif19.height*width/gif19.width);
    
    image(gif19_2, windowWidth/4*3, windowHeight/2, scale2*width,scale2*gif19_2.height*width/gif19_2.width);
    
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
}

function screen_20() {
    background(0);
    frameRate(30);
    image(vid20, windowWidth/2, windowHeight/2, 1.09*vid20.width*windowHeight/vid20.height, 1.09*height);    
}

function screen_21() {
    var scale = 0.325;
    
    image(gif21, windowWidth/2, windowHeight/2, scale*width,scale*gif21.height*width/gif21.width);
}

function screen_22() {
    var scale = 0.31;
    
    image(gif22, windowWidth/2, windowHeight/2, scale*width,scale*gif22.height*width/gif22.width);
}

function screen_23() {
    var scale = 0.31;
    
    image(gif23, windowWidth/2, windowHeight/2, scale*width,scale*gif23.height*width/gif23.width);
}

function screen_24() {
    var scale = 0.5;
    
    image(gif24, windowWidth/2, windowHeight/2, scale*width,scale*gif24.height*width/gif24.width);    
}
/*Screens
END*/

/*MousePressed
With each press of the mouse the screen counter goes up 
and so the screen changes to the next page in the book.
When you reach the end of the book the counter resets and sends the
user back to the first page*/
function mouseClicked() {
//    if(keyCode === RIGHT_ARROW) {
	screen++;
    clear();
	if (screen > 24) {
		screen = 0
//	}
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
    
    if(screen == 9){
        audio9.loop();
    }else{
        audio9.stop();
    }
    
    if(screen == 10){
        audio10.loop();
        audio10_2.loop();
    }else{
        audio10.stop();
        audio10_2.stop();
    }
    
    if(screen == 12){
        audio12.loop();
    }else{
        audio12.stop();
    }
    
    if(screen == 14){
        audio14.loop();
    }else{
        audio14.stop();
    }
    
    if(screen == 16){
        audio16.loop();
    }else{
        audio16.stop();
    }
    
    if(screen == 17){
        audio17.loop();
    }else{
        audio17.stop();
    }
    
    if(screen == 18){
        audio18.loop();
        audio18_2.loop();
    }else{
        audio18.stop();
        audio18_2.stop();
    }
    
    if(screen == 19){
        audio19.loop();
        audio19_2.loop();
    }else{
        audio19.stop();
        audio19_2.stop();
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
/*MousePressed
END*/
let herro3X = 0;
let herro3Y = 0;
let herro2X = 0;
let herro2Y = 0;
let x = 100;
let y = 400;
let herro4;
let herro;
let herro3;
let dx = 35;
let dy = 35;
let px= 0;
let py= 0;
let health = 100;
let dHelth = 0;
let a = 0;


function setup() {
	createCanvas(800, 800);
	herro3X = random(100, 700);
	herro3Y = random(100, 700);
	herro2X = random(400, 700);
	herro2Y = random(400, 700);
	px = random(100, 700); 
	py = random(450, 700);
}


function preload() {  // preload() runs once
	  herro = loadImage("herro.png");
			herro3 = loadImage("herro3.png");
			herro4 = loadImage("herro4.png");
		}
		
		function draw() {
			background('#06BF38');
			herro.resize(0, 50);
			herro3.resize(0, 30);
			herro4.resize(0, 100);
			image(herro, x, y);
			image(herro3, px, py );
			image(herro4, 600, 600 );
			fill('#00D2E3');
			rect(0, 0, 900, 350);
			fill('#F8FC05');
			ellipse(600, 100, 100, 100);
			fill(255, 0, 0);
			rect(herro2X, herro2Y, 70, 70);
		
			if (x > herro2X) {
				herro2X = herro2X + 1;
			} else if (x < herro2X) {
				herro2X = herro2X - 1;
			}
			if (y > herro2Y) {
				herro2Y = herro2Y + 1;
			} else if (y < herro2Y) {
				herro2Y = herro2Y - 1;
			}
		
		
			
		
			if (x > herro2X - 30 && x < herro2X + 30) {
				if (y > herro2Y - 30 && y < herro2Y + 30) {
					dHelth = dHelth - 1;
				}
			}        
		
		
			if (x > px - 50 && x < px + 50) {
				if (y > py - 50 && y < py + 50) {
					px = random(100, 700); 
					py = random(450, 700);
					dHelth = dHelth + 20;
					fill(255, 0, 0);
					rect(herro2X, herro2Y, 75, 75);
					a = a +1;
				}
			}
			//очки
			textSize(80);
			text(a, 100, 100);
		
			//оставшиеся жизни
			//fill(#05FC30);
			//health = 100 - millis() / 200 + dHelth;
			////if (health > 100) {
			////  health = 100;
			////}
			//rect(width - 130, 30, health, 30);
		
			//условие порожения
			if (health < 6) {
				fill('#E000AC'); 
				textSize(50);
				text("aaaaaaa", 150, 150);
			}
			if (health <= 0) {
				//rect(width - 130, 30, 0, 30);
				health = 0;
				fill('#8F8CF7');
				textSize(100);
				background('#FF150D');
				text("ОЙ", 350, 400);
			} else {
				fill('#05FC30');
				health = 100 - millis() / 200 + dHelth;
				if (health < 20) {
					fill(255, 0, 0);
				} else if (health < 50 && health > 19) {
					fill ('#E0BB00');
				} else if (health > 100) {
					health = 100;
				}
				if (y < 300) {
					health = 0;
					background('#FF150D');
					textSize(100);
					text("ОЙ", 350, 400);
				}
		
				rect(width - 130, 30, health, 30);
			}
		}
		
		
		function keyPressed() {
			if (keyCode == RIGHT_ARROW) {
				x = x + dx;
			} else if (keyCode == LEFT_ARROW) {
				x = x - dx;
			} else if (keyCode == DOWN_ARROW) {
				y = y + dy;
			} else if (keyCode == UP_ARROW) {
				y =y - dy;
			}
		}
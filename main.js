const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');

ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;



block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("gof-h.png",function(Img){
        hole_obj = Img;
        hole_obj .scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:holr_y,
            left:holr_x
        });
        canvas.add(hole_obj);
    });
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png",function(Img) {
      ball_obj = Img;
      ball_obj.scaleToWidth(50);
      ball_obj.scaleToHeight(50);
      ball_obj.set({
        top:ball_y,
        left:ball_X
      });
      canvas.add(ball_obj);
    });
    
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    document.getElementById("hd3").innerHTML="você consegui!!";
    document.getElementById("myCanvas").style.borderColor="red";   
}
	else {
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
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=0){
            ball_y = ball_y + block_image_heigth;
            console.log("Altura da imagem do bloco t = " + block_image_height);
            console.log("Quando a tecla direcional cima é pressionada,X = " + ball_x +", Y = " +ball_y);
            canvas.remove(ball_obj);
            new_image();
        }
	}

	function down()
	{
        if(ball_y <=450){
            ball_y = ball_y - block_image_heigth;
            console.log("Altura da imagem do bloco t = " + block_image_height);
            console.log("Quando a tecla direcional baixo é pressionada,X = " + ball_x +", Y = " +ball_y);
            canvas.remove(ball_obj);
            new_image();
        }
	}

	function left()
	{
		if(ball_X >=5)
		{
            ball_x = ball_x + block_image_heigth;
            console.log("Altura da imagem do bloco t = " + block_image_height);
            console.log("Quando a tecla direcional baixo é pressionada,X = " + ball_x +", Y = " +ball_y);
            canvas.remove(ball_obj);
            new_image();
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
            ball_x = ball_x - block_image_heigth;
            console.log("Altura da imagem do bloco t = " + block_image_height);
            console.log("Quando a tecla direcional baixo é pressionada,X = " + ball_x +", Y = " +ball_y);
            canvas.remove(ball_obj);
            new_image();
		}
	}
	
}

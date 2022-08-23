let canvas = document.getElementById('MyCanvas');
    ctx = canvas.getContext('2d');
        canvas.width="600";
        canvas.height="600";
        canvas.border=1;


function rectangles (x,y,a){

    for (let i=0; i<10; i++){	
        let red = Math.floor(Math.random()* 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);	
        ctx.fillStyle= "rgb("+red+","+green+"," +blue+" )";  
      	ctx.fillRect(x,y,a,a);
	    x=x+60;
    }

}
function RightCircles(x, y, a){
    
    for (let i=0; i<15; i++)
    {	
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random() * 255);
    let blue= Math.floor(Math.random() * 255);	
    ctx.beginPath();
        ctx.arc(x,y,a,0, 2 * Math.PI,true); 
        ctx.fillStyle= "rgb("+red+","+green+"," +blue+" )";   
        ctx.fill(); 
        ctx.stroke();
    ctx.strokeStyle =  "rgb("+red+","+green+"," +blue+" )";   
    	x=x+55; y=y+40; a=a+2;
    } 		

}
function LeftCircles(x, y, a){
    
    for (let i=0; i<15; i++)
    {	
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random() * 255);
    let blue= Math.floor(Math.random() * 255);	
    ctx.beginPath();
        ctx.arc(x,y,a,0, 2 * Math.PI,true); 
        ctx.fillStyle= "rgb("+red+","+green+"," +blue+" )";   
        ctx.fill(); 
        ctx.stroke();
    ctx.strokeStyle =  "rgb("+red+","+green+"," +blue+" )";   
    	x=x-55; y=y+45; a=a+2;
    } 		

}
function BackTangles (){
    for (var i=0; i<40; i++)
        {	
        let red = Math.floor(Math.random()* 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let x = Math.floor(Math.random()* 500);
        let y = Math.floor(Math.random() * 500);
        let a = Math.floor(Math.random() * 70);	
        let b = Math.floor(Math.random() * 70);	
        ctx.fillStyle= "rgb("+red+","+green+"," +blue+" )";  

      	ctx.fillRect(x,y,a,b);
 } 		

}

function clear(){
    ctx.clearRect(0, 0, 1000, 1000);
}

function smile(){

        var rr=Math.min(600,600);
        var cx=rr/2;
        var cy=rr/2;
 
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(cx, cy, Math.floor(rr*0.25), 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "black";
      
        ctx.beginPath();
        ctx.arc(Math.floor(rr*0.41), Math.round(rr*0.4), Math.round(rr*0.03), 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
      
        ctx.beginPath();
        ctx.arc(Math.ceil(rr*0.59), Math.floor(rr*0.4), Math.round(rr*0.03), 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();
     
        ctx.beginPath();
        ctx.arc(cx, Math.round(rr*0.52), Math.round(rr*0.13), Math.PI, 2*Math.PI, true);
        ctx.closePath();
        ctx.fill();
}
function VerticalCircles(x, y, a){
    
    for (let i=0; i<15; i++)
    {	
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random() * 255);
    let blue= Math.floor(Math.random() * 255);	
    ctx.beginPath();
        ctx.arc(x,y,a,0, 2 * Math.PI,true); 
        ctx.fillStyle= "rgb("+red+","+green+"," +blue+" )";   
        ctx.fill(); 
        ctx.stroke();
    ctx.strokeStyle =  "rgb("+red+","+green+"," +blue+" )";   
    	 y=y+40; a=a+2;
    } 		

}
function VericalRectangles (x,y,a){

    for (let i=0; i<10; i++){	
        let red = Math.floor(Math.random()* 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);	
        ctx.fillStyle= "rgb("+red+","+green+"," +blue+" )";  
      	ctx.fillRect(x,y,a,a);
	    y=y+60;
    }

}
function Box (){
    x = 150;
    y = 180;
    a = 300;	
        for (var i=0; i<20; i++){	
            var red = Math.floor(Math.random()* 255);
            var green = Math.floor(Math.random() * 255);
            var blue = Math.floor(Math.random() * 255);
            ctx.fillStyle= "rgb("+red+","+green+"," +blue+" )";  
                  	ctx.fillRect(x,y,a,a);
	        x=x+5;
	        y=y+5;
	        a=a-10;
        } 		

}
function GreenSmile(){
    ctx.fillStyle = 'LawnGreen';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(320, 240, 200, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //eyes
    ctx.fillStyle = 'cyan';
    ctx.beginPath();
    ctx.arc(270, 175, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(370, 175, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //mouth
    ctx.strokeStyle = 'magenta';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(320, 240, 150, 0, -1 * Math.PI);
    ctx.stroke();
    ctx.closePath();


     ctx.font='50px Arial Black';
     ctx.fillText("Smile!", 230,500);




}
function BAck2(){
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#aef";
    ctx.beginPath();
    ctx.fillRect(0,0,600,300);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();


     // Рисуем траву 
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#5c5";
     ctx.beginPath();
     ctx.fillRect(0,250,600,300);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();

    // рисуем стену домика
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#ca5";
     ctx.beginPath();
     ctx.fillRect(50,150,100,100);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();
     
    // рисуем окошко домика
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#000";
     ctx.beginPath();
     ctx.fillRect(79,178,43,43);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();

     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#ff0";
     ctx.beginPath();
     ctx.fillRect(80,200,20,20);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#ff0";
     ctx.beginPath();
     ctx.fillRect(101,200,20,20);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#ff0";
     ctx.beginPath();
     ctx.fillRect(80,179,20,20);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#ff0";
     ctx.beginPath();
     ctx.fillRect(101,179,20,20);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();


    // рисуем трубу домика
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#f00";
     ctx.beginPath();
     ctx.fillRect(65,100,10,30);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();


    // рисуем крышу
     ctx.beginPath();
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#ca5";
     ctx.moveTo(50, 150);
     ctx.lineTo(100, 100);
     ctx.moveTo(100, 100);
     ctx.lineTo(150, 150);
     ctx.moveTo(150, 150);
     ctx.lineTo(50, 150);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();

     // рисуем дерево
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#cc0";
     ctx.beginPath();
     ctx.fillRect(235,150,10,100);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();

     // Рисуем окружность 
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#0f0";
     ctx.beginPath();
     ctx.arc(240,150,40,0,Math.PI*2,true);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();

     // Рисуем окружность 
     ctx.strokeStyle = "#000";
     ctx.fillStyle = "#ff6";
     ctx.beginPath();
     ctx.arc(215,150,5,0,Math.PI*2,true);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();
     ctx.fillStyle = "#fa6";
     ctx.beginPath();
     ctx.arc(230,120,5,0,Math.PI*2,true);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();
     ctx.fillStyle = "#aa6";
     ctx.beginPath();
     ctx.arc(250,170,5,0,Math.PI*2,true);
     ctx.closePath();
     ctx.stroke();
     ctx.fill();

    // птичка
     ctx.beginPath();
     ctx.moveTo(200,50);
     ctx.quadraticCurveTo(205,70,210,50);
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(180,40);
     ctx.quadraticCurveTo(185,60,190,40);
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(230,40);
     ctx.quadraticCurveTo(235,60,240,40);
     ctx.stroke();

    }

   


setTimeout(BackTangles, 10);
setTimeout(rectangles, 400, 10, 250, 50);
setTimeout(RightCircles, 900, 10, 60, 10);
setTimeout(LeftCircles, 1600, 680, -55, 10);
setTimeout(clear, 2000);
setTimeout(smile, 2200);
setTimeout(clear, 3200);
setTimeout(VerticalCircles, 3600, 100, 60, 10);
setTimeout(VerticalCircles, 3600, 500, 60, 10);
setTimeout(VericalRectangles, 3800, 10, 10, 50);
setTimeout(VericalRectangles, 3800, 540, 10, 50);
setTimeout(Box, 4400);
setTimeout(clear, 4800);
setTimeout(GreenSmile, 5400);
setTimeout(clear, 5800);
setTimeout(BAck2, 6400);




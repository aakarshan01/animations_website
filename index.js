function qwerty(){

document.getElementById('something').className ='classname';
document.getElementById('something1').className ='classname1';

}

function qwertystop(){

document.getElementById('something').className ='classnamestop';
document.getElementById('something1').className ='classnamestop1';

}


function qw(){

document.getElementById('sprite').className ='spri';
document.getElementById('sprite2').className ='spri2';
//document.getElementById('something1').className ='classname1';

}

function qwstop(){

document.getElementById('sprite').className ='spristop';
document.getElementById('sprite2').className ='spristop2';

//document.getElementById('something1').className ='classnamestop1';

}


function bo(){

document.getElementById('bolt').className ='bol';
//document.getElementById('something1').className ='classname1';

}


function heastop(){

document.getElementById('heart').className ='hearstop';

//document.getElementById('something1').className ='classnamestop1';

}

//----------------------------------------------------------------------------------------------------

var b;
var dx=Math.random()*200;
var dy=Math.random()*200;
var c;
	
function init(){
	
	b=document.getElementById("random");
	moveIt();
}
	
	
window.requestAnimFrame=(function(){
//	return window.requestAnimationFrame			||
	//	   window.webkitRequestAnimationFrame	||
	  //     window.mozRequestAnimationFrame		||
		//   window.oRequestAnimationFrame		||
		  // window.msRequestAnimationFrame		||
		return   function(callback,element){
			window.setTimeout(callback,1000/2);   
			   
		   };
})();
function moveIt()
{
	var x=0,y=0;
	x+=(dx-x)*1.15;
	y+=(dy-y)*1.15;
	var colors=['aqua','black','blue','fuchsia','gray','green','lime','maroon','navy','olive','orange','purple','red','silver','teal','white','yellow'];
	c=Math.random()*16;
	c=Math.floor(c);
	var z=Math.random()*1200;
	
	b.style.width=x+"px";
	b.style.height=y+"px";
	b.style.marginLeft=z+"px";
	b.style.backgroundColor=colors[c];
	b.style.boxShadow="2px 2px 30px "+colors[Math.floor(Math.random()*16)];
	b.style.borderColor=colors[Math.floor(Math.random()*16)];
	
	
		dx=Math.random()*200;
		dy=Math.random()*200;
	
	
	requestAnimFrame(moveIt,b);
	
}


(function (){

function init1(){
     var canvas = document.getElementsByTagName('canvas')[0];
     var c = canvas.getContext('2d');

     var container = {x:0,y:0,r:200,width:800,height:800};
     var circles = [{x:300,y:300,r:50,color:'red',vx:3,vy:5},
                    {x:100,y:100,r:100,color:'yellow',vx:1,vy:-4},
                    {x:700,y:350,r:25,color:'green',vx:10,vy:-10},
                    {x:500,y:600,r:75,color:'blue',vx:6,vy:-4},
                    {x:200,y:400,r:120,color:'white',vx:-4,vy:-6}
     ];


     function draw(){
         c.fillStyle = 'transparent';
         c.strokeStyle = 'black';
         c.fillRect(container.x,container.y,container.width,container.height);
         
        //c.fillStyle='black';
		//c.beginPath();
		//c.arc(container.x+450,container.y+450,container.r,0,2*Math.PI);
        // c.fill();

		
         for(var i=0; i <circles.length; i++){
             c.fillStyle =circles[i].color;
             c.beginPath();
             c.arc(circles[i].x,circles[i].y,circles[i].r,0,2*Math.PI);
             c.fill();

             if((circles[i].x + circles[i].vx + circles[i].r > container.x + container.width) || (circles[i].x - circles[i].r + circles[i].vx < container.x)){
                circles[i].vx = - circles[i].vx;
             }
             if((circles[i].y + circles[i].vy + circles[i].r > container.y + container.height) || (circles[i].y - circles[i].r + circles[i].vy < container.y)){
                 circles[i].vy = - circles[i].vy;
             }
             circles[i].x +=circles[i].vx;
             circles[i].y +=circles[i].vy;
         }



         requestAnimationFrame(draw);

     }


    requestAnimationFrame(draw);


}


window.addEventListener('load',init1,false);

}());  






var playBtn = document.getElementById('zxc');
var  resetBtn = document.getElementById('zxcstop');
var  clok = document.getElementById('clok');
var  clokSound = document.getElementById('clokSound');

playBtn.addEventListener('click', function() {
  if (!clok.classList.contains('active')) {
    clok.classList.add('active');
    clokSound.play();
  }
}, false);

resetBtn.addEventListener('click', function() {
  clok.classList.remove('active');
  clokSound.pause();
  clokSound.currentTime = 0;
}, false);

function moes(){
	 var elem = document.getElementById("last");
	 elem.style.left=0+'px';
	 elem.style.top=0+'px';
}

var id;
function move(){
	
  var elem = document.getElementById("last");   
  var pos =0; 
  var top1=0;
  var type=1,num=0;
  
  id = setInterval(go, 10);
  
  function go() {
    
	if (pos == 280&&num==0) {
		type=2;
		num=1;
      //clearInterval(id);
    } 
	else if(pos==460&&num==0){
		type=3;
		num=1;
		}
	
	else if(pos==570&&num==0){
		type=4;
		num=1;
    }
	else if(pos==750&&num==0){
		type=5;
		num=1;
	}
	else if(pos==1020&&num==0){
		clearInterval(id);
	}
	else if(type==1){
      pos++; 
      //elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
	else if(type==2)
	{	
		pos++;
		top1++;
		elem.style.left = pos + 'px';
		elem.style.top = top1 + 'px';
		num=0;
	}
	else if(type==3)
	{		
		pos++;
		elem.style.left = pos + 'px';
		num=0;
	}
	else if(type==4)
	{		
		pos++;
		top1--;
		elem.style.left = pos + 'px';
		elem.style.top = top1 + 'px';
		num=0;
	}
	else if(type==5)
	{		
		pos++;
		elem.style.left = pos + 'px';
        num=0;
	}
	
  }
	
}








function checker(){
	var likes = localStorage.clickcount;
	document.getElementById("result").innerHTML = likes;
	document.getElementById("commentlist").innerHTML=localStorage.getItem("cmt1");

	
	}

function clickCounter() {
if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
		var d=document.getElementById("result");
        d.innerHTML ="Likes : "+localStorage.clickcount;
		d.style.color="yellow";
		//d.style.textShadow: 2px 2px 3px #FF0000;
}
function disp(){
	var c;
	c=localStorage.clickcount;
	document.getElementById("result").innerHTML="Likes : "+c;	
	document.getElementById("commentlist").innerHTML=localStorage.getItem("cmt1");
document.getElementById("commentlist").style.color="yellow";
document.getElementById("result").style.color="yellow";

	}
function processF() {
	var comments = document.Comment.commentItem.value;
	var ncomment=localStorage.getItem("cmt1");
	if(ncomment==""){
		var com=comments+"<br></br>";
	}
	else{
		var com=comments+"<br></br>"+ncomment;
	}
	localStorage.setItem("cmt1",com);
	document.getElementById("commentlist").innerHTML=localStorage.getItem("cmt1");
	document.getElementById("commentlist").style.color="yellow";
}


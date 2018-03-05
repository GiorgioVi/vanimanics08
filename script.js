var svg = document.getElementById("svg");
var animation = "circle";
var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", svg.getAttribute("width")/2);
circle.setAttribute("cy", svg.getAttribute("height")/2);
circle.setAttribute("r", 0);
circle.setAttribute("fill","red");
svg.appendChild(circle);
var radius = 0;
var rate = 1;
var requestId = 0;

var c = function(){
    end();
     circle.setAttribute("cx", svg.getAttribute("width")/2);
      circle.setAttribute("cy", svg.getAttribute("height")/2);
       circle.setAttribute("r", 0);
        radius = 0;
         rate = 1;
          requestId = setInterval(animCircle, 15);
}

var d = function(){
    end();
     xPos = 250;
      yPos = 250;
       xVel = -3 + Math.floor(Math.random() * 6);
        yVel = -3 + Math.floor(Math.random() * 6);
         radius = 20;
          circle.setAttribute("cx", svg.getAttribute("width")/2);
           circle.setAttribute("cy", svg.getAttribute("height")/2);
            circle.setAttribute("r", radius);
             requestId = setInterval(animateDvd, 1);
}

var animCircle = function(){
    var makeCircle = function(){
	          radius += rate;
	           if(radius == svg.getAttribute("width")/2) rate = -1;
	            if(radius == 0) rate = 1;
	             circle.setAttribute("r", radius);
    }
    makeCircle();
}

var end = function(){
    clearInterval(requestId);
}

var xPos = 250;
var yPos = 250;
var xVel = -3 + Math.floor(Math.random() * 6);
var yVel = -3 + Math.floor(Math.random() * 6);
var animateDvd = function(){
    var drawDvd = function(){
	circle.setAttribute("cx", xPos);
	 circle.setAttribute("cy", yPos);
	  xPos += xVel;
	   yPos += yVel;
	    if(yPos <= 20 || yPos >= 480) yVel = -1*yVel
	     if(xPos <= 20 || xPos >= 480) xVel = -1*xVel
    }

    drawDvd();
}

var stop = document.getElementById("stop");
var requestID = 0;

cB = document.getElementById("cB");
dB = document.getElementById("dB");
cB.addEventListener("click", c);
dB.addEventListener("click", d);
stop.addEventListener("click", end);

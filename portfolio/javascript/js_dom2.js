window.onload = function(){
 
//RELEASE 0: Link this script to the js_dom.html file and analyze what this code does.
 
document.getElementsByTagName('body')[0].style.backgroundColor = "#FF5600";
//document.getElementsByTagName('body')[0].style.backgroundImage = "url('bg-texture.jpg')";
document.getElementsByTagName('body')[0].style.margin = "0px";
document.getElementsByTagName('body')[0].style.width = "100%";
document.getElementsByTagName('body')[0].style.height = "1000px";
document.getElementsByTagName('body')[0].style.color = "#560EAD";


/* Header */

document.getElementById("header").style.textAlign = "center";
document.getElementById("header").style.paddingTop = "5%";
//document.getElementById("header").style.paddingBottom = "2%";
//document.getElementById("header").style.backgroundImage = "url('Elegant5.jpg')";

/* Links */

document.getElementById("nav").style.width = "100%";
document.getElementById("nav").style.float = "right";

document.querySelector("ul").style.marginLeft = "20%";
document.querySelector("ul").style.display = "block";
document.querySelector("ul").style.float = "left";
document.querySelector("ul").style.width = "62%";
document.querySelector("ul").style.listStyleType = "none";
document.querySelector("ul").style.padding = "2px";
document.querySelector("ul").style.border = "double 5px #000000"



document.querySelector("li.first").style.float = "left";
document.querySelector("li.second").style.float = "left";
//document.querySelector("li.third").style.float = "left";
document.querySelector("li.last").style.float = "left";
document.querySelector("li.first").style.marginLeft = "10%";
document.querySelector("li.first").style.marginRight = "30%";
document.querySelector("li.second").style.marginRight = "30%";
//document.querySelector("li.third").style.marginRight = "20%";
//document.querySelector("li.last").style.marginRight = "25%";





/* Sidebar */

//document.getElementById("sidebar").style.backgroundImage = "url('Elegant2.jpg')";
document.getElementById("sidebar").style.width = "18%";
document.getElementById("sidebar").style.height = "80%"
document.getElementById("sidebar").style.float = "left";








/* Center */

document.getElementById("center").style.width = "65%";
document.getElementById("center").style.border = "dotted 10px #560EAD"
//document.getElementById("center").style.backgroundImage = "url('Elegant3.jpg')";
document.getElementById("center").style.backgroundColor = "#FFF100";
document.getElementById("center").style.float = "left";
document.getElementById("center").style.height = "80%"



/* Right */

document.getElementById("right").style.float = "right";
document.getElementById("right").style.width = "15%";
document.getElementById("right").style.height = "80%"


/* Footer */

document.getElementById("footer").style.clear = "both";
//document.getElementById("footer").style.backgroundImage = "url('bg-texture.jpg')";
document.getElementById("footer").style.width = "100%";
document.getElementById("footer").style.textAlign = "center";
document.getElementById("footer").style.height = "5%";
document.getElementById("footer").style.float = "left";

//Countdown -------------------------------------//

// set the date we're counting down to
var target_date = new Date("March 27, 2014").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById("countdown");
document.getElementById("countdown").style.listStyleType = "none";
document.getElementById("countdown").style.textAlign = "center";
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
     countdown.innerHTML = days + "d, " + hours + "h, "
    + minutes + "m, " + seconds + "s";  
 
}, 1000);














} // end of the window.onload function do not remove or write DOM manipulation below this.
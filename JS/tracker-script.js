const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const OVAL = document.querySelector('.circle-small');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

   

}

function mouseeCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX -30;
    var verticalPosition= windowHeight - e.clientY -26;

    // Set horizontal and vertical position.
    OVAL.style.left = horizontalPosition -'px';
    OVAL.style.top = verticalPosition +'px';

}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

function changeHueOnTouch(){
    OVAL.style.backgroundColor= "blue";
    OVAL.style.borderColor= "blue";

}


  

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates , false);

AREA.addEventListener('mousemove',mouseeCoordinates,false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

OVAL.addEventListener('mouseenter', changeHueOnTouch, false);



// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);

OVAL.addEventListener('mouseleave', function(){OVAL.removeAttribute("style");}, false);
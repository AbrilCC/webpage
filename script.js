/*
//Declaro las variables para no escribir de más xd
var slides = document.getElementsByClassName("slide"),
    slider = document.getElementsById("slider"),
    slideCount = slides.length,     //cant de imagenes
    slideWidth = 0,                 //declaro la var global para luego usarla, es la width mostrada en pantalla
    position = 0
    
    ;


if(slideCount > 0) {
    slideWidth = slider[0].offsetWidth / 3;     //Inicializo slideWidth
    


    // Set the proper left value for each slide
    for (var i = 0; i < slideCount; i++) {
        slides[i].style.left = slideWidth * i + "px";
    }


    // Add the animated class to each slide
    for (i = 0; i < slideCount; i++) {
        slides[i].classList.add("animated");
    }

    //Añado el eventListener para el boton de next
    document.getElementsById("next").addEventListener('click', function(event) {
        event.preventDefault();
        if(position < slideCount - 1) {
            moveSlides('forward');
            position++;
        }
    });

    document.getElementsById("prev").addEventListener('click', function(event) {
        event.preventDefault();
        if(position > 0) {
            moveSlides('backward');
            position--;
        }
    });

}

function moveSlides(direction) {
    for(var j=0; j < slides.length; j++) {
        if(direction == "backward") {
            slides[j].style.left = +slides[j].style.left + slideWidth + "px";
        } else if (direction == "forward") {
            slides[j].style.left = +slides[j].style.left- slideWidth + "px";
        }
    }
}
*/

/*
 * - Declare variables
 * - Get the slide width
 * - Set the proper left value for each slide
 * - Calculate tallest slide
 * - Add the animated class to each slide
 * - Add an event listener for next button
 * - Add an event listener for previous button
 * - Add an event listener for window resize
 * - Declare a function that calculates the tallest slide
 * - Declare a function that will change the slide position
 */
/*
var slides = document.getElementsByClassName('slide'),
    slider = document.getElementById('slider'),
    cursor = 0,
    slideWidth = 0,
    topHeight = 450,
    slideCount = slides.length;

if (slideCount > 0) {
    // Get the slide width
    slideWidth = slides[0].offsetWidth / 3;

    // Set the proper left value for each slide
    for (var i = 0; i < slideCount; i++) {
        slides[i].style.left = slideWidth * i + "px";
    }

    // Calculate tallest slide
    calculateTallestSlide();

    // Add the animated class to each slide
    for (i = 0; i < slideCount; i++) {
        slides[i].classList.add('animated');
    }

    // Add an event listener for next button
    document.getElementById('next').addEventListener('click', function(event) {
        event.preventDefault();

        if (cursor < slideCount - 1) {
            moveSlides('forward');
            cursor++;
        }
    });

    // Add an event listener for previous button
    document.getElementById('prev').addEventListener('click', function(event) {
        event.preventDefault();

        if (cursor > 0) {
            moveSlides('backward');
            cursor--;
        }
    });


}

// Declare a function that calculates the tallest slide
function calculateTallestSlide() {
    for (var i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }

    slider.style.height = topHeight + "px";
}

// Declare a function that will change the slide position
function moveSlides(direction) {
    for (var j = 0; j < slides.length; j++) {
        if (direction == "backward") {
            slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, '') + slideWidth + "px";
        } else if (direction == "forward") {
            slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, '') - slideWidth + "px";
        }
    }
}*/


var right = 0;
var maxMargin = 460;
var jumpMargin = 450;


function slideLeft(event){
  var rowcont = document.querySelector(".row-container");
  if(right <= -maxMargin){
    event.preventDefault();
  }
  else{
    right -= jumpMargin;
  }
   rowcont.style.marginLeft = right+"px";
}

function slideRight(event){
  var rowcont = document.querySelector(".row-container");
  if(right==0){
    event.preventDefault();
  }
  else if(right >= maxMargin){
    event.preventDefault();
  }
  else{
     right += jumpMargin;
  }
  rowcont.style.marginLeft = right+"px";
}

window.onload=setWidth;
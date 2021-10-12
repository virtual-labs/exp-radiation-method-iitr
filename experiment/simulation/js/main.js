
// RESET FUNCTION
function Reset() 
{
    window.location.reload(); 
}

// SLIDING ANIMATION OF IMAGES
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// TIMING FUNCTION TO AUTO CHANGE IMAGES
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

//SCALE FUNCTIONS
function show1()  
   {  
    setTimeout(function(){ document.getElementById("alidade_img").src="images/a1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/a2.png"; }, 800);
   }
   function show2()  
   {  
    setTimeout(function(){ document.getElementById("alidade_img").src="images/b2.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/b1.png"; }, 800);
   }
   function show3()  
   {  
    setTimeout(function(){ document.getElementById("alidade_img").src="images/c1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/c2.png"; }, 800);
   }
   function show4()  
   {  
    setTimeout(function(){ document.getElementById("alidade_img").src="images/d1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/d2.png"; }, 800);
   }
   function show5()  
   {  
    setTimeout(function(){ document.getElementById("alidade_img").src="images/e1.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/e2.png"; }, 800);
   }

   //OBJECT FUNCTIONS
function tree()
{
        
        setTimeout(function(){ document.getElementById("alidade_img").src="images/a3.png"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/a4.png"; }, 800);
        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-95px,-60px)scale(1)rotateY(150deg)"; }, 400);
        setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
        setInterval(() => {document.getElementById("lineobj1img").style.display="inline"}, 400);
        /*document.getElementById("drawobjimg").animate([
            // keyframes
            { transform: 'translate(0px,0px)' },
            { transform: 'translate(-95px,-60px)scale(1)rotateY(150deg)' },
            { transform: 'translate(0px,0px)' }
          ], {duration: 1000});  //timing function
          setInterval(() => {document.getElementById("lineobj1img").style.display="inline"}, 600);*/
}
function tower()
{
   
    setTimeout(function(){ document.getElementById("alidade_img").src="images/b3.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/b4.png"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-70px,-90px)scale(3)rotateY(90.5deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj2img").style.display="inline"}, 400);
       /* document.getElementById("drawobjimg").animate([
            // keyframes
            { transform: 'translate(0px,0px)' },
            { transform: 'translate(-67px,-67px)scale(1.5)rotateY(92deg)' },
            { transform: 'translate(0px,0px)' }
          ], {duration: 1000});  //timing function
          setInterval(() => {document.getElementById("lineobj2img").style.display="inline"}, 600);*/
}

function solar()
{
   
    setTimeout(function(){ document.getElementById("alidade_img").src="images/c3.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/c4.png"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-65px,-60px)scale(1)rotateY(85deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj3img").style.display="inline"}, 400);
       /* document.getElementById("drawobjimg").animate([
            // keyframes
            { transform: 'translate(0px,0px)' },
            { transform: 'translate(-65px,-60px)scale(1)rotateY(85deg)' },
            { transform: 'translate(0px,0px)' }
          ], {duration: 1000});  //timing function
          setInterval(() => {document.getElementById("lineobj3img").style.display="inline"}, 600);*/
}

function house()
{
   
    setTimeout(function(){ document.getElementById("alidade_img").src="images/d3.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/d4.png"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-55px,-60px)scale(1.5)rotateY(70deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj4img").style.display="inline"}, 400);
     /*  document.getElementById("drawobjimg").animate([
            // keyframes
            { transform: 'translate(0px,0px)' },
            { transform: 'translate(-60px,-60px)scale(1)rotateY(70deg)' },
            { transform: 'translate(0px,0px)' }
          ], {duration: 1000});  //timing function
          setInterval(() => {document.getElementById("lineobj4img").style.display="inline"}, 600);*/
}
function street()
{
   
    setTimeout(function(){ document.getElementById("alidade_img").src="images/e3.png"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/e4.png"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-45px,-50px)scale(1)rotateY(30deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj5img").style.display="inline"}, 400);
     /*  document.getElementById("drawobjimg").animate([
            // keyframes
            { transform: 'translate(0px,0px)' },
            { transform: 'translate(-45px,-50px)scale(1)rotateY(30deg)' },
            { transform: 'translate(0px,0px)' }
          ], {duration: 1000});  //timing function
          setInterval(() => {document.getElementById("lineobj5img").style.display="inline"}, 600);*/
}
const imgs = Array.from(document.querySelectorAll('.ob'));
        // Add event listener for document:
        document.addEventListener('click', event => {
            // Has one of the images been clicked?
            if (event.target.classList.contains('ob')) {
                // Add class indicating that is has been clicked:
                event.target.classList.add('is-clicked');
                // Check if all images have been clicked:
                if (!imgs.find(item => !item.classList.contains('is-clicked'))) {
                    // Make button visible:
                    alert("hello");
                    document.querySelector('#result').style.display ='inline';
                    
                }
            }
        });
     
       
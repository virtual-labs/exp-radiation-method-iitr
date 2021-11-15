
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
    setTimeout(function(){ document.getElementById("alidade_img").src="images/a1.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/a2.PNG"; }, 800);
   }
   function show2()  
   {  
    setTimeout(function(){ document.getElementById("alidade_img").src="images/b2.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/b1.PNG"; }, 800);
   }
   function show3()  
   {  
    setTimeout(function(){ document.getElementById("alidade_img").src="images/c1.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/c2.PNG"; }, 800);
   }
   function show4()  
   {  
    setTimeout(function(){ document.getElementById("alidade_img").src="images/d1.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/d2.PNG"; }, 800);
   }
   function show5()  
   {  
    setTimeout(function(){ document.getElementById("alidade_img").src="images/e1.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/e2.PNG"; }, 800);
   }

   //OBJECT FUNCTIONS
function tree()
{

        setTimeout(function(){ document.getElementById("alidade_img").src="images/a3.PNG"; }, 400);
        setTimeout(function(){  document.getElementById("alidade_img").src="images/a4.PNG"; }, 800);

        setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-70px,-45px)scale(1)rotateY(150deg)"; }, 400);
        setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
        setInterval(() => {document.getElementById("lineobj1img").style.display="inline"}, 400);
         // add eventlistener for click to window:
 window.addEventListener('click', (event) => {
  // event.target is the element having been clicked
  // was a button .obj clicked?
  if (event.target.classList.contains('obj')) {
      // add class "clicked" to the button:
      event.target.classList.add('clicked');
      // are all buttons clicked now?
      if (!document.querySelector('.obj:not(.clicked)')) {
          // make next button visible:
          document.getElementById("result").style.display = "inline";
          swal("Click on the RESULT Button to proceed further");
          
      }
  }
});
        
}
function tower()
{
   
    setTimeout(function(){ document.getElementById("alidade_img").src="images/b3.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/b4.PNG"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-40px,-65px)scale(2)rotateY(80deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj2img").style.display="inline"}, 400);
    window.addEventListener('click', (event) => {
      // event.target is the element having been clicked
      // was a button .obj clicked?
      if (event.target.classList.contains('obj')) {
          // add class "clicked" to the button:
          event.target.classList.add('clicked');
          // are all buttons clicked now?
          if (!document.querySelector('.obj:not(.clicked)')) {
              // make next button visible:
              document.getElementById("result").style.display = "inline";
              swal("Click on the RESULT Button to proceed further");
              
          }
      }
    });
   
}

function solar()
{
   
    setTimeout(function(){ document.getElementById("alidade_img").src="images/c3.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/c4.PNG"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-25px,-65px)scale(2)rotateY(60deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj3img").style.display="inline"}, 400);
    window.addEventListener('click', (event) => {
      // event.target is the element having been clicked
      // was a button .obj clicked?
      if (event.target.classList.contains('obj')) {
          // add class "clicked" to the button:
          event.target.classList.add('clicked');
          // are all buttons clicked now?
          if (!document.querySelector('.obj:not(.clicked)')) {
              // make next button visible:
              document.getElementById("result").style.display = "inline";
              swal("Click on the RESULT Button to proceed further");
              
          }
      }
    });
      
}

function house()
{
   
    setTimeout(function(){ document.getElementById("alidade_img").src="images/d3.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/d4.PNG"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-20px,-45px)scale(1)rotateY(359deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj4img").style.display="inline"}, 400);
    window.addEventListener('click', (event) => {
      // event.target is the element having been clicked
      // was a button .obj clicked?
      if (event.target.classList.contains('obj')) {
          // add class "clicked" to the button:
          event.target.classList.add('clicked');
          // are all buttons clicked now?
          if (!document.querySelector('.obj:not(.clicked)')) {
              // make next button visible:
              document.getElementById("result").style.display = "inline";
              swal("Click on the RESULT Button to proceed further");
              
          }
      }
    });
   
}
function street()
{
   
    setTimeout(function(){ document.getElementById("alidade_img").src="images/e3.PNG"; }, 400);
    setTimeout(function(){  document.getElementById("alidade_img").src="images/e4.PNG"; }, 800);
    setTimeout(function(){ document.getElementById("drawobjimg").style.transform="translate(-20px,-25px)scale(1)rotateX(-150deg)"; }, 400);
    setTimeout(function(){  document.getElementById("drawobjimg").style.transform="translate(0px,0px)"; }, 800);
    setInterval(() => {document.getElementById("lineobj5img").style.display="inline"}, 400);
    window.addEventListener('click', (event) => {
      // event.target is the element having been clicked
      // was a button .obj clicked?
      if (event.target.classList.contains('obj')) {
          // add class "clicked" to the button:
          event.target.classList.add('clicked');
          // are all buttons clicked now?
          if (!document.querySelector('.obj:not(.clicked)')) {
              // make next button visible:
              document.getElementById("result").style.display = "inline";
              swal("Click on the RESULT Button to proceed further");
              
          }
      }
    });
    
}
function show_ar(){
 
  document.getElementById("downarrow").style.display="inline";

}

function fl_br_based()
{   

    if(document.getElementById("browser_based").style.display === "none" && document.getElementById("flash_based").style.display === "none")
    {   document.getElementById("browser_based").style.display="inline";
        document.getElementById("flash_based").style.display="inline";
        
    }
    else
    {
        document.getElementById("browser_based").style.display="none";
        document.getElementById("flash_based").style.display="none";

    }

}



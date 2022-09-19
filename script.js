//body to fade in//
$(document).ready(function(){
  $('#wrapper').fadeIn(1000);
});

// scrolltotop button
//Get the button:
mybutton = document.getElementById("myBtn");

mybutton.addEventListener("click", function () {
  $('html, body').animate({ scrollTop: 0 }, "slow");
});







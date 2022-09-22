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

document.body.onload = function() {
  alert('Hello Trekkers! Welcome to Nepal Treks');
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
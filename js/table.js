document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".msjk-hamburger");
    var navContainer = document.querySelector(".navcontainer");

    hamburger.addEventListener("click", function() {
      navContainer.classList.toggle("msjk-active");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
var hamburger = document.querySelector(".msjk-hamburger");
var navContainer = document.querySelector(".navcontainer");
var bodyContainer = document.querySelector(".bodycontainer");
var hamburgerCross = document.querySelector(".msjk-hamburger-cross")

hamburger.addEventListener("click", function() {
  navContainer.classList.toggle("msjk-active");
  bodyContainer.classList.toggle("msjk-hidden");
  navContainer.classList.toggle("navcontainer-visible");
});

hamburgerCross.addEventListener("click", function() {
  if (navContainer.classList.contains("navcontainer-visible")) {
      navContainer.classList.remove("navcontainer-visible");
      bodyContainer.classList.remove("msjk-hidden");
  }
});
});

$(document).ready(function(){
    $('.msjk-menu-block-container').click(function() {
        $(this).find('.subclass-msjk').slideToggle();
        
    });
});
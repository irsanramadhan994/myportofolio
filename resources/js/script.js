
$(document).ready(function () {

    console.log('tes')
    
$('.js--section-projects').waypoint(function(direction){

    console.log(direction)

    if (direction == "down") {
        $(".scrollbtn").css('display', 'block');
      } else {
        $(".scrollbtn").css("display","none");
      }  
},{
    offset:"60px"
})



$('.js--section-projects').waypoint(function(direction){

    if (direction == "down") {
        $('.main-nav').addClass('sticky');
        $(".js--projects-fade").addClass("animate__animated animate__fadeIn")

      } else {
          $('.main-nav').removeClass('sticky');


}
},{
    offset:"60px"
}
)


$('.js--section-skills').waypoint(function(direction){

    if (direction == "down") {
        $(".js--skill-fade").addClass("animate__animated animate__fadeIn")
}
},{
    offset:"40px"
}
)


$('.js--section-about').waypoint(function(direction){

    if (direction == "down") {
        $(".potrait").addClass("animate__animated animate__flipInX")
}
},{
    offset:"40px"
}
)




/* Smooth Scroll */

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});




});
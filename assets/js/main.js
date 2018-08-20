$(function() {
  $.scrollify({
    section: ".section"
  });
});

var scrollLink = $(".scroll");
// Smooth scrolling
scrollLink.click(function(e) {
  e.preventDefault();
  $("body,html").animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    1000
  );
});

// Sticky Header

window.onscroll = function() {
  stickyNav();
  balloonFire();
};

const header = document.getElementById("nav");
const arrow = document.getElementById("arrow");
const balloons = document.getElementById("page-2");

const sticky = header.offsetTop;
const balloonOffset = balloons.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    arrow.classList.add("clear");
  } else {
    header.classList.remove("sticky");
    arrow.classList.remove("clear");
  }
}

function balloonFire() {
  if (window.pageYOffset > balloonOffset - window.innerHeight / 2) {
    balloons.classList.add("balloon-animate");
  } else {
    balloons.classList.remove("balloon-animate");
  }
}

$(function() {
  $.scrollify({
    section: ".section",
    overflowScroll: true
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

// Scroll Reveal
ScrollReveal().reveal(".p");

// Sticky Header

window.onscroll = function() {
  stickyNav();
  balloonFire();
  navBackground();
};

var $contentDivs = $(".section");
var stickyOffset = $(".name-and-arrow").offset();

function navBackground() {
  $contentDivs.each(function(k) {
    var _thisOffset = $(this).offset();
    var _actPosition = _thisOffset.top - $(window).scrollTop();
    if (
      _actPosition < stickyOffset.top &&
      _actPosition + $(this).height() > 0
    ) {
      $("#nav")
        .removeClass("light dark")
        .addClass($(this).hasClass("light") ? "light" : "dark");
      return false;
    }
  });
}

const header = document.getElementById("nav");
const arrow = document.getElementById("arrow");
const balloons = document.getElementById("balloons");
const start = document.getElementById("start");
const backgroundSquare = document.getElementById("background-square");
const nameCircles = document.getElementsByClassName("name-circle");
const contactCircle = document.getElementsByClassName("contact-circle")[0];

const stickyOffSet = header.offsetTop;
const balloonOffset = balloons.offsetTop;

function stickyNav() {
  if (window.pageYOffset > stickyOffSet) {
    header.classList.add("sticky");
    arrow.classList.add("clear");
    backgroundSquare.classList.add("sticky-background");
    for (var i = 0; i < nameCircles.length; i++) {
      nameCircles[i].classList.add("animation-2");
    }
    contactCircle.classList.add("animation-2");
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

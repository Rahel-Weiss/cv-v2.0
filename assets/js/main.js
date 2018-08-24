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
const balloons = document.getElementById("section-four");
const start = document.getElementById("start");

const stickyOffSet = header.offsetTop;
const balloonOffset = balloons.offsetTop;

function stickyNav() {
  if (window.pageYOffset > stickyOffSet) {
    header.classList.add("sticky");
    arrow.classList.add("clear");
    start.classList.add("sticky-start");
  } else {
    header.classList.remove("sticky");
    arrow.classList.remove("clear");
    start.classList.remove("sticky-start");
  }
}

function balloonFire() {
  if (window.pageYOffset > balloonOffset - window.innerHeight / 2) {
    balloons.classList.add("balloon-animate");
  } else {
    balloons.classList.remove("balloon-animate");
  }
}

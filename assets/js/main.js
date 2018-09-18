$(function() {
  $.scrollify({
    section: ".section",
    overflowScroll: true
  });
});

// Open Circles onClick

window.onload = function openCircle() {
  const circles = document.getElementsByClassName("circle");
  const crosses = document.getElementsByClassName("close-button");

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.onclick = function() {
      circle.classList.toggle("open-circle");
    };
  }
  // for (let i = 0; i < crosses.length; i++) {
  //   let cross = crosses[i];
  //   cross.onclick = function() {
  //     console.log("clicked");
  //     cross.classList.remove("open-circle");
  //   };
  // }
};

// Scroll Reveal

window.sr = ScrollReveal();
sr.reveal(".history-one__h5", { delay: 100 });
sr.reveal(".history-one__h1", { delay: 700 });
sr.reveal(".history-one__p", { delay: 5000 });

sr.reveal(".history-two__h5", { delay: 1500 });
sr.reveal(".history-two__h1", { delay: 2500 });
sr.reveal(".history-two__p", { delay: 5500 });

sr.reveal(".history-three__h5", { delay: 3000 });
sr.reveal(".history-three__h1", { delay: 4000 });
sr.reveal(".history-three__p", { delay: 6000 });

// Smooth scrolling

var scrollLink = $(".scroll");

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
var stickyOffset = $(".nav-wrapper").offset();

function navBackground() {
  $contentDivs.each(function() {
    var _thisOffset_top = $(this).offset().top - 80;
    var _actPosition = _thisOffset_top - $(window).scrollTop();
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

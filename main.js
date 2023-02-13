//слайдер
$(document).ready(function () {
  $(".cards-slider").slick({
    infinite: false,
    arrows: false,
    // adaptiveHeight: true,
    slidesToShow: 3,

    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          adaptiveHeight: false,
        },
      },
    ],
  });
});

// стрелочка вверх
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//раскрывающийся текст
var a = 1;
function openText(n) {
  let width = document.documentElement.clientWidth;
  var slides = document.querySelectorAll(
    ".section-about__text > p"
  );
  if (a == 1) {
    for (i = 0; i < slides.length; i++) {
      if (i >= 1) {
        slides[i].style.display = "block";
        let op = document.querySelector(".open");
        let cl = document.querySelector(".clouse");
        cl.style.cssText = "display:block";
        op.style.cssText = "display:none";
      }
      if (i == 0) {
        slides[i].style.cssText = "display:block";
      }
    }
    a--;
    console.log(a);
  } else {
    console.log(a);
    for (i = 0; i < slides.length; i++) {
      if (i >= 1) {
        slides[i].style.display = "none";
        let op = document.querySelector(".open");
        let cl = document.querySelector(".clouse");
        cl.style.cssText = "display:none";
        op.style.cssText = "display:block";
      }
    }
    a++;
    console.log(a);
  }
}


//простой слайдер 
var slideIndex = 1;
showSlides1(slideIndex);

function plusSlides1(n) {
  showSlides1((slideIndex += n));
}

function currentSlide1(n) {
  showSlides1((slideIndex = n));
}

function showSlides1(n) {
  let width = document.documentElement.clientWidth;
  if (width < 600) {
    var i;
    var slides =
      document.getElementsByClassName("step-promo__block");
    var dots = document.getElementsByClassName("dot1");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}

// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// for tabs
var tabButtons = document.querySelectorAll(".tablinks");

for (var i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function () {
    var tabName = this.dataset.tab;
    var tabContent = document.getElementById(tabName);
    var allTabContent = document.querySelectorAll(".tabcontent");
    var allTabButtons = document.querySelectorAll(".tablinks");

    for (var j = 0; j < allTabContent.length; j++) {
      allTabContent[j].style.display = "none";
    }

    for (var k = 0; k < allTabButtons.length; k++) {
      allTabButtons[k].classList.remove("active");
    }

    tabContent.style.display = "block";
    this.classList.add("active");
  });
}

document.querySelector(".tablinks").click();



// 2nd slider

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// 3rd slider


var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// 4th slider

var swiper = new Swiper(".mySwiper4", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
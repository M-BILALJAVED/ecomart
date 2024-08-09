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



// for toogle menu button

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const searchContainer = document.getElementById('search-container');


  // Toggle menu visibility when button is clicked
  menuToggle.addEventListener('click', function (e) {
    menu.classList.toggle('active');
    e.stopPropagation(); // Prevent click event from reaching the document  
  searchContainer.style.display = 'none';
  });

  // Close the menu if user clicks outside of it
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
      menu.classList.remove('active');
    }
  });
});


// for serach bar 

document.addEventListener('DOMContentLoaded', function () {
  const searchToggle = document.getElementById('search-toggle');
  const searchContainer = document.getElementById('search-container');
  const searchBar = document.getElementById('search-bar');
  const searchButton = document.getElementById('search-button');

  searchContainer.style.display = 'none';


  // Toggle the search bar visibility
  searchToggle.addEventListener('click', function (e) {
    searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
    searchBar.focus(); // Focus the search bar when it appears
    e.stopPropagation(); // Prevent click event from reaching the document
    menu.classList.remove('active');
  });

  // Close the search bar if user clicks outside of it
  document.addEventListener('click', function (e) {
    if (!searchContainer.contains(e.target) && !searchToggle.contains(e.target)) {
      searchContainer.style.display = 'none';
    }
  });

  // Handle search functionality
  searchButton.addEventListener('click', function () {
    const query = searchBar.value.trim();
    if (query) {
      console.log('Search query:', query); // Replace with actual search functionality
    }
  });

  // Trigger search on Enter key press
  searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchButton.click();
    }
  });
});

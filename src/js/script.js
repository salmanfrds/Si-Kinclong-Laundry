function shownav() {
  const hambutton = document.getElementById("hamburger");
  const navtog = document.getElementById("nav-toggle");
  console.log("test1");
  hambutton.addEventListener("click", function() {
      hambutton.classList.toggle("hamburger-active");
      navtog.classList.toggle("hidden");
      console.log("test2");
  });
};

document.addEventListener("DOMContentLoaded", function() {
    shownav();
});

const cardSlider = document.getElementById('card-slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

const goToNextSlide = () => {
    currentIndex = (currentIndex + 1) % 4;
    cardSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const goToPrevSlide = () => {
    currentIndex = (currentIndex - 1 + 4) % 4;
    cardSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

// Automatically move to the next slide every 10 seconds
setInterval(goToNextSlide, 15000);

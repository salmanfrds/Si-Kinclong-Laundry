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

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 4;
    cardSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + 4) % 4;
    cardSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
});
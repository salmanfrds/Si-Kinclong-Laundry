feather.replace();

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

function checkWidth(){
  const width = window.innerWidth;
  const image = document.getElementById("thirdimage");

  if(width >= 1128 && width < 1280){
    image.classList.add("hidden");
  } else if (width > 1780){
    image.classList.add("hidden");
  } else {
    image.classList.remove("hidden");
  }
};

window.addEventListener("resize", checkWidth);

document.addEventListener("DOMContentLoaded", function() {
    shownav();
    checkWidth();
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

function gallery(){  
  const div = document.getElementById("gallery");
  for (let i = 1; i < 12; i++) {
    const img = document.createElement("img");

    img.src = "src/gallery/" + i + ".jpg";
    img.alt = "Gallery image" + i;

    img.className = "w-44 h-44 md:w-80 md:h-80 object-cover rounded-xl border-8 border-orange-300";

    img.setAttribute("data-aos", "fade-down-right");

    div.appendChild(img)
  }
};

window.onload = function() {
  gallery();
}
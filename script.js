const images = [
  "img 1.jpg",
  "img 2.jpg",
  "img 3.jpg",
  "img 4.jpg"
];

let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");

function showImage(index) {
  carouselImage.src = images[index];
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}

let slideInterval = setInterval(nextImage, 3000);

$(document).ready(function () {
  $(".gallery h2").hide().fadeIn(1500);
});

$(".carousel").hover(
  function () {
    clearInterval(slideInterval);
  },
  function () {
    slideInterval = setInterval(nextImage, 3000);
  }

);

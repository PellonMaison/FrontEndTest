const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  mousewheel: true,
  keyboard: true,
  preloadImages: false,
  lazyLoading: true,
});

const url = "https://picsum.photos/v2/list?page=3&limit=4";
getImages();

function getImages() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((image) => {
        const img = document.createElement("img");
        img.className = "swiper-slide";
        img.src = image.download_url;
        swiper.appendSlide(img);
      });
    });
}

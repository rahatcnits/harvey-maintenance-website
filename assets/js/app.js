// counter
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

// initialize variable
const navOpenBtn = document.querySelector(".nav_open_btn i");
const navCloseBtn = document.querySelector(".nav_close_btn");
const navBox = document.querySelector(".nav_items");

navOpenBtn.addEventListener("click", () => {
  navBox.style.right = "0";
});

navCloseBtn.addEventListener("click", () => {
  navBox.style.right = "-100%";
});

// hero observer
const hero = document.querySelector(".hero");

const heroObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

heroObserver.observe(hero);

// about content observer
const aboutContent = document.querySelector(".about_wrapper");

const aboutContentObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

aboutContentObserver.observe(aboutContent);

// about image observer
const aboutImg = document.querySelector(".about_img_wrapper");

const aboutImgObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

aboutImgObserver.observe(aboutImg);

// gallery observer
const galleryContent = document.querySelector(".gallery_content_wrapper");

const galleryContentObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

galleryContentObserver.observe(galleryContent);

// gallery image observer
const galleryImg = document.querySelector(".gallery_wrapper");

const galleryImgObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

galleryImgObserver.observe(galleryImg);

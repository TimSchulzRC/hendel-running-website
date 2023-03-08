import "bootstrap";
import "../scss/style.scss";

//* Scroll Timeline Animation for Sponsors
import "./scroll-timeline";

const first = document.querySelector(".sponsor-row-1");
const second = document.querySelector(".sponsor-row-2");

const scrollTimeLine = new ScrollTimeline({
  source: document.scrollingElement,
});

const firstAnimation = {
  transform: ["translateX(-10%)", "translateX(10%)"],
};
const secondAnimation = {
  transform: ["translateX(10%)", "translateX(-10%)"],
};

first.animate(firstAnimation, {
  timeline: scrollTimeLine,
});
second.animate(secondAnimation, {
  timeline: scrollTimeLine,
});

// Observer Animation
const animatedImages = document.querySelectorAll(".animate-image");
const animatedText = document.querySelectorAll(".animate-text");

const animatedElements = [...animatedImages, ...animatedText];

animatedElements.forEach((image) => {
  image.classList.add("hidden");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0 }
);

animatedElements.forEach((element) => {
  observer.observe(element);
});

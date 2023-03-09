import "bootstrap";
import "../scss/style.scss";
import "./router";

//* Scroll Timeline Animation for Sponsors
import "./scroll-timeline";

const first = document.querySelectorAll(".sponsor-row-1");
const second = document.querySelectorAll(".sponsor-row-2");

const scrollTimeLine = new ScrollTimeline({
  source: document.scrollingElement,
});

const firstAnimation = {
  transform: ["translateX(-10%)", "translateX(10%)"],
};
const secondAnimation = {
  transform: ["translateX(10%)", "translateX(-10%)"],
};

first.forEach((element) =>
  element.animate(firstAnimation, {
    timeline: scrollTimeLine,
  })
);
second.forEach((element) =>
  element.animate(secondAnimation, {
    timeline: scrollTimeLine,
  })
);

// Observer Animation
const animatedElements = document.querySelectorAll(".animate");

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

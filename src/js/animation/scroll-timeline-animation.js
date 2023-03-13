export default function animateSponsorsOnScroll() {
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
}

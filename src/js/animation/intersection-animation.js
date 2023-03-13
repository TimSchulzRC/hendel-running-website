export default function animateOnIntersection() {
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
}

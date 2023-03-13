//* Scroll Timeline Animation for Sponsors
import "./scroll-timeline";
import animateOnIntersection from "./intersection-animation";
import animateSponsorsOnScroll from "./scroll-timeline-animation";

export default function animate() {
  animateSponsorsOnScroll();
  animateOnIntersection();
}

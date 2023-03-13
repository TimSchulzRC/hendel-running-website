import animate from "./animation/animate";

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocationChange();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/about-us": "/pages/about-us.html",
  "/contact": "/pages/contact.html",
};

const handleLocationChange = async () => {
  const { pathname } = window.location;
  console.log(pathname);
  const route = routes[pathname] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("app").innerHTML = html;
  animate();
};

export default function startRouter() {
  window.onpopstate = handleLocationChange;
  window.route = route;
  handleLocationChange();
}

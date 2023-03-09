const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocationChange();
};

const routes = {
  404: "/pages/404.html",
  "/": "/index.html",
  "/about-us": "/pages/about-us.html",
  "/contact": "/pages/contact.html",
};

const handleLocationChange = async () => {
  const { pathname } = window.location;
  const route = routes[pathname] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  if (route === "/index.html") return; //! Zurück funktioniert nicht
  document.getElementById("app").innerHTML = html;
};

window.onpopstate = handleLocationChange;
window.route = route;

handleLocationChange();

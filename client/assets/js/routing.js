DXAJS.RouteHandler = function (event) {
  event.preventDefault();
  const targetLink = event.target || event.srcElement;
  const urlToRoute = targetLink.getAttribute('href');

  // Load data for URL and process MVC

  console.log('Routing to: ' + urlToRoute);
};

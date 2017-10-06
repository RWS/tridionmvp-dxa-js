DXAJS.RouteHandler  = function(event){
    event.preventDefault();
    var targetLink = event.target || event.srcElement;
    var urlToRoute = targetLink.getAttribute("href");
   
    // Load data for URL and process MVC

    console.log("Routing to: " + urlToRoute);
}
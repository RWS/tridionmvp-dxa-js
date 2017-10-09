DXAJS.Fakerton = {
  init() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/fakedata.json');
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const pageData = JSON.parse(xhr.responseText);
        DXAJS.PageData = pageData;

        DXAJS.Regions.renderRegions(pageData);
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
  },
};


DXAJS.Controllers = {
  init() {
    DXAJS.Fakerton.init();
  },
  mount(htmlNode, view) {
    htmlNode.innerHTML = view;

    document.querySelectorAll('a[href]:not([href=""]').forEach((link) => {
      link.addEventListener('click', DXAJS.RouteHandler, false);
    });
  },
};

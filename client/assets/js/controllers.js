
const demoData = {
    Headline: "Hello World",
    DateCreated: "June 17, 2100",
    Description: `<p>Hello world. I'm a description`,
    Body: [
        {
            Subtitle: "some subtitle",
            Content: "<p>some subtitle's content and stuff</p>",
            Media: "http://placebear.com/500/500",
            Caption: "A place bear"
        },
        {
            Subtitle: "Another Subtitle",
            Content: "<p>Another subittle's really cool content and things and stuff</p><p>And more text</p>",
            Media: "http://placebear.com/g/500/500",
            Caption: "A place bear"
        }
    ]
};
DXAJS.Fakerton = {
  init() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/fakedata.json');
    xhr.send(null);


    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const regionElements = DXAJS.Controllers.getRegions();
        console.log('regionElements',regionElements);
        const pageData = JSON.parse(xhr.responseText);
        const mainRegion = pageData.Regions[1];
        const entities = mainRegion.Entities;

        const entityContent = entities[0].Content;
        let articleRegion;
        console.log(entityContent);
        


          const articlePresentation = DXAJS.Views.Article(entityContent);
          
          DXAJS.Controllers.mount(regionElements[0],articlePresentation);
        } else {
          console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
    };
  },
}


DXAJS.Controllers = {
  init() {
    // const articlePresentation = DXAJS.Views.Article(demoData);
    // console.log(articlePresentation);
    
    // DXAJS.Controllers.mount(document.body, articlePresentation);

    DXAJS.Fakerton.init();

  },
  getRegions() {
    console.log('gettin regions', document.querySelectorAll('[data-region]'))
    return [...document.querySelectorAll('[data-region]')];
  },
  mount(htmlNode, view) {
    htmlNode.innerHTML = view;

    document.querySelectorAll('a[href]:not([href=""]').forEach((link) => {
        link.addEventListener("click", DXAJS.RouteHandler, false);
    });
  },

};

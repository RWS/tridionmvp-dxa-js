
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
    xhr.open('GET', 'send-ajax-data.php');
    xhr.send(null);


    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
          console.log(data);
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

    DXA.Fakerton.init();

  },
  getRegions() {
    return [...document.querySelectorAll('[data-region]')];
  },
  mount(htmlNode, view) {
    htmlNode.innerHTML = view;
  },

};

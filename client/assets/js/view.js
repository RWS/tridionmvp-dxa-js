DXAJS.Partials = {
  Media(data) {
    return `
  <figure class="media"> 
    <img src="${data.Media}" />
    <figcaption>${data.Caption}</figcaption>
  </figure>
          `;
  },
  RichTextData(fragment) {
    return `
  <div class="paragraph">
    <div class="paragraph__content">
        ${fragment}
    </div>
  </div>
    `;
  },
};

DXAJS.Views = {
  Article(data) {
    const articleBodyContent = data.articleBody.content;
    const contentType = articleBodyContent.$type;
    let bodyResult = '';

    data.articleBody.content.Fragments.forEach((fragment)=> {
      bodyResult+= DXAJS.Partials[contentType](fragment);
    });

    console.log(data);

    return `
  <article class="article">
    <h1 class="article__headline"> ${data.headline}</h1>
    <div class="article__body body">${bodyResult}</div>
  </article>
    `;
  },
};

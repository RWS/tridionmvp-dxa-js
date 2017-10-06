DXAJS.Partials = {
  Media(data) {
    return `
  <figure class="media"> 
    <img src="${data.Media}" />
    <figcaption>${data.Caption}</figcaption>
  </figure>
          `;
  },
  Paragraph(data) {
    const media = DXAJS.Partials.Media({ Media : data.Media, Caption: data.Caption });
    return `
  <div class="paragraph">
    <h2 class="paragraph__subtitle">${data.Subtitle}</h2>
    <div class="paragraph__content">
        ${data.Content}
    </div>
  </div>
    ${media}
    `;
  },
};

DXAJS.Views = {
  Article(data) {
    let bodyResult = '';
    console.log(data.Body);
    data.Body.forEach((paragraph) => {
      const parTemplate = DXAJS.Partials.Paragraph(paragraph);
      
      bodyResult += parTemplate;
    });

    return `
  <article class="article">
    <h1 class="article__headline"> ${data.Headline}</h1>
    <time  class="article__datecreated">${data.DateCreated}</time>
    <div class="article__description">${data.Description}</div>
    <div class="article__body body">${bodyResult}</div>
  </article>
    `;
  },
};

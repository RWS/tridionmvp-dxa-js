import {MicroTemplate} from './microtemplate.js'

/** Media Partial for Images*/
export class MediaTemplate extends MicroTemplate {
    /**
     * @param  {semanticModelData} JSON data for template
     */
    constructor(semanticModelData) {
        super();
        this.data = semanticModelData;
    }

    get view () {
        return `
            <figure class="media"> 
                <img src="${this.data.Media}" />
                <figcaption>
                    ${this.data.Caption}
                </figcaption>
            </figure>
        `;
    }
}

export class ParagraphTemplate extends MicroTemplate {
    /**
     * @param  {semanticModelData} JSON data for template
     */
    constructor(semanticModelData) {
        super();
        this.data = semanticModelData;
    }

    get view() {
        const media = ('Media' in this.data) ? new MediaTemplate({Media:this.data.Media, Caption: this.data.Caption}).view : '';        
         return `
        <div class="paragraph">
            <h2 class="paragraph__subtitle">${this.data.Subtitle}</h2>
            <div class="paragraph__content">
                ${this.data.Content}
            </div>
            ${media}
        </div>
        `;
        
    }
}

/** View Template for Article: Id 1866 */
export class ArticleTemplate extends MicroTemplate {
    /**
     * @param  {semanticModelData} JSON data for template
     */
    constructor(semanticModelData) {
        super();
        this.data = semanticModelData;
    }
    
    get view()  {
        let bodyResult = '';


        this.data.Body.forEach((paragraph)=>{
            let parTemplate = new ParagraphTemplate(paragraph);
            bodyResult+=parTemplate.view;
        });

        return `
            <article class="article">
                <h1 class="article__headline"> ${this.data.Headline}</h1>
                <time  class="article__datecreated">${this.data.DateCreated}</time>
                <div class="article__description">
                    ${this.data.Description}
                </div>
                <div class=
                "article__body body">
                    ${bodyResult}
                </div>
            </article>
        `;

    }


};

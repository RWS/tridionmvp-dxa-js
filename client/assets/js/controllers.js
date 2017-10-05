import {MediaTemplate, ParagraphTemplate, ArticleTemplate} from "./views.js"


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



const templDemo = new ArticleTemplate(demoData);

templDemo.mount(document.body);



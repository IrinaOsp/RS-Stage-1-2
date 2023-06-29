import levels from '../../data/levels';

const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

export default class HTMLViewer {
    public view: HTMLDivElement | null;

    constructor() {
        this.view = document.querySelector('.HTML-code');
    }

    drawView(level: number) {
        if (this.view) {
            const highlightedCode = hljs.highlight(
                `
            <div class="grass">
            ${levels[`level_${level}`].innerHTML}
            </div>
            `,
                {
                    language: 'xml',
                }
            ).value;
            this.view.innerHTML = highlightedCode;
        }
    }
}

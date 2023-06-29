import levels from '../../data/levels';
import eventEmitter from '../../controller/eventEmitter/eventEmitter';

const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

export default class HTMLViewer {
    public view: HTMLDivElement | null;

    public lines: HTMLUListElement | null;

    constructor() {
        this.view = document.querySelector('.HTML-code');
        this.lines = document.querySelector('.code-lines-HTML');
    }

    drawView(level: number) {
        if (this.view) {
            const str = `<div class="grass"> ${levels[`level_${level}`].innerHTML} </div>`;
            const highlightedCode = hljs.highlight(str, { language: 'xml' }).value;
            this.view.innerHTML = highlightedCode;
            let linesNumber = str.split('>').length;
            if (this.lines?.hasChildNodes()) {
                while (this.lines.firstChild) {
                    this.lines.removeChild(this.lines.firstChild);
                }
            }
            if (linesNumber <= 16) linesNumber = 16;
            for (let i = 1; i < linesNumber; i += 1) {
                const line = document.createElement('li');
                line.textContent = i.toString();
                this.lines?.appendChild(line);
            }
        }
    }
}

const htmlPanel = new HTMLViewer();
eventEmitter.on('levelChange', (newLevel) => htmlPanel.drawView(newLevel as number));

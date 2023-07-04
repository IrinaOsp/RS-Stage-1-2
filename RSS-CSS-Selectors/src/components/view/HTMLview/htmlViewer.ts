import levels from '../../data/levels';
import eventEmitter from '../../controller/eventEmitter/eventEmitter';

const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

export default class HTMLViewer {
    private view: HTMLDivElement | null;

    private lines: HTMLUListElement | null;

    constructor() {
        this.view = document.querySelector('.HTML-code');
        this.lines = document.querySelector('.code-lines-HTML');
    }

    public drawView(level: number) {
        if (this.view) {
            const str = `${levels[`level_${level}`].innerHTML}`;
            const highlightedCode = hljs.highlight(str, { language: 'xml' }).value;
            this.view.innerHTML = `&lt;div class="grass"> ${highlightedCode} &lt;/div>`;
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
            this.formatView();
            this.highlightCode();
        }
    }

    private formatView() {
        const tags: NodeListOf<Element> = document.querySelectorAll('.hljs-tag');
        tags.forEach((el: Element, ind: number) => {
            el.setAttribute('style', 'padding-left: 1rem;');
            if (!el.textContent?.includes('/') || el.textContent?.includes('</')) {
                el.classList.add('parent');
            } else if (
                ind > 0 &&
                ((tags[ind - 1].classList.contains('parent') && !tags[ind - 1].textContent?.includes('</')) ||
                    tags[ind - 1].classList.contains('child'))
            ) {
                el.classList.add('child');
            }
        });
    }

    public highlightCode() {
        const elements: NodeListOf<Element> = document.querySelectorAll('.grass *');
        const codeLines = this.view?.querySelectorAll('.hljs-tag');
        if (elements && codeLines) {
            elements.forEach((el, ind) => {
                el.addEventListener('mouseover', (event) => {
                    console.log('mouseover');
                    event.stopPropagation();
                    if (codeLines.length === elements.length) {
                        elements[ind].classList.add('hover');
                        codeLines[ind].classList.add('highlighted-code');
                    } else {
                        elements[ind].classList.add('hover');
                        let parents: number = 0;
                        codeLines.forEach((el) => el.classList.contains('parent') ? parents += 1 : parents);
                        // console.log(parents / 2);
                        if (codeLines[ind].classList.contains('parent')) {
                            console.log('first');
                            codeLines[ind].classList.add('highlighted-code');
                            ind < elements.length - 2 ? codeLines[ind + 2].closest('.parent')?.classList.add('highlighted-code') : '';
                        } else if (ind > 0 && codeLines[ind - 1].classList.contains('parent') && codeLines[ind - 1].textContent?.includes('</')) {
                            // console.log('second');
                            codeLines[ind + 1].classList.add('highlighted-code');
                        } else {
                            // console.log('3d');
                            codeLines[ind].classList.add('highlighted-code');
                        }
                    }
                });
                el.addEventListener('mouseout', (event) => {
                    event.stopPropagation();
                    codeLines.forEach((el) => el.classList.remove('highlighted-code'));
                    elements.forEach((el) => el.classList.remove('hover'));
                });
            });
            codeLines.forEach((line, ind) => {
                if (ind > 1 && ind < codeLines.length - 1) {
                    line.addEventListener('mouseover', (event) => {
                        event.stopPropagation();
                        codeLines[ind + 1].classList.add('highlighted-code');
                        elements[ind].classList.add('hover');
                    });
                    line.addEventListener('mouseout', (event) => {
                        event.stopPropagation();
                        codeLines[ind + 1].classList.remove('highlighted-code');
                        elements[ind].classList.remove('hover');
                    });
                }
            });
        }
    }
}

const htmlPanel = new HTMLViewer();
eventEmitter.on('levelChange', (newLevel) => htmlPanel.drawView(Number(newLevel)));

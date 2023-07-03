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
            this.formatView();
        }
    }

    public formatView() {
        const tags: NodeListOf<Element> = document.querySelectorAll('.hljs-tag');
        tags.forEach((el: Element, ind: number) => {
            el.setAttribute('style', 'padding-left: 1rem;');
            if (ind === 0 || ind === tags.length - 1) el.removeAttribute('style');
        });
    }
}

const htmlPanel = new HTMLViewer();
eventEmitter.on('levelChange', (newLevel) => htmlPanel.drawView(Number(newLevel)));

(function burger() {
    const burgerItem: Element | null = document.querySelector('.header-burger');
    const aside: Element | null = document.querySelector('.aside');
    const wrapper: Element | null = document.querySelector('.wrapper');
    const closeItem: Element | null = document.querySelector('.aside-close');
    const asideLevels: NodeListOf<Element> = document.querySelectorAll('.game-lvl');
    if (burgerItem && aside && wrapper && closeItem && asideLevels) {
        burgerItem.addEventListener('click', () => {
            console.log('burger-menu');
            aside.classList.add('aside-active');
        });
        closeItem.addEventListener('click', () => {
            aside.classList.remove('aside-active');
        });
        wrapper.addEventListener('click', () => {
            aside.classList.remove('aside-active');
        });
        if (window.innerWidth <= 870) {
            for (let i = 0; i < asideLevels.length; i += 1) {
                asideLevels[i].addEventListener('click', () => {
                    aside.classList.remove('aside-active');
                });
            }
        }
    }
})();

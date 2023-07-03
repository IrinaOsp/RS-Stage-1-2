import eventEmitter from '../../controller/eventEmitter/eventEmitter';

const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));

export default class CSSEditor {
    public input: HTMLTextAreaElement | null;

    public divForText: Element | null;

    constructor() {
        this.input = document.querySelector('.code-input');

        this.divForText = document.querySelector('.divForText');
    }

    public highlightInput() {
        if (this.input) {
            this.input.addEventListener('input', () => {
                const text = this.input?.value;
                const highlightedCode = hljs.highlight(text, { language: 'css' }).value;
                const codeWrapper: Element | null = document.querySelector('.code-wrapper');
                const divForText: Element | null = document.querySelector('.divForText');
                if (codeWrapper && divForText && !divForText.classList.contains('visible')) {
                    divForText.classList.add('visible');
                }
                if (divForText) divForText.innerHTML = highlightedCode;
            });
        }
    }
}

const cssPanel = new CSSEditor();
eventEmitter.on('levelChange', () => {
    cssPanel.divForText?.classList.remove('visible');
    if (cssPanel.input) cssPanel.input.textContent = '';
});

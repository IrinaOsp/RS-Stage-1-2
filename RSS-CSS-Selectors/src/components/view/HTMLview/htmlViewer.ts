import levels from '../../data/levels';
import eventEmitter from '../../controller/eventEmitter/eventEmitter';

const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

function findKeyWithLetter(map: Map<number | string, number>, letter: string) {
    const iterator = map.keys();
    for (let i = 1; i <= map.size; i += 1) {
        const keyInMap = iterator.next().value;
        if (typeof keyInMap === 'string' && keyInMap.includes(letter)) {
            return keyInMap;
        }
    }
    return null;
}

function replaceKey(map: Map<number | string, number>, oldKey: string, newKey: number) {
    if (map.has(oldKey)) {
        const value: number | undefined = map.get(oldKey);
        if (value || value === 0) {
            map.delete(oldKey);
            map.set(newKey, value);
        }
    }
}

function findKeysByValue(map: Map<number | string, number>, value: number) {
    const keys = [];
    const iterator = map.entries();
    for (let i = 1; i <= map.size; i += 1) {
        const entry = iterator.next().value;
        if (entry[1] === value) {
            keys.push(entry[0]);
        }
    }
    return keys;
}

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
            if (level === 10) {
                const namesArr: NodeListOf<Element> = document.querySelectorAll('.hljs-tag:has(> span.hljs-string)');
                namesArr.forEach((name, ind) => {
                    const nameTag = name;
                    const nameData = levels.level_10.htmlCode[ind].innerElement;
                    if (nameData && nameData[0] && nameData[0].innerText) {
                        const text = document.createElement('span');
                        text.innerText = nameData[0].innerText;
                        nameTag.appendChild(text);
                    }
                });
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
            const indexMap: Map<number | string, number> = new Map();
            let elementInd = 0;
            let parents = 0;
            codeLines.forEach((line, index) => {
                if (line.classList.contains('parent')) {
                    if (parents > 0) {
                        if (parents % 2 !== 0) {
                            const key = findKeyWithLetter(indexMap, 'p');
                            let ind: number | undefined;
                            if (key) {
                                ind = indexMap.get(key);
                                if (ind) indexMap.set(index, ind);
                                replaceKey(indexMap, key, Number(key.slice(0, -1)));
                            }
                        } else {
                            indexMap.set(`${index}p`, elementInd);
                            elementInd += 1;
                        }
                    } else {
                        indexMap.set(`${index}p`, elementInd);
                        elementInd += 1;
                    }
                    parents += 1;
                } else {
                    indexMap.set(index, elementInd);
                    elementInd += 1;
                }
            });
            elements.forEach((el, ind) => {
                el.addEventListener('mouseover', (event) => {
                    event.stopPropagation();
                    if (codeLines.length === elements.length) {
                        elements[ind].classList.add('hover');
                        codeLines[ind].classList.add('highlighted-code');
                    } else {
                        elements[ind].classList.add('hover');
                        const keysArr: (string | number)[] = findKeysByValue(indexMap, ind);
                        keysArr.forEach((key) => {
                            if (typeof key === 'number') {
                                codeLines[Number(key)].classList.add('highlighted-code');
                            }
                        });
                    }
                });
                el.addEventListener('mouseout', (event) => {
                    event.stopPropagation();
                    codeLines.forEach((elem) => elem.classList.remove('highlighted-code'));
                    elements.forEach((elem) => elem.classList.remove('hover'));
                });
            });
            codeLines.forEach((line, ind) => {
                line.addEventListener('mouseover', (event) => {
                    event.stopPropagation();
                    if (codeLines.length === elements.length) {
                        elements[ind].classList.add('hover');
                        codeLines[ind].classList.add('highlighted-code');
                    } else {
                        const value = indexMap.get(ind);
                        if (value || value === 0) {
                            elements[value].classList.add('hover');
                            const keysArr: (string | number)[] = findKeysByValue(indexMap, value);
                            keysArr.forEach((key) => {
                                if (typeof key === 'number') {
                                    codeLines[Number(key)].classList.add('highlighted-code');
                                }
                            });
                        }
                    }
                });
                line.addEventListener('mouseout', (event) => {
                    event.stopPropagation();
                    codeLines.forEach((elem) => elem.classList.remove('highlighted-code'));
                    elements.forEach((elem) => elem.classList.remove('hover'));
                });
            });
        }
    }
}

const htmlPanel = new HTMLViewer();
eventEmitter.on('levelChange', (newLevel) => htmlPanel.drawView(Number(newLevel)));

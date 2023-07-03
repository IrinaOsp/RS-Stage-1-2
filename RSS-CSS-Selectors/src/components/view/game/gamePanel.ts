import { htmlCodeType, multiArr } from '../../../types/types';
import levels from '../../data/levels';
import eventEmitter from '../../controller/eventEmitter/eventEmitter';

class GamePanelDrawer {
    public gameField: HTMLDivElement | null = document.querySelector('.grass');

    public draw(level = 1): void {
        // clear game field from elements
        const input: HTMLTextAreaElement | null = document.querySelector('.code-input');
        if (input) input.value = '';
        if (this.gameField && this.gameField.hasChildNodes()) {
            while (this.gameField.firstChild) {
                this.gameField.removeChild(this.gameField.firstChild);
            }
        }
        const levelData = levels[`level_${level}`];
        const gameTaskHeading: HTMLHeadingElement | null = document.querySelector('.game-task');
        if (gameTaskHeading !== null) gameTaskHeading.textContent = levelData.task;

        if (this.gameField) {
            this.appendTags(levelData.htmlCode);
            this.setActiveItems(levelData.selector);
            this.gameField.addEventListener('mouseover', (event) => {
                if (event.target !== this.gameField) {
                    event.stopImmediatePropagation();
                }
            });
        }
    }

    private appendTags(arr: multiArr[], nodeEl: HTMLElement | null = this.gameField): void {
        arr.forEach((el) => {
            if (nodeEl) {
                if (el.innerElement) {
                    const elementToAppend: HTMLElement = this.setAttributes(el);
                    nodeEl.appendChild(elementToAppend);
                } else {
                    const elementToAppend: HTMLElement = this.setAttributes(el);
                    nodeEl.appendChild(elementToAppend);
                }
            }
        });
    }

    private setAttributes(obj: htmlCodeType): HTMLElement {
        const newElement: HTMLElement = document.createElement(obj.tag);
        Object.keys(obj).forEach((key, ind: number): void => {
            if (ind > 0) {
                switch (key) {
                    case 'class':
                        newElement.classList.add(obj.class ? obj.class : '');
                        break;
                    case 'lang':
                        newElement.setAttribute(key, obj.lang ? obj.lang : '');
                        break;
                    case 'innerText':
                        newElement.innerText = obj.innerText ? obj.innerText : '';
                        break;
                    case 'tooltipText':
                        newElement.dataset.before = obj.tooltipText ? obj.tooltipText : '';
                        break;
                    case 'innerElement':
                        if (obj.innerElement)
                            obj.innerElement.forEach((tag) => {
                                newElement.appendChild(this.setAttributes(tag));
                            });
                        break;
                    default:
                        console.error('error in setAttributes');
                }
            }
        });
        return newElement;
    }

    private setActiveItems(selector: string) {
        document.querySelectorAll(selector)?.forEach((el) => el.classList.add('animated'));
    }
}

const gameDrawer = new GamePanelDrawer();
eventEmitter.on('levelChange', (newLevel: string) => gameDrawer.draw(Number(newLevel)));

export default GamePanelDrawer;

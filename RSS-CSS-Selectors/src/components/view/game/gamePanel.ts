import { htmlCodeType, multiArr } from '../../../types/types';
import levels from '../../data/levels';
import eventEmitter from '../../controller/eventEmitter/eventEmitter';

class GamePanelDrawer {
    public gameField: HTMLDivElement | null = document.querySelector('.grass');

    public draw(level = 1): void {
        // clear game field from elements
        const input: HTMLInputElement | null = document.querySelector('.code-input');
        if (input) input.value = '';
        if (this.gameField && this.gameField.hasChildNodes()) {
            while (this.gameField.firstChild) {
                this.gameField.removeChild(this.gameField.firstChild);
            }
        }
        const levelData = levels[`level_${level}`];
        console.log(`level_${level}`);
        console.log(levels[`level_${level}`]['htmlCode']);
        const gameTaskHeading: HTMLHeadingElement | null = document.querySelector('.game-task');
        if (gameTaskHeading !== null) gameTaskHeading.textContent = levelData['task'];

        if (this.gameField) {
          console.log(levelData['htmlCode']);
          this.appendTags(levelData['htmlCode']);
          this.setActiveItems(levelData['selector']);
          this.gameField.addEventListener('mouseover', (event) => {
            if (event.target !== this.gameField) {
                console.log(event.target);
                event.stopPropagation();
            }
          });
        }
    }

    private appendTags(arr: multiArr[], nodeEl: HTMLElement | null = this.gameField): void {
        console.log(arr);
        arr.forEach((el) => {
          if (nodeEl) {
            console.log(el);
            if (el['innerElement']) {
            //   console.log(el[0]);
              const elementToAppend: HTMLElement = this.setAttributes(el);
              nodeEl.appendChild(elementToAppend);
            //   el.shift();
            //   this.appendTags(el, elementToAppend);
            } else {
              const elementToAppend: HTMLElement = this.setAttributes(el);
              nodeEl.appendChild(elementToAppend);
            }
          }
        });
    }

    private setAttributes(obj: htmlCodeType): HTMLElement {
      console.log(obj);
      let newElement: HTMLElement = document.createElement(obj['tag']);
      Object.keys(obj).forEach((key, ind: number): void => {
        if (ind > 0) {
          console.log(key);
          switch(key) {
            case 'class':
              newElement.classList.add(obj['class']? obj['class'] : '');
              break;
            case 'lang':
              newElement.setAttribute(key, obj['lang']? obj['lang'] : '');
              break;
            case 'innerText':
              newElement.innerText = obj['innerText']? obj['innerText'] : '';
              break;
            case 'innerElement':
              if (obj['innerElement']) obj['innerElement'].forEach((tag) => {
                newElement.appendChild(this.setAttributes(tag));
              });
              break;
            default:
              console.log('error in setAttributes');
          }
        }
      })
      return newElement;
    }

    private setActiveItems (selector: string) {
      document.querySelectorAll(selector)?.forEach(el => el.classList.add('animated'));
    }
}

const gameDrawer = new GamePanelDrawer();
eventEmitter.on("levelChange", (newLevel) => gameDrawer.draw(newLevel as number));

export default GamePanelDrawer;

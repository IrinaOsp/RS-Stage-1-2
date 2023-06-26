import { htmlCodeType, multiArr } from '../../../types/types';
import levels from '../../data/levels';
import DetectGameLvl from '../../controller/gameLvlDetector';

class GamePanelDrawer {
    public level: DetectGameLvl;

    public gameField: HTMLDivElement | null = document.querySelector('.grass');

    constructor() {
        this.level = new DetectGameLvl();
    }

    public draw(): void {
        // clear game field from elements
        if (this.gameField && this.gameField.hasChildNodes()) {
            while (this.gameField.firstChild) {
                this.gameField.removeChild(this.gameField.firstChild);
            }
        }
        const levelData = levels[`level_${this.level.getDataFromLS()}`];
        console.log(`level_${this.level.getDataFromLS()}`);
        console.log(levelData);
        const gameTaskHeading: HTMLHeadingElement | null = document.querySelector('.game-task');
        if (gameTaskHeading !== null) gameTaskHeading.textContent = levelData['task'];

        if (this.gameField) {
          console.log(levelData['htmlCode']);
          this.appendTags(levelData['htmlCode']);
          this.setActiveItems(levelData['selector']);
        }
    }

    private appendTags(arr: multiArr[], nodeEl: HTMLElement | null = this.gameField): void {
        console.log(arr);
        arr.forEach((el) => {
          if (nodeEl) {
            console.log(el);
            console.log(Array.isArray(el));
            if (Array.isArray(el)) {
              console.log(el[0]);
              const elementToAppend: HTMLElement = this.setAttributes(el[0]);
              nodeEl.appendChild(elementToAppend);
              el.shift();
              this.appendTags(el, elementToAppend);
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
              newElement.classList.add(Object.values(obj)[ind]);
              break;
            case 'lang':
              newElement.setAttribute(key, Object.values(obj)[ind]);
              break;
            case 'innerText':
              newElement.innerText = Object.values(obj)[ind];
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



export default GamePanelDrawer;

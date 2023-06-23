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
        const levelData = levels[`level_${this.level.getDataFromLS()}`];
        console.log(levelData);
        const gameTaskHeading: HTMLHeadingElement | null = document.querySelector('.game-task');
        if (gameTaskHeading !== null) gameTaskHeading.textContent = levelData['task'];

        if (this.gameField) {
          this.appendTags(levelData['htmlCode']);
          this.setActiveItems(levelData['selector']);
        }
    }

    private appendTags(arr: multiArr[], nodeEl: HTMLElement | null = this.gameField): void {

        arr.forEach((el) => {
          if (nodeEl) {
            if (Array.isArray(el)) {
              const elementToAppend: HTMLElement = this.setAttributes(el[0]);
              // newElement = document.createElement(el[0]['tag']);
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
      let newElement: HTMLElement = document.createElement(obj['tag']);
      Object.keys(obj).forEach((key, ind: number): void => {
        if (ind > 0) {
          switch(key) {
            case 'class':
              newElement.classList.add(Object.values(obj)[ind]);
            case 'lang':
              newElement.setAttribute(key, Object.values(obj)[ind]);
            case 'innerText':
              newElement.innerText = Object.values(obj)[ind];
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

import DetectGameLvl from '../../../controller/gameLvlDetector';
import GamePanelDrawer from '../gamePanel';

export default class LevelPanel {
    public levelInLS: DetectGameLvl;

    public currentLvl: string;

    constructor() {
        this.levelInLS = new DetectGameLvl();
        this.currentLvl = '';
    }

    public highlightCurrentLvl(lvl: string = this.levelInLS.getDataFromLS()): void {
        const Levels = document.querySelectorAll('.game-lvl');
        document.querySelector('.current-lvl')?.classList.remove('current-lvl');
        Levels[Number(lvl) - 1].classList.add('current-lvl');
        const drawGame = new GamePanelDrawer();
        drawGame.draw();
    }

    public changeLvlafterClick() {
        const lvlsContainer: HTMLUListElement | null = document.querySelector('.aside-levels-list');
        if (lvlsContainer) {
            lvlsContainer.addEventListener('click', (event) => {
                const clickedLvl: EventTarget | null = event.target;
                if (clickedLvl instanceof HTMLElement && clickedLvl.textContent) {
                    localStorage.setItem('current_level', clickedLvl.textContent);
                    this.currentLvl = clickedLvl.textContent;
                    console.log(clickedLvl.textContent);
                    this.highlightCurrentLvl(clickedLvl.textContent);
                }
          });
        }
    }

    // public checkCompletedLvls(): void {

    // }
}

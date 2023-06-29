import DetectGameLvl from '../../../controller/gameLvlDetector';
// import GamePanelDrawer from '../gamePanel';
import eventEmitter from '../../../controller/eventEmitter/eventEmitter';

export default class LevelPanel {
    public levelInLS: DetectGameLvl;

    public currentLvl: number;

    constructor() {
        this.levelInLS = new DetectGameLvl();
        this.currentLvl = 1;
    }

    // было public highlightCurrentLvl(level: string = this.levelInLS.getDataFromLS()): void {
    public highlightCurrentLvl(level = 1): void {
        console.log('highlightCurrentLvl');
        const Levels = document.querySelectorAll('.game-lvl');
        document.querySelector('.current-lvl')?.classList.remove('current-lvl');
        Levels[Number(level) - 1].classList.add('current-lvl');
        // const drawGame = new GamePanelDrawer();
        // drawGame.draw(level);
    }

    public changeLvlafterClick() {
        const lvlsContainer: HTMLUListElement | null = document.querySelector('.aside-levels-list');
        if (lvlsContainer) {
            lvlsContainer.addEventListener('click', (event) => {
                const clickedLvl: EventTarget | null = event.target;
                if (clickedLvl instanceof HTMLElement && clickedLvl.textContent) {
                    localStorage.setItem('current_level', clickedLvl.textContent);
                    eventEmitter.emit('levelChange', Number(clickedLvl.textContent));
                    // this.currentLvl = clickedLvl.textContent;
                    // console.log(clickedLvl.textContent);
                    // this.highlightCurrentLvl(clickedLvl.textContent);
                }
            });
        }
    }

    public checkCompletedLvls(): void {
        const completedLvlsStr: string | null = localStorage.getItem('completed_levels');
        if (completedLvlsStr) {
            JSON.parse(completedLvlsStr).forEach((el: string) => {
                const lvlElement: Element = document.querySelectorAll('.game-lvl')[Number(el) - 1];
                lvlElement.classList.add('completed');
            });
        }
    }
}

const levelPanel = new LevelPanel();
eventEmitter.on('levelChange', (newLevel) => levelPanel.highlightCurrentLvl(newLevel as number));

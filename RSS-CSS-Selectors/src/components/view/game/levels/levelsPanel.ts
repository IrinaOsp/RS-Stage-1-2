import DetectGameLvl from '../../../controller/gameLvlDetector';
import eventEmitter from '../../../controller/eventEmitter/eventEmitter';

export default class LevelPanel {
    public levelInLS: DetectGameLvl;

    public currentLvl: number;

    constructor() {
        this.levelInLS = new DetectGameLvl();
        this.currentLvl = 1;
    }

    public highlightCurrentLvl(level = 1): void {
        const Levels = document.querySelectorAll('.game-lvl');
        document.querySelector('.current-lvl')?.classList.remove('current-lvl');
        Levels[Number(level) - 1].classList.add('current-lvl');
    }

    public changeLvlafterClick() {
        const lvlsContainer: HTMLUListElement | null = document.querySelector('.aside-levels-list');
        if (lvlsContainer) {
            lvlsContainer.addEventListener('click', (event) => {
                const clickedLvl: EventTarget | null = event.target;
                if (clickedLvl instanceof HTMLElement && clickedLvl.textContent) {
                    localStorage.setItem('current_level', clickedLvl.textContent);
                    eventEmitter.emit('levelChange', clickedLvl.textContent);
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
eventEmitter.on('levelChange', (newLevel: string) => levelPanel.highlightCurrentLvl(Number(newLevel)));

(function burger() {
    const burgerItem: Element | null = document.querySelector('.header-burger');
    const aside: Element | null = document.querySelector('.aside');
    const wrapper: Element | null = document.querySelector('.wrapper');
    const closeItem: Element | null = document.querySelector('.aside-close');
    const asideLevels: NodeListOf<Element> = document.querySelectorAll('.game-lvl');
    if (burgerItem && aside && wrapper && closeItem && asideLevels) {
        burgerItem.addEventListener('click', () => {
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

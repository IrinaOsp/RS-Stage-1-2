import DetectGameLvl from './gameLvlDetector';
import LevelPanel from '../view/game/levels/levelsPanel';

export default class LevelController {
    public level: string;

    public completedLvls: string[] = [];

    constructor() {
        this.level = new DetectGameLvl().getDataFromLS();
        if (localStorage.getItem('completed_levels')) {
            this.completedLvls = JSON.parse(localStorage.getItem('completed_levels') as string);
        } else {
            this.completedLvls = [];
        }
    }

    public changeLvlafterWin() {
        if (Number(this.level) >= 10) return;
        const currentLevel = Number(this.level) + 1;
        this.completedLvls.push(this.level);
        localStorage.setItem('completed_levels', JSON.stringify(this.completedLvls));
        localStorage.setItem('current_level', currentLevel.toString());
        const lvlPanel = new LevelPanel();
        lvlPanel.highlightCurrentLvl();
        lvlPanel.checkCompletedLvls();
    }
}

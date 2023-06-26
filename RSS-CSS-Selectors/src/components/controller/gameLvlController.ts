import DetectGameLvl from './gameLvlDetector';
import LevelPanel from '../view/game/levels/levelsPanel';

export default class LevelController {
    public level: DetectGameLvl;

    constructor() {
        this.level = new DetectGameLvl();
    }

    public changeLvlafterWin() {
        if (Number(this.level.getDataFromLS()) >= 10) return;
        const currentLevel = Number(this.level.getDataFromLS()) + 1;
        localStorage.setItem('current_level', currentLevel.toString());
        const lvlPanel = new LevelPanel();
        lvlPanel.highlightCurrentLvl();
    }
}

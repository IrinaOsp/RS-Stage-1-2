import DetectGameLvl from './gameLvlDetector';
import eventEmitter from './eventEmitter/eventEmitter';
import LevelPanel from '../view/game/levels/levelsPanel';
import WinMessage from '../view/game/winMessage';

export default class LevelController {
    public level: string;

    public completedLvls: string[] = [];

    constructor() {
        this.level = '1';
    }

    public changeLvlafterWin() {
        this.level = new DetectGameLvl().getDataFromLS();
        if (Number(this.level) >= 10) {
            const winMessage = new WinMessage();
            winMessage.drawWinMesssage();
            return;
        }
        const currentLevel = Number(this.level) + 1;
        eventEmitter.emit('levelChange', currentLevel.toString());
        if (localStorage.getItem('completed_levels')) {
            this.completedLvls = JSON.parse(localStorage.getItem('completed_levels') as string);
        } else {
            this.completedLvls = [];
        }
        if (this.completedLvls.indexOf(this.level) === -1) this.completedLvls.push(this.level);
        localStorage.setItem('completed_levels', JSON.stringify(this.completedLvls));
        localStorage.setItem('current_level', currentLevel.toString());
        const levelPanel = new LevelPanel();
        levelPanel.checkCompletedLvls();
    }
}

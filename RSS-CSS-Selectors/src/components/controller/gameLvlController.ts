import DetectGameLvl from './gameLvlDetector';
import eventEmitter from './eventEmitter/eventEmitter';
import LevelPanel from '../view/game/levels/levelsPanel';

export default class LevelController {
    public level: string;

    public completedLvls: string[] = [];

    constructor() {
        this.level = '1';
    }

    public changeLvlafterWin() {
        console.log('changeLvlafterWin');
        this.level = new DetectGameLvl().getDataFromLS();
        console.log(this.level);
        if (Number(this.level) >= 10) return;
        const currentLevel = Number(this.level) + 1;
        console.log(currentLevel);

        eventEmitter.emit('levelChange', currentLevel.toString());
        if (localStorage.getItem('completed_levels')) {
            this.completedLvls = JSON.parse(localStorage.getItem('completed_levels') as string);
            console.log(this.completedLvls);
        } else {
            console.log('1');
            this.completedLvls = [];
        }
        if (this.completedLvls.indexOf(this.level) === -1) this.completedLvls.push(this.level);
        console.log(this.completedLvls);
        localStorage.setItem('completed_levels', JSON.stringify(this.completedLvls));
        localStorage.setItem('current_level', currentLevel.toString());
        const levelPanel = new LevelPanel();
        levelPanel.checkCompletedLvls();
        console.log(currentLevel);
    }
}

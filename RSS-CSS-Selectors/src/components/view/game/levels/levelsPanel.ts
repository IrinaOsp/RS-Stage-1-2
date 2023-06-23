import DetectGameLvl from '../../../controller/gameLvlDetector';

export default class LevelPanel {
    public level: DetectGameLvl;

    constructor() {
        this.level = new DetectGameLvl();
    }

    public highlightCurrentLvl(): void {
        const Levels = document.querySelectorAll('.game-lvl');
        Levels[Number(this.level.getDataFromLS()) - 1].classList.add('current-lvl');
    }

    // public checkCompletedLvls(): void {

    // }
}

// import levels from '../../data/levels';
import DetectGameLvl from './detectGameLvl';

class DrawGame {
    public level: DetectGameLvl;

    constructor() {
        this.level = new DetectGameLvl();
    }

    public draw(): void {
        this.level.getDataFromLS();
        console.log('draw');
        console.log(this.level.getDataFromLS());
    }
}

export default DrawGame;

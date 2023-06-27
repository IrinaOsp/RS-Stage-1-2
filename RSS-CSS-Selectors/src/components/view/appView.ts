import GamePanelDrawer from './game/gamePanel';
import LevelPanel from './game/levels/levelsPanel';

export class AppView {
    private game: GamePanelDrawer;

    private levelPanel: LevelPanel;

    constructor() {
        this.game = new GamePanelDrawer();
        this.levelPanel = new LevelPanel();
    }

    public drawPage(): void {
        this.game.draw();
        this.levelPanel.highlightCurrentLvl();
        this.levelPanel.changeLvlafterClick();
        this.levelPanel.checkCompletedLvls();
    }
}

export default AppView;

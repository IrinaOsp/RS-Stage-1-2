import GamePanelDrawer from './game/gamePanel';
import LevelPanel from './game/levels/levelsPanel';
import HTMLViewer from './HTMLview/htmlViewer';

export class AppView {
    private game: GamePanelDrawer;

    private levelPanel: LevelPanel;

    private htmlPanel: HTMLViewer;

    constructor() {
        this.game = new GamePanelDrawer();
        this.levelPanel = new LevelPanel();
        this.htmlPanel = new HTMLViewer();
    }

    public drawPage(): void {
        this.game.draw();
        this.levelPanel.highlightCurrentLvl();
        this.levelPanel.changeLvlafterClick();
        this.levelPanel.checkCompletedLvls();
        this.htmlPanel.drawView();
    }
}

export default AppView;

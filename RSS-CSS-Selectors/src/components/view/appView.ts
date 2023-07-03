import CSSEditor from './CSSeditor/CSSeditor';
import GamePanelDrawer from './game/gamePanel';
import LevelPanel from './game/levels/levelsPanel';
import HTMLViewer from './HTMLview/htmlViewer';

export class AppView {
    private game: GamePanelDrawer;

    private levelPanel: LevelPanel;

    private htmlPanel: HTMLViewer;

    private cssEditor: CSSEditor;

    private level: number;

    constructor() {
        this.game = new GamePanelDrawer();
        this.levelPanel = new LevelPanel();
        this.htmlPanel = new HTMLViewer();
        this.cssEditor = new CSSEditor();
        if (localStorage.getItem('current_level')) {
            this.level = Number(localStorage.getItem('current_level'));
        } else {
            this.level = 1;
        }
    }

    public drawPage(): void {
        this.game.draw(this.level);
        this.levelPanel.highlightCurrentLvl(this.level);
        this.htmlPanel.drawView(this.level);
        this.cssEditor.highlightInput();
        this.levelPanel.changeLvlafterClick();
        this.levelPanel.checkCompletedLvls();
    }
}

export default AppView;

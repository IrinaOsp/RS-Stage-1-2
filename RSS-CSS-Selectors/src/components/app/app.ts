import AppView from '../view/appView';
import AppController from '../controller/appController';
import Buttons from '../controller/buttons';

class App {
    public view: AppView;

    public gameController: AppController;

    public helpBtn: Buttons;

    public resetBtn: Buttons;

    constructor() {
        this.view = new AppView();
        this.gameController = new AppController();
        this.helpBtn = new Buttons('.help-btn');
        this.resetBtn = new Buttons('.reset-btn');
    }

    public start(): void {
        this.view.drawPage();
        this.gameController.startGame();
        this.helpBtn.addListener();
        this.resetBtn.addListener();
        if (!localStorage.getItem('current_level')) localStorage.setItem('current_level', '1');
    }
}

export default App;

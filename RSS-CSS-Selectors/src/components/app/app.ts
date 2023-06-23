import AppView from '../view/appView';
import AppController from '../controller/appController';

class App {
    public view: AppView;

    public gameController: AppController;

    constructor() {
        this.view = new AppView();
        this.gameController = new AppController();
    }

    public start(): void {
        this.view.drawPage();
        this.gameController.startGame();
    }
}

export default App;

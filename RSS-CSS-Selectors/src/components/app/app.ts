import DrawGame from '../view/game/drawGame';

class App {
    public game: DrawGame;

    constructor() {
        this.game = new DrawGame();
    }

    public start(): void {
        this.game.draw();
    }
}

export default App;

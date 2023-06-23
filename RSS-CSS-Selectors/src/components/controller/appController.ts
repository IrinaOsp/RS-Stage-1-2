import CheckAnswer from './answerChecker';

export class AppController {
    private answers: CheckAnswer;

    constructor() {
        this.answers = new CheckAnswer();
    }

    public startGame(): void {
        this.answers.getInput();
    }
}

export default AppController;

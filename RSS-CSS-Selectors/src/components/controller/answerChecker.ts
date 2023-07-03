import LevelController from './gameLvlController';

function handleAnimationEnd(event: AnimationEvent): void {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('wrong' || 'right')) {
        targetElement.classList.remove('wrong' || 'right');
    }
}

function wrongAnswer(): void {
    document.querySelectorAll('.animated').forEach((el) => el.classList.add('wrong'));
}

class AnswerChecker {
    public getInput(): void {
        console.log('getInput');
        const input: HTMLTextAreaElement | null = document.querySelector('.code-input');
        if (input) input.addEventListener('keyup', this.checkResult);
        const enterButton: HTMLButtonElement | null = document.querySelector('.enter-button');
        if (enterButton) enterButton.addEventListener('click', this.checkResult);
    }

    private checkResult(event: Event): void {
        console.log('checkResult');
        if ((event instanceof KeyboardEvent && event.key === 'Enter') || event instanceof MouseEvent) {
            const input: HTMLTextAreaElement | null = document.querySelector('.code-input');
            const text = input?.value;
            console.log('checkResult');
            if (text) {
                try {
                    const elements = document.querySelectorAll(text);
                    if (elements.length) {
                      console.log('if elements.length');
                      console.log(elements);
                      console.log(document.querySelectorAll('.animated'));
                        const isCorrect = Boolean([...elements].filter(el => el.classList.contains('animated')).length ===
                        elements.length && [...elements].filter(el => el.classList.contains('animated')).length === document.querySelectorAll('.animated').length);
                        console.log(isCorrect);
                        if (isCorrect) {
                          //по оконч аним. запустить смену уровня
                          console.log('if correct');
                          elements.forEach((el) => el.classList.add('right'));
                          const setNewLevel = new LevelController();
                          setTimeout(() => setNewLevel.changeLvlafterWin(), 300);
                        } else {
                          console.log('wrong');
                          wrongAnswer();
                        }
                    } else {
                      wrongAnswer();
                    }
                } catch (error) {
                  wrongAnswer();
                }
              document.querySelectorAll('.animated').forEach(el => el.addEventListener('animationend', handleAnimationEnd as EventListener));
            }
    }
    }
}

export default AnswerChecker;

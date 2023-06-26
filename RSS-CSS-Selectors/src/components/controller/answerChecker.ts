import LevelController from './gameLvlController';

function handleAnimationEnd(event: AnimationEvent): void {
    const targetElement = event.target as HTMLElement;
    if (targetElement.classList.contains('wrong' || 'right')) {
        console.log('remove')
        targetElement.classList.remove('wrong' || 'right');
    }
}

class AnswerChecker {
  constructor() {}
    public getInput(): void {
        const input: HTMLInputElement | null = document.querySelector('.code-input');
        if (input) input.addEventListener('keyup', this.checkResult);
        const enterButton: HTMLButtonElement | null = document.querySelector('.enter-button');
        if (enterButton) enterButton.addEventListener('click', this.checkResult);
    }

    private checkResult(event: Event):void {
      if ((event instanceof KeyboardEvent && event.key === 'Enter') || event instanceof MouseEvent) {
        console.log('enter');
        const input: HTMLInputElement | null = document.querySelector('.code-input');
        const text = input?.value;
        if (text) {
          console.log(text);
          try {
            const elements = document.querySelectorAll(text);
            console.log(document.querySelectorAll('.animated'));
            console.log(elements);
            if (elements) {
              const isCorrect = Boolean([...elements].filter(el => el.classList.contains('animated')).length ===
              document.querySelectorAll('.animated').length)
              if (isCorrect) {
                elements.forEach(el => el.classList.add('right'));
                //по оконч аним. запустить смену уровня
                const newLevel = new LevelController()
                newLevel.changeLvlafterWin();
              } else {
                console.log('wrong');
                document.querySelectorAll('.animated').forEach(el => el.classList.add('wrong'));
              }
            }
            } catch (error) {
              document.querySelectorAll('.animated').forEach(el => el.classList.add('wrong'));
          }
          document.querySelectorAll('.animated').forEach(el => el.addEventListener('animationend', handleAnimationEnd as EventListener));
        }
    }
    }
}

export default AnswerChecker;

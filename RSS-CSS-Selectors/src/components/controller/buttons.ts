import levels from '../data/levels';

function HelpBtnOnClick(): void {
    const input: HTMLInputElement | null = document.querySelector('.code-input');
    const lvl: string | null = localStorage.getItem('current_level');
    if (input && lvl) {
        // input.classList.add('input-animated');
        const text = levels[`level_${lvl}`].selector;
        let currentIndex = 0;
        const animateText = () => {
            if (currentIndex <= text.length && input) {
                input.value = text.substring(0, currentIndex);
                currentIndex += 1;
                setTimeout(animateText, 100);
            }
        };
        animateText();
        // input.addEventListener('animationend', () => input.classList.remove('input-animated'));
    }
}

function ResetBtnOnClick(): void {
    const input: HTMLInputElement | null = document.querySelector('.code-input');
    if (input) {
        localStorage.setItem('completed_levels', '[]');
        document.querySelectorAll('.completed').forEach((el) => el.classList.remove('completed'));
    }
}

export default class Buttons {
    public button: Element | null;

    constructor(selector: string) {
        this.button = document.querySelector(selector);
    }

    addListener() {
        if (this.button) {
            this.button.addEventListener('click', () => {
                if (this.button?.classList.contains('help-btn')) HelpBtnOnClick();
                if (this.button?.classList.contains('reset-btn')) ResetBtnOnClick();
            });
        }
    }
}

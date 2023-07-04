export default class WinMessage {
    public drawWinMesssage() {
        const popupMessage = document.createElement('div');
        popupMessage.classList.add('popup');
        const popupText = document.createElement('div');
        popupText.classList.add('text');
        popupText.textContent = "You've passed all levels!";
        document.body.appendChild(popupMessage);
        popupMessage.appendChild(popupText);
        popupMessage.addEventListener('click', () => {
            document.body.removeChild(popupMessage);
        });
    }
}

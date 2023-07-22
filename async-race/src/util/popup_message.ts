import { HTMLTags } from '../types/types';
import { createElem } from '../view/view_elements';

function hidePopup(popup: HTMLElement): void {
  const POP = popup;
  POP.style.display = 'none';
}
function showPopup(popup: HTMLElement, popupText: HTMLElement, text: string): void {
  const POP = popup;
  POP.style.display = 'block';
  const POP_TEXT = popupText;
  POP_TEXT.textContent = text;
  setTimeout(() => hidePopup(popup), 2000);
}

export const popupMessage: (t: string) => void = (text) => {
  if (!document.querySelector('popup-message')) {
    const POPUP = createElem(document.body, HTMLTags.div, 'popup-message');
    const CLOSE_POPUP = createElem(POPUP, HTMLTags.span, 'close-btn', '&times;');
    const POPUP_TEXT = createElem(POPUP, HTMLTags.span, 'popup-message_text');
    CLOSE_POPUP.addEventListener('click', () => hidePopup(POPUP));
    showPopup(POPUP, POPUP_TEXT, text);
  } else {
    const POPUP = document.querySelector('.popup-message');
    const POPUP_TEXT = document.querySelector('.popup-message_text');
    if (POPUP instanceof HTMLElement && POPUP_TEXT instanceof HTMLElement) showPopup(POPUP, POPUP_TEXT, text);
  }
};

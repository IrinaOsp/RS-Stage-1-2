const createButton: (parent: Element, className: string, text: string) => Element = (parent, className, text) => {
  const BUTTON = document.createElement('button');
  BUTTON.className = className;
  BUTTON.textContent = text;
  parent.append(BUTTON);
  return BUTTON;
};

export default createButton;

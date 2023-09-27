import { HTMLTags } from '../types/types';

export const createElem: (
  parent: Element,
  elem: HTMLTags,
  className: string,
  text?: string | '' | undefined,
) => HTMLElement = (parent, elem, className, text = '') => {
  const ELEM = document.createElement(`${elem}`);
  ELEM.className = className;
  parent.append(ELEM);
  if (text) ELEM.textContent = text;
  return ELEM;
};

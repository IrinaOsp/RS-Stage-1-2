export interface LevelInfo {
  task: string;
  selector: string;
  htmlCode: multiArr[];
  innerHTML?: string;
}

export type htmlCodeType = {
  tag: string;
  class?: string;
  lang?: string;
  innerText?: string;
  innerElement?: htmlCodeType[];
  tooltipText: string;
}

export type multiArr = htmlCodeType; // | htmlCodeType{};

export type EventHandler<T> = (...args: T[]) => void;
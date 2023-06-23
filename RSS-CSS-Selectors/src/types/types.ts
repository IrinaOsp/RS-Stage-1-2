export interface LevelInfo {
  task: string;
  selector: string;
  htmlCode: Array<multiArr>;
}

export type htmlCodeType = {
  tag: string;
  class?: string;
  lang?: string;
  innerText?: string;
}

export type multiArr = htmlCodeType | Array<htmlCodeType>;

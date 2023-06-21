import LevelInfo from "../../types/types";

const levels: Record<string, LevelInfo> = {
  level_1: {
    task: 'Select the dogs',
    selector: 'dog',
    htmlCode: `
    <dog/>
    <dog/>
    `
  },
  level_2: {
    task: 'Select the dog on the rug',
    selector: 'rug dog',
    htmlCode: `
    <dog/>
    <rug/>
    <rug>
      <dog/>
    </rug>
    <cat/>
    `
  },
  level_3: {
    task: 'Select the corgis',
    selector: '.corgi',
    htmlCode: `
    <dog/>
    <dog class="corgi"/>
    <rug>
      <dog class="corgi"/>
    </rug>
    <cat/>
    `
  },
  level_4: {
    task: 'Select all pets on the rugs',
    selector: 'rug *',
    htmlCode: `
    <dog/>
    <rug>
      <dog/>
    </rug>
    <rug>
      <cat/>
    </rug>
    <cat/>
    `
  },
  level_5: {
    task: 'Select every corgi that directly follows cat',
    selector: 'cat + .corgi',
    htmlCode: `
    <rug>
      <dog class="corgi"/>
    </rug>
    <cat/>
    <dog class="corgi"/>
    <cat/>
    <dog class="corgi"/>
    <dog/>
    `
  },
  level_6: {
    task: 'Select every dog that directly follows cat',
    selector: 'cat ~ dog',
    htmlCode: `
    <cat/>
    <dog class="corgi"/>
    <dog/>
    <rug>
      <dog/>
    </rug>
    <rug>
      <cat/>
    </rug>
    `
  },
  level_7: {
    task: 'Select second dog on the sofa',
    selector: 'sofa:nth-child(2)',
    htmlCode: `
    <dog/>
    <sofa/>
      <dog/>
      <dog/>
      <cat/>
      <dog/>
    </sofa>
    `
  },
  level_8: {
    task: 'Select first dog',
    selector: ':first-of-type ',
    htmlCode: `
    <cat/>
    <rug>
      <cat/>
    </rug>
    <dog/>
    <dog/>
    <rug/>
      <dog/>
    </rug>
    `
  },
  level_9: {
    task: 'Select the rugs with no pet',
    selector: 'rug:empty',
    htmlCode: `
    <dog/>
    <rug>
      <dog/>
    </rug>
    <rug>
      <cat/>
    </rug>
    <rug/>
    <rug>
      <cat/>
      <dog/>
    </rug>
    <rug/>
    `
  },
  level_10: {
    task: 'Select dog with Polish name',
    selector: 'dog:has(name:lang(pl-PL))',
    htmlCode: `
    <dog>
      <name lang="en-US">Sam</name>
    </dog>
    <dog>
      <name lang="pl-PL">Michał</name>
    </dog>
    <rug>
      <dog>
        <name lang="en-US">Jack</name>
      </dog>
    </rug>
    <dog>
      <name lang="en-US">Daisy</name>
    </dog>
    `
  },
};

export default levels;
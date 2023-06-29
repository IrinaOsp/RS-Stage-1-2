import { LevelInfo } from '../../types/types';

const levels: Record<string, LevelInfo> = {
    level_1: {
        task: 'Select the dogs',
        selector: 'dog',
        htmlCode: [{ tag: 'dog' }, { tag: 'dog' }],
        innerHTML: `
        <dog/>
        <dog/>
        `,
    },
    level_2: {
        task: 'Select the dog on the rug',
        selector: 'rug dog',
        htmlCode: [{ tag: 'dog' }, { tag: 'rug' }, [{ tag: 'rug' }, { tag: 'dog' }], { tag: 'cat' }],
        innerHTML: `
        <dog/>
        <rug/>
        <rug>
        <dog/>
        </rug>
        <cat/>
        `,
    },
    level_3: {
        task: 'Select the corgis',
        selector: '.corgi',
        htmlCode: [{ tag: 'dog' }, { tag: 'dog', class: 'corgi' }, [{ tag: 'rug' }, { tag: 'dog' }], { tag: 'cat' }],
        innerHTML: `
            <dog/>
            <dog class="corgi"/>
            <rug>
              <dog/>
            </rug>
            <cat/>
            `,
    },
    level_4: {
        task: 'Select all pets on the rugs',
        selector: 'rug *',
        htmlCode: [{ tag: 'dog' }, [{ tag: 'rug' }, { tag: 'dog' }], [{ tag: 'rug' }, { tag: 'cat' }], { tag: 'cat' }],
        innerHTML: `
            <dog/>
            <rug>
              <dog/>
            </rug>
            <rug>
              <cat/>
            </rug>
            <cat/>
            `,
    },
    level_5: {
        task: 'Select every corgi that directly follows cat',
        selector: 'cat + .corgi',
        htmlCode: [
            [{ tag: 'rug' }, { tag: 'dog', class: 'corgi' }],
            { tag: 'cat' },
            { tag: 'dog', class: 'corgi' },
            { tag: 'cat' },
            { tag: 'dog', class: 'corgi' },
            { tag: 'dog' },
        ],
        innerHTML: `
            <rug>
              <dog class="corgi"/>
            </rug>
            <cat/>
            <dog class="corgi"/>
            <cat/>
            <dog class="corgi"/>
            <dog/>
            `,
    },
    level_6: {
        task: 'Select every dog that directly follows cat',
        selector: 'cat ~ dog',
        htmlCode: [
            { tag: 'cat' },
            { tag: 'dog', class: 'corgi' },
            { tag: 'dog' },
            [{ tag: 'rug' }, { tag: 'dog' }],
            [{ tag: 'rug' }, { tag: 'cat' }],
        ],
        innerHTML: `
            <cat/>
            <dog class="corgi"/>
            <dog/>
            <rug>
              <dog/>
            </rug>
            <rug>
              <cat/>
            </rug>
            `,
    },
    level_7: {
        task: 'Select second dog on the bench',
        selector: 'bench dog:nth-child(2)',
        htmlCode: [{ tag: 'dog' }, [{ tag: 'bench' }, { tag: 'dog' }, { tag: 'dog' }, { tag: 'cat' }, { tag: 'dog' }]],
        innerHTML: `
            <dog/>
            <bench/>
              <dog/>
              <dog/>
              <cat/>
              <dog/>
            </bench>
            `,
    },
    level_8: {
        task: 'Select first dog',
        selector: 'dog:first-of-type ',
        htmlCode: [
            { tag: 'cat' },
            [{ tag: 'rug' }, { tag: 'cat' }],
            { tag: 'dog' },
            { tag: 'dog' },
            { tag: 'dog', class: 'corgi' },
        ],
        innerHTML: `
            <cat/>
            <rug>
              <cat/>
            </rug>
            <dog/>
            <dog/>
            <rug/>
              <dog class="corgi"/>
            </rug>
            `,
    },
    level_9: {
        task: 'Select the rugs with no pet',
        selector: 'rug:empty',
        htmlCode: [
            { tag: 'dog' },
            [{ tag: 'rug' }, { tag: 'dog' }],
            { tag: 'rug' },
            [{ tag: 'rug' }, { tag: 'cat' }, { tag: 'dog' }],
            { tag: 'rug' },
        ],
        innerHTML: `
            <dog/>
            <rug>
              <dog/>
            </rug>
            <rug/>
            <rug>
              <cat/>
              <dog/>
            </rug>
            <rug/>
            `,
    },
    level_10: {
        task: 'Select dog with Polish name',
        selector: 'dog:has(name:lang(pl-PL))',
        htmlCode: [
            [{ tag: 'dog' }, { tag: 'name', lang: 'en-US', innerText: 'Sam' }],
            [{ tag: 'dog' }, { tag: 'name', lang: 'pl-PL', innerText: 'Michał' }],
            [{ tag: 'dog' }, { tag: 'name', lang: 'en-US', innerText: 'Jack' }],
            [{ tag: 'dog' }, { tag: 'name', lang: 'en-US', innerText: 'Daisy' }],
            { tag: 'dog' },
        ],
        innerHTML: `
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
            `,
    },
};

export default levels;

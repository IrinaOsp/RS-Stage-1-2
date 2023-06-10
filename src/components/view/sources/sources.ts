import { SourceName } from '../../../types/index';
import './sources.css';

class Sources {
    public draw(data: SourceName[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
                const SourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                if (SourceItemName) SourceItemName.textContent = item.name;
                const SourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
                if (SourceItem) SourceItem.setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });
        const Sources: HTMLElement | null = document.querySelector('.sources');
        if (Sources) Sources.append(fragment);
    }
}

export default Sources;

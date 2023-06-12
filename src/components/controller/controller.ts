import AppLoader from './appLoader';
import NewsData, { CombinedType } from '../../types/index';
import URLOptions from '../../types/index';

class AppController extends AppLoader {
    public getSources(callback: (data: NewsData) => void): void {
        super.getResp<URLOptions>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: CombinedType) => void): void {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target instanceof HTMLElement && target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (
                    newsContainer instanceof HTMLElement &&
                    newsContainer.getAttribute('data-source') !== sourceId &&
                    sourceId
                ) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<URLOptions>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            if (target instanceof HTMLElement) target = target.parentNode;
        }
    }
}

export default AppController;

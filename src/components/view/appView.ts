import { TopNewsData, NewsSources, SourcesData } from '../../types/index';
import NewsData from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: TopNewsData): void {
        const values: NewsData[] | never[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: NewsSources): void {
        const values: SourcesData[] | never[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

import './news.css';
import NewsData from '../../../types/index';

class News {
    public draw(data: NewsData[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        news.forEach((item: NewsData, idx) => {
            if (newsItemTemp) {
                const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
                const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
                if (newsItem && idx % 2) newsItem.classList.add('alt');

                const newsPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
                if (newsPhoto)
                    newsPhoto.setAttribute('backgroundImage', `url(${item.urlToImage || 'img/news_placeholder.jpg'})`);
                const newsAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
                if (newsAuthor) newsAuthor.textContent = item.author || item.source.name;
                const newsDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
                if (newsDate) newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

                const newsTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
                if (newsTitle) newsTitle.textContent = item.title;

                const newsDescriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
                if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;

                const newsDescriptionContent: HTMLElement | null = newsClone.querySelector(
                    '.news__description-content'
                );
                if (newsDescriptionContent) newsDescriptionContent.textContent = item.description;
                const newsReadMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
                if (newsReadMore) newsReadMore.setAttribute('href', item.url);
                fragment.append(newsClone);
            }
        });

        const News: HTMLElement | null = document.querySelector('.news');
        if (News) {
            News.innerHTML = '';
            News.appendChild(fragment);
        }
    }
}

export default News;

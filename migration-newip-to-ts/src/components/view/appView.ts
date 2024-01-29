import News from './news/news';
import Sources from './sources/sources';
import { NewsSource, ISource as TISource } from '../../types/index';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsSource): void {
        const values = data?.articles ? data.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: { sources: TISource['sources'] }): void {
        const values = data?.sources ?? [];
        if (values) {
            this.sources.draw(values);
        }
    }
    public clearNews(): void {
        const newsContainer = document.querySelector('.news') as HTMLElement;
        newsContainer.innerHTML = '';
    }
}

export default AppView;

import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsSource } from '../../types/index';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: NewsSource) => this.view.drawNews(data))
            );
        }

        this.controller.getSources((data) => this.view.drawSources(data));
        const clearButton = document.querySelector('.clear-button');
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                this.view.clearNews();
            });
        }
    }
}

export default App;

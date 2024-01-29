import Loader from './loader';
class AppLoader extends Loader {
    constructor() {
        super('https://news-proxy.spanb4.shop/', {
            apiKey: '140c5cb0ba9f46e4bc1bc0c9c757ccb4',
        });
    }
}

export default AppLoader;

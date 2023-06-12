import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://news-proxy.spanb4.shop/', {
            apiKey: 'ee3d4d2936204743a0e50e04ccb8f2a1', // получите свой ключ https://newsapi.org/ ee3d4d2936204743a0e50e04ccb8f2a1
        });
    }
}

export default AppLoader;

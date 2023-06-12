import { OptionsForLoader, ErrorsStatusCode, APIOption, URLOptions } from '../../types/index';

class Loader {
    constructor(private baseLink: string, private options: APIOption) {}

    public getResp<T>(
        { endpoint, options = {} }: { endpoint: string; options?: OptionsForLoader },
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ErrorsStatusCode.Unauthorized || res.status === ErrorsStatusCode.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    public makeUrl(options: OptionsForLoader, endpoint: string): string {
        const urlOptions: URLOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach(([key, value]): void => {
            url += `${key}=${value ?? ''}&`;
        });
        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;

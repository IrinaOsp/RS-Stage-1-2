import { EventHandler } from '../../../types/types';

class EventEmitter {
    private events: { [eventName: string]: EventHandler<string>[] };

    constructor() {
        this.events = {};
    }

    public on(eventName: string, handler: EventHandler<string>) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(handler);
    }

    public off(eventName: string, handler: EventHandler<string>) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter((eventHandler) => eventHandler !== handler);
        }
    }

    public emit(eventName: string, arg: string) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((handler) => handler(arg));
        }
    }
}

const eventEmitter = new EventEmitter();
export default eventEmitter;

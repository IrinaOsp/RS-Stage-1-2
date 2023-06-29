import { EventHandler } from '../../../types/types';

class EventEmitter<T> {
    private events: { [eventName: string]: EventHandler<T>[] };

    constructor() {
        this.events = {};
    }

    on(eventName: string, handler: EventHandler<T>) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(handler);
    }

    off(eventName: string, handler: EventHandler<T>) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter((eventHandler) => eventHandler !== handler);
        }
    }

    emit(eventName: string, ...args: T[]) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((handler) => handler(...args));
        }
    }
}

const eventEmitter = new EventEmitter();
export default eventEmitter;

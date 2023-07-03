import eventEmitter from "./eventEmitter/eventEmitter";

eventEmitter.on('levelChange', (newLevel) => localStorage.setItem('current_level', newLevel as string));
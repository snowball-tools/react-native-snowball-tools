// Optional native polyfills
try {
    require('react-native-get-random-values');
} catch {
    // ignore
}

// General polyfills
import '@snowballtools/react-native-base64';
import 'fastestsmallesttextencoderdecoder';

// Polyfills specific to the LIT protocol's SDKs
try {
    const { EventEmitter } = require('eventemitter3');
    Event = class {
        constructor(name) {
        this.name = name;
        }
    };
    const emitter = new EventEmitter();
    document = {
        dispatchEvent: event => {
        emitter.emit(event.name);
        }
    };
} catch {
// ignore
}
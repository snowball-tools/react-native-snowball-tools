// Optional native polyfills
try {
    require('react-native-get-random-values');
} catch {
    // ignore
}

// General polyfills
import '@snowballtools/react-native-base64';
import 'text-encoding';

// Polyfills specific to the LIT protocol's SDKs
import { EventEmitter } from 'eventemitter3';

Event = class {
    constructor(name) {
      this.name = name;
    }
};
  
const emitter = new EventEmitter();
document = {
    dispatchEvent: (event) => {
        emitter.emit(event.name);
    },
};
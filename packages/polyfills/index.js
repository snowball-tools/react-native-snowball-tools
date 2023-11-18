import 'react-native-get-random-values';
import 'react-native-base64';
import 'text-encoding';
import { EventEmitter } from 'eventemitter3';

// LIT: assumes existence of a DOM currently
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
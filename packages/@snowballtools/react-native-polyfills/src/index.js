// General polyfills
import 'react-native-get-random-values';
import '@snowballtools/react-native-base64';
import 'fastestsmallesttextencoderdecoder';

// LIT specific polyfills
const memory = {}
global.localStorage = {
	setItem: (key, value) => {
		memory[key] = value;
	},
	getItem: (key) => {
		return memory[key];
	}
}

class Event {
  constructor(name) {
	this.name = name;
  }
}

global.Event = Event
global.document = {
  dispatchEvent: (event) => { console.log(event) }
};
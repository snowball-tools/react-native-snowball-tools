try {
    const { btoa, atob } = require("react-native-quick-base64");
    global.btoa = btoa;
    global.atob = atob;
} catch {
    const { encode, decode } = require("base-64");
    global.btoa = encode;
    global.atob = decode;
    console.log("Using polyfill for base64, install react-native-quick-base64 for better performance.");
}

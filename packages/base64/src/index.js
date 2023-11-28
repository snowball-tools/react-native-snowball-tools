try {
    const { btoa, atob } = require("react-native-quick-base64");
    global.btoa = btoa;
    global.atob = atob;
} catch {
    const { encode, decode } = require("base-64");
    global.btoa = encode;
    global.atob = decode;
}

import { encode as btoa, decode as atob } from "base-64";
import { btoa as qbtoa, atob as qatob } from "react-native-quick-base64";

global.btoa = qbtoa ?? btoa;
global.atob = qatob ?? atob;

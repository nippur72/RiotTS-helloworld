import * as riot from "riot/riot+compiler";
import {Timer} from "./components/Timer";

// instantiation is necessary, otherwise timer source code is not in bundle.js
let timer: Timer = new Timer({});

riot.mount("*");

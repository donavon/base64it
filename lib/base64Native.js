"use strict";

if (typeof window !== "undefined") {
    if (typeof window.btoa === "function") {
        module.exports = require("./modernBrowserNative");
    } else {
        module.exports = require("./legacyBrowser");
    }
} else {
    module.exports = require("./nodeNative");
}

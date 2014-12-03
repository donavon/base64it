"use strict";

if (typeof window !== "undefined" && typeof window.btoa === "function") {
    module.exports = require("./browserNative");
} else {
    module.exports = require("./nodeNative");
}

"use strict";
/*global window*/

var strictEncode = null;
var strictDecode = null;

if (window && typeof window.btoa === "function") { // When running in a browser.

    strictEncode = function (unencoded) {
        return window.btoa(unencoded);
    };

    strictDecode = function (encoded) {
        return window.atob(encoded);
    };

} else { // When running in Node.

    strictEncode = function (unencoded) {
        return new Buffer(unencoded).toString("base64");
    };

    strictDecode = function (encoded) {
        return new Buffer(encoded, "base64");
    };
}

module.exports = {
    strictEncode: strictEncode,
    strictDecode: strictDecode,

    urlSafeEncode: function (unencoded) {
        return strictEncode(unencoded).replace("+", "-").replace("/", "_");
    },

    urlSafeDecode: function (encoded) {
        return strictDecode(encoded.replace("-", "+").replace("_", "/"));
    }
};

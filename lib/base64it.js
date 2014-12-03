"use strict";

var nativeEncode = require("./base64Native").encode;
var nativeDecode = require("./base64Native").decode;
var stripPadding = require("./utils").stripPadding;
var breakIntoPieces = require("./utils").breakIntoPieces;

function applyOptions(encoded, options) {
    options = options || {};
    if (options.stripPadding) {
        encoded = stripPadding(encoded);
    }
    if (options.lineLength) {
        encoded = breakIntoPieces(encoded, options.lineLength);
    }
    if (options.urlSafe) {
        encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_");
    }
    return encoded;
}

function encodeWithOptions(unencoded, options) {
    var encoded = nativeEncode(unencoded);
    return applyOptions(encoded, options);
}

function urlSafeDecode(encoded) {
    return nativeDecode(encoded.replace(/-/g, "+").replace(/_/g, "/"));
}

module.exports = {
    encode: encodeWithOptions,
    decode: urlSafeDecode,

    strictEncode: function (unencoded, options) {
        options = options || {};
        options.urlSafe = false;
        return encodeWithOptions(unencoded, options);
    },
    strictDecode: nativeDecode,

    urlSafeEncode: function (unencoded, options) {
        options = options || {};
        options.urlSafe = true;
        return encodeWithOptions(unencoded, options);
    },
    urlSafeDecode: urlSafeDecode
};

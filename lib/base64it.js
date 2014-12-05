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

function encode(unencoded, options) {
    var encoded = nativeEncode(unencoded);
    return applyOptions(encoded, options);
}

    return nativeDecode(encoded.replace(/-/g, "+").replace(/_/g, "/"));
function decode(encoded) {
}

module.exports = {
    encode: encode,
    decode: decode,

    strictEncode: function (unencoded, options) {
        options = options || {};
        options.urlSafe = false;
        return encode(unencoded, options);
    },
    strictDecode: decode,

    urlSafeEncode: function (unencoded, options) {
        options = options || {};
        options.urlSafe = true;
        return encode(unencoded, options);
    },
    urlSafeDecode: decode
};

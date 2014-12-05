"use strict";

var nativeEncode = require("./base64Native").encode;
var nativeDecode = require("./base64Native").decode;
var stripPadding = require("./utils").stripPadding;
var breakIntoPieces = require("./utils").breakIntoPieces;
var strDup = require("./utils").strDup;

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

function decode(encoded) {
    encoded = encoded
        .replace(/-/g, "+").replace(/_/g, "/") // Convert from Url Encoded.
        .replace(/\r\n?/g, ""); // Strip any CRLFs.
    var c = encoded.length % 4; // Add the proper padding (some decoders choke without it).
    if (c) {
        encoded += strDup(4-c, "=");
    }
    return nativeDecode(encoded);
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

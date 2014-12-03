"use strict";

exports.encode = function encode(unencoded) {
    var buffer;
    if (unencoded instanceof Buffer) {
        buffer = unencoded;
    } else {
        buffer = new Buffer(unencoded.toString(), "binary");
    }
    return buffer.toString("base64");
};

exports.decode = function decode(encoded) {
    return new Buffer(encoded, "base64").toString("binary");
};

"use strict";

var base64 = require("base64-js");
var stringToByteArray = require("./utils").stringToByteArray;
var byteArrayToString = require("./utils").byteArrayToString;

exports.encode = function (unencoded) {
    if (typeof unencoded === "string") {
        unencoded = stringToByteArray(unencoded);
    }
    return base64.fromByteArray(unencoded);
};

exports.decode = function (encoded) {
    return byteArrayToString(base64.toByteArray(encoded));
};

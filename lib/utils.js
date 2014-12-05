"use strict";

exports.stripPadding = function stripPadding(encoded) { // Strip any trailing padding characters (ie: "=").
    return encoded.split("=")[0];
};

exports.breakIntoPieces = function breakIntoPieces(encoded, lineLength) {
    var re = new RegExp(".{1," + lineLength + "}", "g");
    var pieces = encoded.match(re);
    return pieces.join("\r\n");
};

exports.strDup = function strDup(count, char) {
    return new Array(count + 1).join(char);
};

exports.byteArrayToString = function byteArrayToString(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        result += String.fromCharCode(parseInt(arr[i], 10));
    }
    return result;
};

exports.stringToByteArray = function stringToByteArray(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
};

"use strict";

exports.stripPadding = function stripPadding(encoded) { // Strip any trailing padding characters (ie: "=").
    return encoded.split("=")[0];
};

exports.breakIntoPieces = function breakIntoPieces(encoded, lineLength) {
    var re = new RegExp(".{1," + lineLength + "}", "g");
    var pieces = encoded.match(re);
    return pieces.join("\r\n");
};

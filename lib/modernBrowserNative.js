"use strict";
/*global window*/

exports.encode = window.btoa.bind(window);
exports.decode = window.atob.bind(window);

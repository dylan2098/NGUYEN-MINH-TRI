"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment = function () {
    return process.env.NODE_ENV || 'development';
};
exports.default = {
    environment: environment
};

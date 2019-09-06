"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    title: String,
    description: String,
    imagePath: String
});
exports.default = mongoose_1.model('photo', schema);
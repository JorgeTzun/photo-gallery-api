"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var index_1 = __importDefault(require("./routes/index"));
var path_1 = __importDefault(require("path"));
var PORT = process.env.PORT || 3000;
// What is ASP.NET API
var app = express_1.default();
//settings
app.set('port', PORT);
//middleware
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//routes
app.use('/api', index_1.default);
//this folder for this application will be used to store public files
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;

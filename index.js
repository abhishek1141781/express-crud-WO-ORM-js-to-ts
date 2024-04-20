"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
// import express = require('express'); //! import express from 'express';
// import * as express from 'express';
const express_1 = __importDefault(require("express"));
// import { Application } from 'express';
// import * as bodyParser from 'body-parser';
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./app/routes/userRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// import * as swaggerUI from 'swagger-ui-express';
const swagger_1 = __importDefault(require("./app/swagger"));
const app = (0, express_1.default)();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/users', userRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

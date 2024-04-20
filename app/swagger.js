"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// swagger.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
// import * as swaggerJSDoc from 'swagger-jsdoc';
// import swaggerJSDoc = require('swagger-jsdoc'); //! import express from 'express';
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
        description: 'My API Description: Vanilla Express CRUD: Without ORM',
    },
};
const options = {
    swaggerDefinition,
    // apis: ['./app/routes/*.js'], // Path to the API routes in your Node.js application
    // apis: ['./app/controllers/*.js'], // Path to the API routes in your Node.js application
    apis: ['./app/models/*.js'], // Path to the API routes in your Node.js application
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;

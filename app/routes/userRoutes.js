"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// userRoutes.ts
// import express = require('express'); //! import express from 'express';
// import { Router } from 'express';
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const router = express_1.default.Router();
// const router: Router = express.Router();
/**
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       properties:
*         id:
*           type: integer
*         name:
*           type: string
*         email:
*           type: string
*/
/**
* @swagger
* /users:
*   get:
*     summary: Get all users
*     description: Retrieve a list of all users.
*     responses:
*       200:
*         description: A list of users.
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/
router.get("/", userController_1.default.getAllUsers);
router.get("/:id", userController_1.default.getUserById);
router.post("/", userController_1.default.createUser);
router.put("/:id", userController_1.default.updateUser);
router.delete("/:id", userController_1.default.deleteUser);
exports.default = router;

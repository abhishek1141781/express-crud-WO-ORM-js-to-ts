// userRoutes.ts
// import express = require('express'); //! import express from 'express';
// import { Router } from 'express';
import express, { Router } from 'express';
import UserController from '../controllers/userController';

const router = express.Router();


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
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;

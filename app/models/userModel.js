"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// userModel.js
const db_1 = __importDefault(require("../db"));
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
class User {
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
    static getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield db_1.default.query('SELECT * FROM users');
                return allUsers.rows;
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Get a user by ID
     *     description: Retrieve a user based on their ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the user to retrieve.
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: The user object.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     */
    static getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield db_1.default.query('SELECT * FROM users WHERE id = $1', [id]);
                return user.rows[0];
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @swagger
     * /users:
     *   post:
     *     summary: Create a new user
     *     description: Create a new user with the provided name and email.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: The created user object.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     */
    static createUser(name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield db_1.default.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
                return newUser.rows[0];
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     summary: Update a user
     *     description: Update the name and/or email of a user.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the user to update.
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: The updated user object.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     */
    static updateUser(id, name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateUser = yield db_1.default.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
                return updateUser.rows[0];
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     summary: Delete a user
     *     description: Delete a user based on their ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the user to delete.
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: User deleted successfully.
     */
    static deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.query('DELETE FROM users WHERE id = $1', [id]);
                return 'User deleted successfully';
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = User;

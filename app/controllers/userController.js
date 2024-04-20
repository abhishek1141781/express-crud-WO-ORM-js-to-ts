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
const userService_1 = __importDefault(require("../services/userService"));
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
class UserController {
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
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userService_1.default.getAllUsers();
                res.json(users);
            }
            catch (error) {
                console.error(error.message);
                res.status(500).send("Server Error");
            }
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield userService_1.default.getUserById(parseInt(id, 10));
                res.json(user);
            }
            catch (error) {
                console.error(error.message);
                res.status(500).send("Server Error");
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email } = req.body;
                const newUser = yield userService_1.default.createUser(name, email);
                res.json(newUser);
            }
            catch (error) {
                console.error(error.message);
                res.status(500).send("Server Error");
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email } = req.body;
                const updatedUser = yield userService_1.default.updateUser(parseInt(id, 10), name, email);
                res.json(updatedUser);
            }
            catch (error) {
                console.error(error.message);
                res.status(500).send("Server Error");
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const message = yield userService_1.default.deleteUser(parseInt(id, 10));
                res.json(message);
            }
            catch (error) {
                console.error(error.message);
                res.status(500).send("Server Error");
            }
        });
    }
}
exports.default = UserController;

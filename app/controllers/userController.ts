// userController.ts
import { Request, Response } from 'express';
import UserService from '../services/userService';

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
  static async getAllUsers(req: Request, res: Response) {
      try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(parseInt(id, 10));
      res.json(user);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const newUser = await UserService.createUser(name, email);
      res.json(newUser);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const updatedUser = await UserService.updateUser(parseInt(id, 10), name, email);
      res.json(updatedUser);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const message = await UserService.deleteUser(parseInt(id, 10));
      res.json(message);
    } catch (error: any) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
}

export default UserController;

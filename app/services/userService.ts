// userService.ts
import UserModel from '../models/userModel';

class UserService {
    static async getAllUsers() {
        return await UserModel.getAllUsers();
    }

    static async getUserById(id: number) {
        return await UserModel.getUserById(id);
    }

    static async createUser(name: string, email: string) {
        return await UserModel.createUser(name, email);
    }

    static async updateUser(id: number, name: string, email: string) {
        return await UserModel.updateUser(id, name, email);
    }

    static async deleteUser(id: number) {
        return await UserModel.deleteUser(id);
    }
}

export default UserService;

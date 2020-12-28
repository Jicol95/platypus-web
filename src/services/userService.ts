import { apiClient } from "@/services/apiService";
import UserRegisterModel from "@/models/user/userRegisterModel";
import UserModel from "@/models/auth/userModel";
import UserUpdateModel from "@/models/user/userUpdateModel";

export default {
  async updateUser(model: UserUpdateModel) {
    const response = await apiClient.put<UserModel>("user", model);
    return response.data;
  },
  async registerUser(model: UserRegisterModel): Promise<UserModel> {
    const response = await apiClient.post<UserModel>("user/register", model);
    return response.data;
  }
};

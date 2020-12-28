import apiClient from "@/services/apiService";
import { AxiosResponse } from "axios";
import TokenModel from "@/models/auth/tokenModel";
import AuthorisationModel from "@/models/auth/AuthModel";
import PasswordResetRequestModel from "@/models/auth/passwordResetRequestModel";
import TokenRefreshModel from "@/models/auth/tokenRefreshModel";

export default {
  async postLogin(credentials: AuthorisationModel): Promise<TokenModel> {
    const response = await apiClient.post<TokenModel>(
      "authorisation/token",
      credentials
    );
    return response.data;
  },
  async sendPasswordReset(
    credentials: PasswordResetRequestModel
  ): Promise<AxiosResponse<any>> {
    return await apiClient.post("authorisation/sendpasswordreset", credentials);
  },
  async postResetPassword(
    id: string,
    password: string
  ): Promise<AxiosResponse<any>> {
    return await apiClient.post(`authorisation/resetpassword/${id}`, {
      password: password
    });
  },
  async refreshToken(token: TokenRefreshModel): Promise<TokenModel> {
    const response = await apiClient.post(`authorisation/refreshToken`, token);
    return new TokenModel(response.data);
  }
};

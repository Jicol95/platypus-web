import { apiClient } from "@/services/apiService";
import TokenModel from "@/models/auth/tokenModel";
import AuthorisationModel from "@/models/auth/AuthModel";
import TokenRefreshModel from "@/models/auth/tokenRefreshModel";

export default {
  async postLogin(credentials: AuthorisationModel): Promise<TokenModel> {
    const response = await apiClient.post<TokenModel>(
      "authorisation/token",
      credentials
    );
    return response.data;
  },
  async refreshToken(token: TokenRefreshModel): Promise<TokenModel> {
    const response = await apiClient.post<TokenModel>(
      `authorisation/refreshToken`,
      token
    );
    return response.data;
  }
};

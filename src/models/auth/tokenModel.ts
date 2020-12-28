import UserModel from "@/models/auth/userModel";

export default interface TokenModel extends UserModel {
  accessToken: string | null;
  accessTokenExpires: string | null;
  refreshToken: string | null;
}

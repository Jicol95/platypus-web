import UserUpdateModel from "@/models/user/userUpdateModel";

export default interface UserRegisterModel extends UserUpdateModel {
  emailAddress: string;
  password: string;
}

import { VuexModule, Mutation, Action, Module } from "vuex-module-decorators";
import AuthorisationService from "@/services/authorisationService";
import AuthModel from "@/models/auth/authModel";
import TokenModel from "@/models/auth/tokenModel";
import TokenRefreshModel from "@/models/auth/tokenRefreshModel";
import Store from "@/store/index.ts";

@Module({ dynamic: true, store: Store, name: "user", namespaced: true })
export default class UserModule extends VuexModule {
  private user: TokenModel = {
    userId: "",
    emailAddress: "",
    firstname: "",
    lastname: "",
    fullname: "",
    createdUtc: "",
    accessToken: null,
    accessTokenExpires: null,
    refreshToken: null
  };

  @Mutation
  public async setUserData(data: TokenModel) {
    this.user = data;
    localStorage.setItem("user", JSON.stringify(this.user));
  }

  @Mutation
  public clearUserData(): void {
    localStorage.removeItem("user");
    location.reload();
  }

  @Action({ rawError: true, commit: "setUserData" })
  public async login(credentials: AuthModel): Promise<TokenModel> {
    return await AuthorisationService.postLogin(credentials);
  }

  @Action({ commit: "clearUserData" })
  public logout(): void {
    return;
  }

  @Action
  public async refreshToken(
    refreshToken: TokenRefreshModel
  ): Promise<TokenModel> {
    try {
      const response = await AuthorisationService.refreshToken(refreshToken);
      this.context.commit("setUserData", response);
      return response;
    } catch {
      this.context.commit("clearUserData");
      return {
        userId: "",
        emailAddress: "",
        firstname: "",
        lastname: "",
        fullname: "",
        createdUtc: "",
        accessToken: null,
        accessTokenExpires: null,
        refreshToken: null
      };
    }
  }

  get loggedIn(): boolean {
    return !!this.user.accessToken;
  }

  get userName(): string {
    return this.user.fullname;
  }

  get userId(): string {
    return this.user.userId;
  }
}

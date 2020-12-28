import axios from "axios";
import userModule from "@/store/userModule";
import { getModule } from "vuex-module-decorators";
import TokenModel from "@/models/auth/tokenModel";
import TokenRefreshModel from "@/models/auth/tokenRefreshModel";
import SnackbarModule from "@/store/snackbarModule";
import environment from "@/environment";

const snackbarModule = getModule(SnackbarModule);

export const apiClient = axios.create({
  baseURL: environment.API_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate"
  }
});

apiClient.interceptors.request.use((request: any) => {
  const tokenJson = localStorage.getItem("user");

  if (!tokenJson) {
    return request;
  }

  const user = JSON.parse(tokenJson) as TokenModel;

  if (user.accessToken) {
    request.headers["Authorization"] = `Bearer ${user.accessToken}`;
  }
  return request;
});

// following outline from https://gist.github.com/bragma/f68391596de71e1bfae066be80c259dc
apiClient.interceptors.response.use(undefined, async (error: any) => {
  const response = error.response;
  const module = getModule(userModule);
  if (response) {
    if (response.status === 401 && error.config && !error.config._retry) {
      try {
        const user = localStorage.getItem("user");
        if (user) {
          const userModel = JSON.parse(user) as TokenModel;
          const tokenRefreshModel = {
            token: userModel.accessToken,
            refreshToken: userModel.refreshToken
          } as TokenRefreshModel;
          await module.refreshToken(tokenRefreshModel);
        }
      } catch (authError) {
        return Promise.reject(error);
      }
      error.config._retry = true;
      return await apiClient.request(error.config);
    }
  }

  return Promise.reject(error);
});

apiClient.interceptors.response.use(
  function(response) {
    // Pass through nothing to see here (2xx resopnse)
    return response;
  },
  function(error) {
    // Don't show snackbar if we're refreshing our token due to a 401
    if (error.config._retry) {
      return Promise.reject(error);
    }
    // Error handlings
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.Message
    ) {
      snackbarModule.setSnackbarMessage(`${error.response.data.Message}`);
    } else if (error && error.response && error.response.data) {
      snackbarModule.setSnackbarMessage(error.response.data);
    } else {
      snackbarModule.setSnackbarMessage(error.message);
    }

    return Promise.reject(error);
  }
);

export default {
  getBaseURL(): string | undefined {
    return apiClient.defaults.baseURL;
  }
};

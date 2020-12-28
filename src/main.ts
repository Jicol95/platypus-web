import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { getModule } from "vuex-module-decorators";
import UserModule from "./store/userModule";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const userString: string | null = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      const userModule = getModule(UserModule);
      userModule.setUserData(userData);
    }
  },
  vuetify,
  render: h => h(App)
}).$mount("#app");

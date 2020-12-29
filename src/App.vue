<template>
  <v-app>
    <sidebar v-if="computedAuth"></sidebar>
    <snackbar />
    <v-main class="main-view">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Sidebar from "@/components/layout/Sidebar.vue";
import Snackbar from "@/components/common/Snackbar.vue";
import { getModule } from "vuex-module-decorators";
import UserModule from "./store/userModule";

const userModule = getModule(UserModule);

@Component({ components: { Sidebar, Snackbar } })
export default class App extends Vue {
  private drawer: boolean | null = null;

  get computedAuth() {
    return userModule.loggedIn;
  }
}
</script>

<style scoped>
.main-view {
  margin-left: 56px;
}
</style>

<style>
.container-lg {
  max-width: 1200px;
}
.container-md {
  max-width: 750px;
}
</style>

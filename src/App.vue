<template>
  <v-app>
    <sidebar></sidebar>
    <v-main class="main-view">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Sidebar from "@/components/layout/Sidebar.vue";

@Component({ components: { Sidebar } })
export default class App extends Vue {
  private drawer: boolean | null = null;
  private computedAuth = true;
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

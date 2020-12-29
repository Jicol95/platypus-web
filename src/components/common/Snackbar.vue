<template>
  <div>
    <v-snackbar class="text--white" v-model="computedShowSnackbar">
      {{ computedSnackbarMessage }}
      <v-btn color="white" text @click="hideSnackbar">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import SnackbarModule from "@/store/snackbarModule";

const snackbarModule = getModule(SnackbarModule);

@Component
export default class TheSnackbar extends Vue {
  get computedShowSnackbar() {
    return snackbarModule.showSnackbar;
  }

  set computedShowSnackbar(value) {
    if (!value) {
      this.hideSnackbar();
    }
  }

  get computedSnackbarMessage() {
    return snackbarModule.snackbarMessage;
  }

  hideSnackbar() {
    snackbarModule.setSnackbarMessage("");
  }
}
</script>

<style scoped></style>

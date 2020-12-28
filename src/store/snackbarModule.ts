import { VuexModule, Mutation, Module } from "vuex-module-decorators";
import Store from "@/store/index.ts";

@Module({ dynamic: true, store: Store, name: "snackbar", namespaced: true })
export default class SnackbarModule extends VuexModule {
  private snackbar: string | null = null;

  @Mutation
  setSnackbarMessage(message: string) {
    this.snackbar = message;
  }

  get showSnackbar() {
    return !!this.snackbar;
  }

  get snackbarMessage() {
    return this.snackbar;
  }
}

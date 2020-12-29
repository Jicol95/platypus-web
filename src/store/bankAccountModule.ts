import { VuexModule, Mutation, Module } from "vuex-module-decorators";
import Store from "@/store/index.ts";

@Module({ dynamic: true, store: Store, name: "bankAccount", namespaced: true })
export default class BankAccountModule extends VuexModule {
  private bankAccountIdInternal: string | null = null;

  @Mutation
  setBankAccountId(id: string) {
    this.bankAccountIdInternal = id;
  }

  get bankAccountId() {
    return this.bankAccountIdInternal;
  }
}

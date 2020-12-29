<template>
  <div class="extended-sidebar elevation-0">
    <v-navigation-drawer color="#fafafa" app>
      <v-list class="ml-3" flat>
        <v-list-item class="pt-3">
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-1">
              Accounts
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-group v-model="model" mandatory>
          <v-list-item v-for="account in accounts" :key="account.bankAccountId">
            <v-list-item-icon class="mx-0">
              <v-icon class="icon" x-small>mdi-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="text-subtitle-2">
              {{ account.name }}
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item @click="dialog = true">
          <v-list-item-icon class="mx-0">
            <v-icon color="blue darken-2" small>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            class="text-subtitle-2 blue--text text--darken-2"
          >
            Add Account
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <base-select
          v-model="currency"
          class="mx-4"
          :items="currencies"
          item-text="name"
          required
          disabled
          append-icon="mdi-currency-gbp"
        />
      </template>
    </v-navigation-drawer>
    <create-bank-account-dialog
      :dialog.sync="dialog"
      @account-created="getAccounts"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import BaseSelect from "@/components/common/BaseSelect.vue";
import CreateBankAccountDialog from "@/components/dialogs/CreateBankAccountDialog.vue";
import bankAccountService from "@/services/bankAccountService";
import BankAccountModel from "@/models/bankAccount/bankAccountModel";
import { getModule } from "vuex-module-decorators";
import BankAccountModule from "@/store/bankAccountModule";

const bankAccountModule = getModule(BankAccountModule);

@Component({ components: { BaseSelect, CreateBankAccountDialog } })
export default class DashboardExtendedSidebar extends Vue {
  @Prop(Boolean) readonly value!: boolean;
  private model = null;
  private currencies = [
    {
      name: "GBP"
    }
  ];
  private currency = this.currencies[0];
  private accounts: Array<BankAccountModel> = [];
  private dialog = false;

  private async created() {
    await this.getAccounts();
  }

  private async getAccounts() {
    this.accounts = await bankAccountService.getBankAccounts();
  }

  @Watch("model")
  private onChange(value: number) {
    bankAccountModule.setBankAccountId(this.accounts[value].bankAccountId);
  }
}
</script>

<style scoped>
.extended-sidebar >>> .v-navigation-drawer {
  left: 56px;
}

.extended-sidebar >>> .v-navigation-drawer__border {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 0px;
}

.icon {
  color: #f0f3fa;
}

.header {
  top: 20px;
}
</style>

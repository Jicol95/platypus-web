<template>
  <div class="create-bank-account-dialog">
    <v-dialog v-model="syncedDialog" max-width="800">
      <v-card>
        <v-card-title>Create Bank Account</v-card-title>
        <v-form ref="form" @submit.prevent="onAddAccount">
          <v-card-text>
            <base-input
              v-model="account.name"
              required
              :rules="[requiredRule]"
              topLabel="Account Name"
            ></base-input>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <base-button-secondary @click="syncedDialog = false"
              >Cancel</base-button-secondary
            >
            <base-button-primary type="submit" :loading="loading"
              >Register</base-button-primary
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Ref } from "vue-property-decorator";
import Validation from "@/mixins/validation";
import { VForm } from "@/types/vForm";
import BaseInput from "@/components/common/BaseInput.vue";
import BaseButtonPrimary from "@/components/common/BaseButtonPrimary.vue";
import BaseButtonSecondary from "@/components/common/BaseButtonSecondary.vue";
import BankAccountCreateModel from "@/models/bankAccount/bankAccountCreateModel";
import bankAccountService from "@/services/bankAccountService";
import { getModule } from "vuex-module-decorators";
import SnackbarModule from "@/store/snackbarModule";

const snackbarModule = getModule(SnackbarModule);

@Component({
  components: { BaseInput, BaseButtonPrimary, BaseButtonSecondary }
})
export default class CreateBankAccountDialog extends Validation {
  @Ref() readonly form!: VForm;
  @PropSync("dialog", { type: Boolean }) syncedDialog!: boolean;
  private loading = false;

  private account: BankAccountCreateModel = {
    name: ""
  };

  private async onAddAccount() {
    if (!this.form.validate()) {
      return;
    }

    try {
      this.loading = true;
      await bankAccountService.createBankAccount(this.account);
      this.$emit("account-created");
    } catch {
      snackbarModule.setSnackbarMessage(
        "Failed to add bank account, please try again"
      );
    } finally {
      this.loading = false;
      this.syncedDialog = false;
    }
  }
}
</script>

<style scoped></style>

<template>
  <div class="create-transaction-dialog">
    <v-dialog v-model="syncedDialog" max-width="800">
      <v-card>
        <v-card-title>Create Transaction</v-card-title>
        <v-form ref="form" @submit.prevent="onAddTransaction">
          <v-card-text>
            <base-input
              v-model="transaction.vendorName"
              required
              :rules="[requiredRule]"
              topLabel="Vendor Name"
            ></base-input>
            <v-row>
              <v-col>
                <base-select
                  v-model="transaction.type"
                  :items="transactionTypes"
                  item-text="name"
                  item-value="value"
                  topLabel="Type"
                />
              </v-col>
              <v-col>
                <base-input
                  v-model.number="transaction.amount"
                  required
                  append-icon="mdi-currency-gbp"
                  :rules="[requiredRule]"
                  topLabel="Amount"
                ></base-input>
              </v-col>
            </v-row>
            <v-menu
              ref="menu"
              v-model="menu"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <base-input
                  v-bind="attrs"
                  v-on="on"
                  :value="transaction.purchaseDateUtc"
                  :rules="[requiredRule]"
                  readonly
                  topLabel="Transaction Date"
                  append-icon="mdi-calendar"
                />
              </template>
              <v-date-picker
                v-model="transaction.purchaseDateUtc"
              ></v-date-picker>
            </v-menu>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <base-button-secondary @click="syncedDialog = false"
              >Cancel</base-button-secondary
            >
            <base-button-primary type="submit" :loading="loading"
              >Create</base-button-primary
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
import BaseSelect from "@/components/common/BaseSelect.vue";
import BaseButtonPrimary from "@/components/common/BaseButtonPrimary.vue";
import BaseButtonSecondary from "@/components/common/BaseButtonSecondary.vue";
import { getModule } from "vuex-module-decorators";
import SnackbarModule from "@/store/snackbarModule";
import TransactionCreateModel from "@/models/transaction/transactionCreateModel";
import transactionService from "@/services/transactionService";
import BankAccountModule from "@/store/bankAccountModule";

const snackbarModule = getModule(SnackbarModule);
const bankAccountModule = getModule(BankAccountModule);

@Component({
  components: { BaseInput, BaseSelect, BaseButtonPrimary, BaseButtonSecondary }
})
export default class CreateTransactionDialog extends Validation {
  @Ref() readonly form!: VForm;
  @PropSync("dialog", { type: Boolean }) syncedDialog!: boolean;
  private loading = false;

  private transactionTypes = [
    { name: "Debit", value: 0 },
    { name: "Credit", value: 1 }
  ];

  private transaction: TransactionCreateModel = {
    type: 0,
    category: "",
    vendorName: "",
    amount: 0,
    purchaseDateUtc: "",
    bankAccountId: ""
  };

  private menu = false;

  private async onAddTransaction() {
    if (!this.form.validate()) {
      return;
    }

    if (!bankAccountModule.bankAccountId) {
      return;
    }

    this.transaction.bankAccountId = bankAccountModule.bankAccountId;
    this.transaction.category = "SHP";

    try {
      this.loading = true;
      await transactionService.createTransaction(this.transaction);
      snackbarModule.setSnackbarMessage("Transaction added");
      this.$emit("transaction-created");
    } catch {
      snackbarModule.setSnackbarMessage("Failed to add transaction, try again");
    } finally {
      this.loading = false;
      this.syncedDialog = false;
    }
  }
}
</script>

<style scoped></style>

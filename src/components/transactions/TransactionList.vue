<template>
  <div class="transaction-list">
    <v-card flat>
      <v-card-title>
        Transactions
        <v-spacer></v-spacer>
        <base-button-primary
          fab
          class="elevation-0"
          color="primary"
          @click="createTransactionDialog = true"
        >
          <v-icon>mdi-plus</v-icon>
        </base-button-primary>
      </v-card-title>
      <v-card-text>
        <base-input
          v-model="search"
          placeholder="Search"
          append-icon="mdi-magnify"
        />
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <base-input
              v-bind="attrs"
              v-on="on"
              :value="dateRangeText"
              placeholder=" Transaction Date"
              append-icon="mdi-calendar"
            />
          </template>
          <v-date-picker v-model="dates" range></v-date-picker>
        </v-menu>
      </v-card-text>
      <v-card-text>
        <v-row class="ma-0 pa-0">
          <v-col class="ma-0 pa-0">
            <p class="text-caption">Total Expense</p>
            <p class="text-h5">{{ totalExpense | toCurrency }}</p>
          </v-col>
          <v-col class="ma-0 pa-0">
            <p class="text-caption">Total Income</p>
            <p class="text-h5">{{ totalIncome | toCurrency }}</p>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="ma-0 pa-0 text-right mr-4">
            <p class="text-caption">Net</p>
            <p class="text-h5">
              {{ (totalIncome - totalExpense) | toCurrency }}
            </p>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-list>
          <div
            v-for="transaction in filteredTransactions"
            :key="transaction.transactionId"
          >
            <v-list-item three-line>
              <v-list-item-avatar>
                <v-img src="@/assets/logo.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{
                  transaction.vendorName
                    ? transaction.vendorName
                    : "Unspecified"
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  transaction.categoryDescription
                }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{
                  transaction.purchaseDateUtc | formatDate
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer class="pl-4"></v-spacer>
              <v-list-item-action-text>
                <p class="my-6 text-h5">
                  {{ transaction.amount | toCurrency }}
                </p>
              </v-list-item-action-text>
            </v-list-item>
            <v-divider />
          </div>
        </v-list>
      </v-card-text>
    </v-card>

    <create-transactionDialog
      :dialog.sync="createTransactionDialog"
      @transaction-created="getTransactions"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import BaseButtonPrimary from "@/components/common/BaseButtonPrimary.vue";
import BaseInput from "@/components/common/BaseInput.vue";
import CreateTransactionDialog from "@/components/dialogs/CreateTransactionDialog.vue";
import { getModule } from "vuex-module-decorators";
import BankAccountModule from "@/store/bankAccountModule";
import transactionService from "@/services/transactionService";
import moment from "moment";
import TransactionModel from "@/models/transaction/transactionModel";
import TransactionQueryModel from "@/models/transaction/transactionQueryModel";

const bankAccountModule = getModule(BankAccountModule);

@Component({
  components: {
    BaseInput,
    BaseButtonPrimary,
    CreateTransactionDialog
  }
})
export default class TransactionList extends Vue {
  private transactions: Array<TransactionModel> = [];
  private search = "";
  private transactionQuery: TransactionQueryModel = {
    bankAccountId: null,
    fromUtc: "",
    toUtc: ""
  };
  private createTransactionDialog = false;
  dates: Array<string> = [];
  private menu = false;

  private async created() {
    await this.getTransactions();
  }

  private async getTransactions() {
    this.transactionQuery.bankAccountId = bankAccountModule.bankAccountId;
    this.transactionQuery.fromUtc = this.dates[0];
    this.transactionQuery.toUtc = this.dates[1];
    this.transactions = await transactionService.getTransactions(
      this.transactionQuery
    );
  }

  private get dateRangeText() {
    this.dates = this.dates.sort((a, b) => {
      const c = moment(a).format("YYYYMMDD");
      const d = moment(b).format("YYYYMMDD");

      return c.localeCompare(d);
    });
    return this.dates.join(" - ");
  }

  private get bankAccountId() {
    return bankAccountModule.bankAccountId;
  }

  private get filteredTransactions() {
    return this.transactions.filter(x =>
      x.vendorName.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  private get totalExpense() {
    if (this.transactions.length) {
      return this.transactions
        .filter(x => x.type === 0)
        .map(x => x.amount)
        .reduce((a, b) => a + b, 0);
    }
    return 0;
  }

  private get totalIncome() {
    if (this.transactions.length) {
      return this.transactions
        .filter(x => x.type === 1)
        .map(x => x.amount)
        .reduce((a, b) => a + b, 0);
    }
    return 0;
  }

  @Watch("bankAccountId")
  private async onBankAccountChanged() {
    await this.getTransactions();
  }

  @Watch("dateRangeText")
  private async onDateChanged() {
    this.transactionQuery.fromUtc = this.dates[0];
    this.transactionQuery.toUtc = this.dates[1];
    this.transactions = await transactionService.getTransactions(
      this.transactionQuery
    );
  }
}
</script>

<style scoped></style>

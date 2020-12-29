<template>
  <div class="dashboard">
    <dashboard-extended-sidebar />
    <v-container class="container-lg">
      <v-row>
        <v-col cols="12" md="7">
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
                  <p class="text-h5">£{{ totalExpense }}</p>
                </v-col>
                <v-col class="ma-0 pa-0">
                  <p class="text-caption">Total Income</p>
                  <p class="text-h5">£22.20</p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="ma-0 pa-0 text-right mr-4">
                  <p class="text-caption">Net</p>
                  <p class="text-h5">£22.20</p>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-list>
                <div
                  v-for="transaction in transactions"
                  :key="transaction.transactionId"
                >
                  <v-list-item two-line>
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
                        transaction.purchaseDateUtc
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-spacer class="pl-4"></v-spacer>
                    <v-list-item-action-text>
                      <p class="my-6 text-h5">£{{ transaction.amount }}</p>
                    </v-list-item-action-text>
                  </v-list-item>
                  <v-divider />
                </div>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="5">
          <v-card flat>
            <v-card-title>
              <base-button-primary
                x-large
                color="primary"
                height="120px"
                width="100%"
                >Setup Monthly Budget</base-button-primary
              >
            </v-card-title>
            <v-card-title>
              Monthly Overview
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-card flat outlined>
                    <v-card-title>Expense</v-card-title>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card flat outlined>
                    <v-card-title>Income</v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-title>
              Expenses by Category
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-card flat color="#FAE2D2" class="my-2">
                  <v-list-item two-line>
                    <v-list-item-icon>
                      <v-icon>mdi-chart-donut</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-subtitle>
                        Food &amp; Beverage
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        £22
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-spacer></v-spacer>
                    <v-list-item-action-text class="orange--text darken-2"
                      >47%</v-list-item-action-text
                    >
                  </v-list-item>
                </v-card>
                <v-card flat color="#F5F8FA" class="my-2">
                  <v-list-item two-line>
                    <v-list-item-icon>
                      <v-icon>mdi-chart-donut</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-subtitle>
                        Groceries
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        £22
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-spacer></v-spacer>
                    <v-list-item-action-text class="blue--text darken-2"
                      >24%</v-list-item-action-text
                    >
                  </v-list-item>
                </v-card>
                <v-card flat color="#F5F8FA" class="my-2">
                  <v-list-item two-line>
                    <v-list-item-icon>
                      <v-icon>mdi-chart-donut</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-subtitle>
                        Household
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        £22
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-spacer></v-spacer>
                    <v-list-item-action-text class="blue--text darken-2"
                      >12%</v-list-item-action-text
                    >
                  </v-list-item>
                </v-card>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer padless color="#fafafa" app>
      <v-col class="text-center" cols="12">
        Company logos provided by <a href="https://clearbit.com">Clearbit</a>
      </v-col>
    </v-footer>
    <create-transactionDialog :dialog.sync="createTransactionDialog" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import BaseButtonPrimary from "@/components/common/BaseButtonPrimary.vue";
import BaseInput from "@/components/common/BaseInput.vue";
import DashboardExtendedSidebar from "@/components/layout/DashboardExtendedSidebar.vue";
import CreateTransactionDialog from "@/components/dialogs/CreateTransactionDialog.vue";
import { getModule } from "vuex-module-decorators";
import BankAccountModule from "@/store/bankAccountModule";
import transactionService from "@/services/transactionService";
import TransactionModel from "@/models/transaction/transactionModel";
import TransactionQueryModel from "@/models/transaction/transactionQueryModel";
import moment from "moment";

const bankAccountModule = getModule(BankAccountModule);

@Component({
  components: {
    BaseInput,
    BaseButtonPrimary,
    DashboardExtendedSidebar,
    CreateTransactionDialog
  }
})
export default class Dashboard extends Vue {
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
    return this.transactions.filter(x => x.vendorName.includes(this.search));
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

  @Watch("bankAccountId")
  private async onBankAccountChanged(bankAccountId: string) {
    this.transactionQuery.bankAccountId = bankAccountId;
    this.transactionQuery.fromUtc = this.dates[0];
    this.transactionQuery.toUtc = this.dates[1];
    this.transactions = await transactionService.getTransactions(
      this.transactionQuery
    );
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

<style scoped>
a:link {
  text-decoration: inherit;
  color: black;
}

a:visited {
  text-decoration: inherit;
  color: black;
}
</style>

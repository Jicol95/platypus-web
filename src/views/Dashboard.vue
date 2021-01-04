<template>
  <div class="dashboard">
    <dashboard-extended-sidebar />
    <v-container class="container-lg">
      <v-row>
        <v-col cols="12" md="7">
          <transaction-list />
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
    <v-footer padless color="#fafafa">
      <v-col class="text-center" cols="12">
        Company logos provided by <a href="https://clearbit.com">Clearbit</a>
      </v-col>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BaseButtonPrimary from "@/components/common/BaseButtonPrimary.vue";
import BaseInput from "@/components/common/BaseInput.vue";
import DashboardExtendedSidebar from "@/components/layout/DashboardExtendedSidebar.vue";
import TransactionList from "@/components/transactions/TransactionList.vue";

@Component({
  components: {
    BaseInput,
    BaseButtonPrimary,
    DashboardExtendedSidebar,
    TransactionList
  }
})
export default class Dashboard extends Vue {}
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

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
              <v-btn fab class="elevation-0" color="primary">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <base-input placeholder="Search" append-icon="mdi-magnify" />
              <base-input
                placeholder=" Transaction Date"
                append-icon="mdi-calendar"
              />
            </v-card-text>
            <v-card-text>
              <v-row class="ma-0 pa-0">
                <v-col class="ma-0 pa-0">
                  <p class="text-caption">Total Expense</p>
                  <p class="text-h5">£22.20</p>
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
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <v-img src="@/assets/logo.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Platypus Finance</v-list-item-title>
                    <v-list-item-subtitle
                      >17 Jun 20 09:40pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer class="pl-4"></v-spacer>
                  <v-list-item-action-text>
                    <p class="my-6 text-h5">£22.20</p>
                  </v-list-item-action-text>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <v-img src="@/assets/logo.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Platypus Finance</v-list-item-title>
                    <v-list-item-subtitle
                      >17 Jun 20 09:40pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer class="pl-4"></v-spacer>
                  <v-list-item-action-text>
                    <p class="my-6 text-h5">£22.20</p>
                  </v-list-item-action-text>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <v-img src="@/assets/logo.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Platypus Finance</v-list-item-title>
                    <v-list-item-subtitle
                      >17 Jun 20 09:40pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer class="pl-4"></v-spacer>
                  <v-list-item-action-text>
                    <p class="my-6 text-h5">£22.20</p>
                  </v-list-item-action-text>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <v-img src="@/assets/logo.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Platypus Finance</v-list-item-title>
                    <v-list-item-subtitle
                      >17 Jun 20 09:40pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer class="pl-4"></v-spacer>
                  <v-list-item-action-text>
                    <p class="my-6 text-h5">£22.20</p>
                  </v-list-item-action-text>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <v-img src="@/assets/logo.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Platypus Finance</v-list-item-title>
                    <v-list-item-subtitle
                      >17 Jun 20 09:40pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-list-item-action-text>
                    <p class="my-6 text-h5">£22.20</p>
                  </v-list-item-action-text>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <v-img src="@/assets/logo.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Platypus Finance</v-list-item-title>
                    <v-list-item-subtitle
                      >17 Jun 20 09:40pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-list-item-action-text>
                    <p class="my-6 text-h5">£22.20</p>
                  </v-list-item-action-text>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <v-img src="@/assets/logo.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Platypus Finance</v-list-item-title>
                    <v-list-item-subtitle
                      >17 Jun 20 09:40pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer class="pl-4"></v-spacer>
                  <v-list-item-action-text>
                    <p class="my-6 text-h5">£22.20</p>
                  </v-list-item-action-text>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <v-img src="@/assets/logo.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Platypus Finance</v-list-item-title>
                    <v-list-item-subtitle
                      >17 Jun 20 09:40pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-list-item-action-text>
                    <p class="my-6 text-h5">£22.20</p>
                  </v-list-item-action-text>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item two-line>
                  <v-list-item-avatar>
                    <v-img src="@/assets/logo.png" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Platypus Finance</v-list-item-title>
                    <v-list-item-subtitle
                      >17 Jun 20 09:40pm</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-list-item-action-text>
                    <p class="my-6 text-h5">£22.20</p>
                  </v-list-item-action-text>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="5">
          <v-card flat>
            <v-card-title>
              <v-btn x-large text color="primary" height="120px" width="100%"
                >Setup Monthly Budget</v-btn
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
    <v-footer padless color="#fff">
      <v-col class="text-center" cols="12">
        Company logos provided by <a href="https://clearbit.com">Clearbit</a>
      </v-col>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BaseInput from "@/components/common/BaseInput.vue";
import DashboardExtendedSidebar from "@/components/layout/DashboardExtendedSidebar.vue";

@Component({ components: { BaseInput, DashboardExtendedSidebar } })
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

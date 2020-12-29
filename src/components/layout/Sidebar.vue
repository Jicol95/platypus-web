<template>
  <div class="sidebar">
    <v-navigation-drawer mini-variant app permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar tile>
          <v-img src="@/assets/logo.png" contain height="30"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list dense nav>
        <div v-for="item in items" :key="item.title">
          <v-list-item light link @click.native="mini = true" :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>

      <template v-slot:append>
        <v-menu top offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar v-bind="attrs" v-on="on" class="px-2 mb-7" tile>
              <v-img src="@/assets/logo.png"></v-img>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-title>Change Password</v-list-item-title>
            </v-list-item>
            <v-list-item @click="onLogout">
              <v-list-item-title>Sign out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import UserModule from "@/store/userModule";
import { Vue, Prop, Component } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

const userModule = getModule(UserModule);
@Component
export default class TheSidebar extends Vue {
  @Prop(Boolean) readonly value!: boolean;

  private drawer = true;
  private mini = true;
  private passwordDialog = false;
  private items: Array<any> = [
    {
      icon: "mdi-home",
      title: "Dashboard",
      route: "/dashboard"
    },
    {
      icon: "mdi-credit-card-multiple",
      title: "Accounts",
      route: "/accounts"
    },
    {
      icon: "mdi-clipboard-text",
      title: "Transactions",
      route: "/transaction"
    },
    {
      icon: "mdi-chart-pie",
      title: "Analyitics",
      route: "/analyitics"
    },
    {
      icon: "mdi-cog-box",
      title: "Settings",
      route: "/settings"
    }
  ];

  get chevronDirection() {
    return this.mini ? "right" : "left";
  }

  private changePassword() {
    this.passwordDialog = true;
  }

  private onLogout() {
    userModule.clearUserData();
  }
}
</script>

<style scoped>
.profile-img {
  border: 2px solid #fff;
  border-radius: 4px;
}
.v-navigation-drawer {
  overflow: visible;
}

.sidebar >>> .v-navigation-drawer__border {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 0px;
}
</style>

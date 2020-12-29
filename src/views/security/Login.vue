<template>
  <div class="login fill-height">
    <v-container class="fill-height pa-0" fluid>
      <v-row class="fill-height" justify="center">
        <v-col cols="12" md="5" class="align-self-center px-6">
          <section class="login-form mx-auto">
            <header>
              <div class="img-container ">
                <v-img src="@/assets/logo.png" max-width="75" class="mb-6" />
              </div>
              <h1 class="title">
                Welcome to
                <span class="text-capitalize">Platypus</span>
              </h1>
              <p class="subtitle-1">Please sign in to continue</p>
            </header>
            <v-form ref="form" v-model="valid" @submit.prevent="login">
              <base-input
                v-model="authorization.emailAddress"
                :rules="[requiredRule, emailAddressRule]"
                required
                placeholder="Email"
                type="email"
              ></base-input>
              <base-input
                v-model="authorization.password"
                :rules="[requiredRule]"
                required
                placeholder="Password"
                type="password"
              ></base-input>
              <v-btn
                @click="dialog = true"
                text
                color="info"
                class="text-capitalize font-weight-regular px-0 mb-4"
              >
                Register Account
              </v-btn>
              <v-btn :loading="loading" block color="primary" type="submit"
                >Sign in</v-btn
              >
            </v-form>
          </section>
        </v-col>
      </v-row>
    </v-container>
    <register-user-dialog :dialog.sync="dialog" />
  </div>
</template>

<script lang="ts">
import { Component, Ref } from "vue-property-decorator";
import BaseInput from "@/components/common/BaseInput.vue";
import RegisterUserDialog from "@/components/dialogs/RegisterUserDialog.vue";
import Validation from "@/mixins/validation";
import { VForm } from "@/types/vForm";
import { getModule } from "vuex-module-decorators";
import UserModule from "@/store/userModule";
import AuthModel from "@/models/auth/AuthModel";

const userModule = getModule(UserModule);

@Component({
  components: {
    BaseInput,
    RegisterUserDialog
  }
})
export default class Login extends Validation {
  @Ref() readonly form!: VForm;

  private authorization: AuthModel = {
    emailAddress: "",
    password: ""
  };

  private valid = false;
  private loading = false;
  private dialog = false;

  private async login() {
    try {
      this.form.validate();
      if (this.valid) {
        this.loading = true;
        await userModule.login(this.authorization);

        this.$router.replace({ name: "Dashboard" });
      }
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.row {
  width: 100% !important;
}
.left-divider {
  border-left: 2px solid rgba(0, 0, 0, 0.1);
}
.login-form {
  max-width: 500px;
}

.img-container {
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div class="register-user-dialog">
    <v-dialog v-model="syncedDialog" max-width="800">
      <v-card>
        <v-card-title>Register Account</v-card-title>
        <v-form ref="form" @submit.prevent="onRegister">
          <v-card-text>
            <v-row>
              <v-col>
                <base-input
                  v-model="user.firstname"
                  required
                  :rules="[requiredRule]"
                  topLabel="Firstname"
                ></base-input>
              </v-col>
              <v-col>
                <base-input
                  v-model="user.lastname"
                  required
                  :rules="[requiredRule]"
                  topLabel="Lastname"
                ></base-input>
              </v-col>
            </v-row>
            <base-input
              v-model="user.emailAddress"
              required
              :rules="[requiredRule]"
              topLabel="Email Address"
            ></base-input>
            <v-row>
              <v-col>
                <base-input
                  v-model="user.password"
                  required
                  :rules="[requiredRule]"
                  topLabel="Password"
                  type="password"
                ></base-input>
              </v-col>
              <v-col>
                <base-input
                  required
                  :rules="[requiredRule]"
                  topLabel="Confirm Password"
                  type="password"
                ></base-input>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <base-button-secondary @click="syncedDialog = false"
              >Cancel</base-button-secondary
            >
            <base-button-primary :loading="loading" type="submit">
              Register
            </base-button-primary>
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
import UserRegisterModel from "@/models/user/userRegisterModel";
import userService from "@/services/userService";
import { getModule } from "vuex-module-decorators";
import SnackbarModule from "@/store/snackbarModule";

const snackbarModule = getModule(SnackbarModule);

@Component({
  components: { BaseInput, BaseButtonPrimary, BaseButtonSecondary }
})
export default class RegisterUserDialog extends Validation {
  @Ref() readonly form!: VForm;
  @PropSync("dialog", { type: Boolean }) syncedDialog!: boolean;
  private loading = false;

  private user: UserRegisterModel = {
    firstname: "",
    lastname: "",
    emailAddress: "",
    password: ""
  };

  private async onRegister() {
    if (!this.form.validate()) {
      return;
    }

    try {
      this.loading = true;
      await userService.registerUser(this.user);
      snackbarModule.setSnackbarMessage("User registered");
    } catch {
      snackbarModule.setSnackbarMessage(
        "Failed to register user, please try again."
      );
    } finally {
      this.loading = false;
      this.syncedDialog = false;
    }
  }
}
</script>

<style scoped></style>

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
                required
                placeholder="Email"
                type="email"
              ></base-input>
              <base-input
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
                Forgotten password?
              </v-btn>
              <v-btn :loading="loading" block color="primary" type="submit"
                >Sign in</v-btn
              >
            </v-form>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Ref } from "vue-property-decorator";
import BaseInput from "@/components/common/BaseInput.vue";
import Validation from "@/mixins/validation";
import { VForm } from "@/types/vForm";

@Component({
  components: {
    BaseInput
  }
})
export default class Login extends Validation {
  @Ref() readonly form!: VForm;

  private valid = false;
  private loading = false;
  private dialog = false;

  private async login() {
    return;
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

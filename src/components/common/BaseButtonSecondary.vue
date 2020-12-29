<template>
  <v-btn
    class="mx-1"
    color="primary"
    outlined
    text
    v-bind="$attrs"
    v-on="$listeners"
    solo
  >
    <template v-for="(_, slot) in $slots">
      <template :slot="slot">
        <slot :name="slot"></slot>
      </template>
    </template>
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class BaseButtonSecondary extends Vue {}
</script>

<style scoped></style>

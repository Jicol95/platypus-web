<template>
  <div class="base-select">
    <p v-if="topLabel" class="subtitle-2 text--primary font-weight-bold mb-2">
      {{ topLabel }}
    </p>
    <v-select v-bind="$attrs" v-on="$listeners" solo>
      <template v-for="(_, slot) in $slots">
        <template :slot="slot">
          <slot :name="slot"></slot>
        </template>
      </template>
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class BaseSelect extends Vue {
  @Prop(String) readonly topLabel!: string;
}
</script>

<style scoped>
.base-select >>> .v-input__slot {
  background: rgba(0, 0, 0, 0.06) !important;
  box-shadow: none !important;
}
</style>

<script setup>
import UKFlag from '../assets/icons/Flag/uk.svg?url'
import USAFlag from '../assets/icons/Flag/usa.svg?url'

const options = [
  { id: 1, icon: UKFlag, label: 'En' },
  { id: 2, icon: USAFlag, label: 'En' }
]

const selected = ref(options[0])
</script>

<template>
  <v-select
    class="w-20"
    v-model="selected"
    :options="options"
    :clearable="false"
    :filterable="false"
    :searchable="false"
  >
    <template #option="{ icon, label }">
      <div class="flex items-center gap-2">
        <img :src="icon" />
        <span>{{ label }}</span>
      </div>
    </template>
    <template #selected-option="{ icon, label }">
      <div class="flex items-center gap-2">
        <img :src="icon" />
        <span>{{ label }}</span>
      </div>
    </template>
  </v-select>
</template>

<style scoped>
::v-deep() {
  --vs-dropdown-option--active-bg: theme(colors.secondaryLightRed);
  --vs-dropdown-min-width: theme(padding.20);
}
::v-deep(.vs__search) {
  @apply hidden;
}

::v-deep(.vs__dropdown-toggle) {
  @apply border-none gap-2;
}

::v-deep(.vs__selected) {
  position: relative !important;
}
</style>

<script setup>
const props = defineProps({ variant: String })
</script>

<template>
  <ButtonBasic class="relative justify-between btnText-1" v-bind="props">
    <span class="absolute left-3"><slot name="startAdornment" /></span>
    <span class="m-auto"><slot name="text" /></span>
    <span class="absolute right-3"><slot name="endAdornment" /></span>
  </ButtonBasic>
</template>

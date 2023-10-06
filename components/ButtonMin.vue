<script setup>
const props = defineProps({ type: { type: String, default: 'solid' } })
</script>

<template>
  <ButtonBasic class="justify-around btnText-2" v-bind="props">
    <slot />
  </ButtonBasic>
</template>

<script setup>
const props = defineProps({ selected: Boolean })
const className = computed(() =>
  props.selected
    ? 'text-textBlack cursor-default border-b-2 border-b-primaryRed'
    : 'text-textGrey cursor-pointer'
)
</script>

<template>
  <div :class="`pb-3 text-1 select-none ${className}`">
    <slot />
  </div>
</template>

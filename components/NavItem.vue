<script setup>
const props = defineProps({ route: String, selected: Boolean })
const className = computed(() =>
  props.selected
    ? 'text-textWhite cursor-default bg-textWhite20 border-l-primaryRed border-l-2'
    : 'text-textWhite45 cursor-pointer'
)
</script>

<template>
  <NuxtLink :to="props.route" :class="`flex gap-6 items-center px-[30px] py-[10px] ${className}`">
    <slot name="icon" />
    <slot name="label" />
  </NuxtLink>
</template>

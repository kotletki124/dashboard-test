<script setup>
const props = defineProps({ class: String })
const containerClass = computed(
  () =>
    `relative overflow-hidden ${!props.class.includes('bg-') && 'bg-secondaryGrey'} ${props.class}`
)
</script>

<template>
  <div :class="containerClass">
    <div class="shimmer absolute top-0 right-0 bottom-0 left-0" />
    <slot />
  </div>
</template>

<style scoped>
.shimmer {
  transform: translateX(-100%);
  animation: shimmer 1.4s infinite;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>

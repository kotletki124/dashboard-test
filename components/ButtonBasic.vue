<script setup>
const props = defineProps({
  variant: { type: String, default: 'solid' },
  type: { type: String, default: 'button' }
})

const className = computed(() => {
  switch (props.variant) {
    case 'solid':
      return 'btn-solid'
    case 'outlined':
      return 'btn-outlined'
    default:
      throw new Error(`Unknown button type: ${props.variant}`)
  }
})
</script>

<template>
  <button :class="`flex items-center px-3 ${className}`" :type="type">
    <slot />
  </button>
</template>

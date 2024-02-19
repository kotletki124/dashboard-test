<script setup>
import { PulseLoader } from 'vue3-spinner'

const props = defineProps({
  variant: { type: String, default: 'solid' },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false }
})

const spinnerColor = computed(() => (props.variant === 'solid' ? 'white' : 'grey'))

const className = computed(() => {
  let className = ''

  switch (props.variant) {
    case 'solid':
      className += 'btn-solid'
      break
    case 'outlined':
      className += 'btn-outlined'
      break
    default:
      throw new Error(`Unknown button type: ${props.variant}`)
  }

  if (props.disabled) className += ' pointer-events-none'

  return className
})
</script>

<template>
  <button :class="`flex items-center px-3 ${className}`" :type="type" :disabled="props.disabled">
    <slot v-if="!props.disabled" />
    <PulseLoader v-else :color="spinnerColor" size="8px" class="m-auto" />
  </button>
</template>

<script setup>
const props = defineProps({ label: String, placeholder: String, required: Boolean })
const type = ref('password')
const input = ref(null)

const handleClick = () => {
  type.value = type.value === 'text' ? 'password' : 'text'
  input.value.inputEl.focus()
}
</script>

<template>
  <InputBasic ref="input" v-bind="props" :type="type">
    <template #endAdornment>
      <IconButton
        type="button"
        @click="handleClick"
        @mousedown="(e) => e.preventDefault()"
        @mouseup="(e) => e.preventDefault()"
      >
        <svgo-24-eye class="w-6 h-6 icon" :fontControlled="false" />
      </IconButton>
    </template>
  </InputBasic>
</template>

<style scoped>
.icon::v-deep(*) {
  fill: theme(colors.textLightGrey);
}
</style>

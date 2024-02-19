<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  required: Boolean,
  type: String,
  disabled: Boolean,
  noHelperText: { type: Boolean, default: false },
  modelValue: String
})

const inputEl = ref(null)
defineExpose({ inputEl })

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <label v-if="label" class="text-textLightGrey">
      {{ label }}
      <span v-if="required" class="text-primaryRed">*</span>
    </label>
    <div class="relative w-full">
      <input
        ref="inputEl"
        :type="type || 'text'"
        :placeholder="placeholder"
        :disabled="disabled"
        class="border-textLineGrey placeholder:text-textLightGrey disabled:text-textLightGrey input"
        v-model="value"
        @focus="(e) => emit('focus', e)"
        @blur="(e) => emit('blur', e)"
      />
      <div class="absolute right-3 leading-[0] -translate-y-[150%]">
        <slot name="endAdornment" />
      </div>
    </div>
    <div v-if="!noHelperText" class="helperText">
      <slot name="helperText">&nbsp;</slot>
    </div>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  height: 48px;
  padding: 11px 16px 12px 16px;
  border-radius: 10px;
  border-width: 1px;
}

.input:focus {
  border-color: #7895ff;
  box-shadow: 0px 0px 0px 2px #4c6fff4d;
}
</style>

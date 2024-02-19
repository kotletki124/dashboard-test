<script setup>
const props = defineProps({ modelValue: Number, validate: Function, disabled: Boolean })
const { modelValue } = toRefs(props)
const emit = defineEmits(['update:modelValue'])
const localValue = ref(props.modelValue.toString())
const localValueBeforeInputChange = ref(null)

watch(modelValue, (newValue) => {
  localValue.value = newValue.toString()
})

function handleFocus(event) {
  localValueBeforeInputChange.value = event.target.value
}

function handleBlur(event) {
  const newValue = +event.target.value
  if (!props.validate(newValue)) localValue.value = localValueBeforeInputChange.value
  else {
    localValueBeforeInputChange.value = newValue.toString()
    emit('update:modelValue', newValue)
  }
}
</script>

<template>
  <InputBasic
    :noHelperText="true"
    v-bind="props"
    v-model="localValue"
    @focus="handleFocus"
    @blur="handleBlur"
    @keyup.enter="handleBlur"
  />
</template>

<script setup>
const props = defineProps({ placeholder: String, modelValue: String })
const emit = defineEmits(['submit'])
const localValue = ref(props.modelValue)
</script>

<template>
  <form class="relative" @submit.prevent="emit('submit', localValue)">
    <InputBasic v-bind="props" :noHelperText="true" v-model="localValue">
      <template #endAdornment>
        <IconButton type="submit">
          <svgo-24-zoom class="w-6 h-6 icon" :fontControlled="false" />
        </IconButton>
      </template>
    </InputBasic>
  </form>
</template>

<style scoped>
.icon::v-deep(*) {
  fill: theme(colors.textLightGrey);
}
</style>

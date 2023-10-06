<script setup>
const props = defineProps({ placeholder: String })
</script>

<template>
  <div class="relative">
    <InputBasic v-bind="props" :noHelperText="true">
      <template #endAdornment>
        <IconButton type="button">
          <svgo-24-zoom class="w-6 h-6 icon" :fontControlled="false" />
        </IconButton>
      </template>
    </InputBasic>
  </div>
</template>

<style scoped>
.icon::v-deep(*) {
  fill: theme(colors.textLightGrey);
}
</style>

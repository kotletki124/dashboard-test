<template>
  <div class="flex justify-between w-full mt-3">
    <div>Showing 12 out of 250</div>
    <div class="flex items-center gap-6">
      <IconButton :disabled="true">
        <svgo-24-chevron_left />
      </IconButton>
      <InputBasic :noHelperText="true" />
      <span>of</span>
      <InputBasic :noHelperText="true" :disabled="true" value="6" />
      <IconButton>
        <svgo-24-chevron_right />
      </IconButton>
    </div>
  </div>
</template>

<style scoped>
::v-deep(.input) {
  @apply w-8 h-8 text-center p-1 rounded-md;
}
</style>

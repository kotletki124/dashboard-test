<script setup>
const props = defineProps({ isBlocked: Boolean })
</script>

<template>
  <ButtonMin variant="outlined" class="w-32 text-textBlack border-textLightGrey ml-20">
    <svgo-24-lock
      v-if="!props.isBlocked"
      class="icon w-6 h-6 :not:hover:text-textGrey"
      :fontControlled="false"
    />
    <span v-if="!props.isBlocked"> block </span>
    <svgo-24-unlock
      v-if="props.isBlocked"
      class="icon w-6 h-6 :not:hover:text-textGrey"
      :fontControlled="false"
    />
    <span v-if="props.isBlocked"> unblock </span>
  </ButtonMin>
</template>

<style scoped>
.icon::v-deep(*) {
  stroke: currentColor;
  fill: none;
}
</style>

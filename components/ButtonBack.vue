<script setup>
const router = useRouter()
</script>

<template>
  <IconButton
    class="w-10 h-10 text-textLightGrey border border-textLineGrey"
    @click="router.back()"
  >
    <svgo-24-arrow_left class="w-6 h-6 icon" :fontControlled="false" />
  </IconButton>
</template>

<style scoped>
.icon::v-deep(*) {
  stroke: currentColor;
  fill: none;
}
</style>

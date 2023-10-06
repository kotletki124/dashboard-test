<script setup>
import IconUser from '~/assets/icons/64/user.svg?url'
</script>

<template>
  <div class="flex gap-5 items-center border border-textLineGrey rounded-lg p-6">
    <img :src="IconUser" />
    <div class="flex flex-col gap-2">
      <h2>John Doe</h2>
      <div class="flex gap-5">
        <div role="button" class="flex gap-2 items-center text-3 text-textGrey">
          <svgo-16-camera class="w-4 h-4 icon" :fontControlled="false" />
          Add photo
        </div>
        <div class="flex gap-2 items-center text-3 text-secondaryGreen">
          <svgo-16-patch_check_fill class="w-4 h-4" :fontControlled="false" />
          Active
        </div>
      </div>
    </div>
    <div class="flex gap-10 ml-auto">
      <div class="flex flex-col gap-2 items-center">
        <div class="text-3 text-textGrey">Total Credit</div>
        <div class="text-2">79</div>
      </div>
      <div class="flex flex-col gap-2 items-center">
        <div class="text-3 text-textGrey">Available Tokens</div>
        <div class="text-2">12</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon::v-deep(*) {
  stroke: currentColor;
  fill: none;
}
</style>

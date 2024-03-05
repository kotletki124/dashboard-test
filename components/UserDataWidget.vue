<script setup>
import IconUser from '~/assets/icons/64/user.svg?url'
const props = defineProps({
  data: { type: Object, default: { loading: true } },
  readOnly: { type: Boolean, default: true },
  updating: Boolean
})
const imageUrl = computed(() => props.data.imageUrl || IconUser)
const emit = defineEmits(['setBlocked'])
</script>

<template>
  <div class="flex gap-5 items-center border border-textLineGrey rounded-lg p-6 max-w-[1200px]">
    <img v-if="!props.data.loading" :src="imageUrl" class="rounded-full w-20 h-20" />
    <Skeleton v-else class="rounded-full w-20 h-20" />
    <div class="flex flex-col gap-2">
      <h2 v-if="!props.data.loading">{{ props.data.name }}</h2>
      <h2 v-else><Skeleton class="w-48 h-[1.7rem] rounded" /></h2>
      <div class="flex gap-5">
        <div role="button" class="flex gap-2 items-center text-3 text-textGrey">
          <svgo-16-camera class="w-4 h-4 icon" :fontControlled="false" />
          Add photo
        </div>
        <div
          v-if="!props.data.loading && !props.data.isBlocked"
          class="flex gap-2 items-center text-3 text-secondaryGreen"
        >
          <svgo-16-patch_check_fill class="w-4 h-4" :fontControlled="false" />
          Active
        </div>
        <div
          v-if="!props.data.loading && props.data.isBlocked"
          class="flex gap-2 items-center text-3 text-primaryRed"
        >
          <svgo-16-patch_lock_fill class="w-4 h-4" :fontControlled="false" />
          Blocked
        </div>
        <div v-if="props.data.loading" class="flex gap-2 items-center text-3">
          <Skeleton class="w-4 h-4 rounded-full" />
          <Skeleton class="w-12 h-4 rounded" />
        </div>
      </div>
    </div>
    <div class="flex gap-10 ml-auto">
      <div class="flex flex-col gap-2 items-center">
        <div class="text-3 text-textGrey">Total Credit</div>
        <div v-if="!props.data.loading" class="text-2">{{ props.data.credits }}</div>
        <Skeleton v-else class="w-12 h-6 rounded" />
      </div>
      <div class="flex flex-col gap-2 items-center">
        <div class="text-3 text-textGrey">Available Tokens</div>
        <div v-if="!props.data.loading" class="text-2">{{ props.data.tokens }}</div>
        <Skeleton v-else class="w-12 h-6 rounded" />
      </div>
    </div>
    <ButtonBlock
      v-if="!props.readOnly"
      variant="outlined"
      class="w-32 text-textBlack border-textLightGrey ml-20"
      :isBlocked="props.data.isBlocked"
      :disabled="props.updating"
      @click="emit('setBlocked', !props.data.isBlocked)"
    />
  </div>
</template>

<style scoped>
.icon::v-deep(*) {
  stroke: currentColor;
  fill: none;
}
</style>

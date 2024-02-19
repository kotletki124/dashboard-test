<script setup>
const show = ref(false)
const sharedClass = computed(
  () => `border ${show.value ? 'border-textLineGrey shadow-md' : 'border-textWhite'}`
)

const containerClass = computed(() => `${sharedClass.value} relative p-1 select-none rounded-t`)
const listClass = computed(
  () => `${sharedClass.value} absolute box-content w-full bg-textWhite border-t-0 rounded-b left-[-1px] top-[100%]`
)

const handleClick = (event) => {
  show.value = !show.value
  event.stopPropagation()
  if (show.value)
    document.addEventListener(
      'click',
      () => {
        show.value = false
      },
      { once: true }
    )
}
</script>

<template>
  <div :class="containerClass">
    <div class="cursor-pointer h-10 bg-textWhite flex items-center p-3" @click="handleClick">
      <slot name="header" />
      <svgo-24-chevron_down />
    </div>
    <div :class="listClass" v-if="show">
      <slot name="list" />
    </div>
  </div>
</template>

<style>
.dropdown-item {
  @apply p-1 rounded;
}
.dropdown-item:hover {
  @apply bg-secondaryLightRed text-textWhite cursor-pointer;
}
.dropdown-item:hover path {
  stroke: currentColor;
  fill: none;
}
</style>

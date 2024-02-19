<script setup>
const props = defineProps({ count: Number, offset: Number, limit: Number, loading: Boolean })
const emit = defineEmits(['filterChange'])

const currPage = ref(getCurrPage(props.offset, props.limit))

const pagesCount = computed(() => Math.ceil(props.count / props.limit))
const startIndex = computed(() => (props.count > 0 ? props.offset + 1 : 0))
const endIndex = computed(() =>
  props.offset + props.limit < props.count ? props.offset + props.limit : props.count
)

watch(
  () => [props.offset, props.limit],
  ([offset, limit]) => {
    currPage.value = getCurrPage(offset, limit)
  }
)

watch(currPage, (newPage) => {
  emit('filterChange', { offset: (newPage - 1) * props.limit })
})

function getCurrPage(offset, limit) {
  return Math.floor(offset / limit) + 1
}
</script>

<template>
  <div class="flex justify-between w-full mt-3">
    <div>Showing {{ startIndex }} - {{ endIndex }} out of {{ props.count }}</div>
    <div class="flex items-center gap-6">
      <IconButton :disabled="currPage <= 1" @click="currPage--">
        <svgo-24-chevron_left />
      </IconButton>
      <InputBasic
        v-if="props.count <= 0"
        :noHelperText="true"
        :disabled="true"
        :model-value="'0'"
      />
      <InputPagination
        v-else
        :disabled="loading || props.count === 0"
        :validate="(value) => Number.isInteger(value) && value > 0 && value <= pagesCount"
        v-model="currPage"
      />
      <span>of</span>
      <InputBasic :noHelperText="true" :disabled="true" :model-value="pagesCount.toString()" />
      <IconButton :disabled="currPage >= pagesCount" @click="currPage++">
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

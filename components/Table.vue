<script setup>
const { data, columns } = defineProps({ data: Array, columns: Array })
const cells = computed(() => {
  return data
    .flatMap((obj) => Object.values(obj))
    .map((prop, ind) => {
      const indInRow = ind % columns.length
      const col = columns[indInRow]
      if (indInRow === 5) console.log(col.props)
      return {
        id: ind,
        component: col.cellComponent,
        props: typeof col.cellProps === 'function' ? col.cellProps(prop) : col.cellProps,
        value: typeof col.cellValue === 'function' ? col.cellValue(prop) : col.cellValue || prop
      }
    })
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex justify-between w-full">
      <InputSearch class="w-96" placeholder="Search" />
      <ButtonMin class="w-56">
        <svgo-24-plus class="w-6 h-6" :fontControlled="false" />
        <span>add new employee</span>
      </ButtonMin>
    </div>
    <div class="grid grid-cols-[repeat(6,auto)] rounded-lg overflow-hidden">
      <div class="headerCell">id</div>
      <div class="headerCell">username</div>
      <div class="headerCell">email</div>
      <div class="headerCell">phone</div>
      <div class="headerCell">credits</div>
      <div class="headerCell">status</div>

      <div v-for="cell of cells" :key="cell.id" class="cell">
        <component :is="cell.component" v-bind="cell.props">
          {{ cell.value }}
        </component>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<style scoped>
.cell:nth-child(6n + 1) {
  @apply border-l;
}

.cell:nth-child(6n) {
  @apply border-r;
}

.cell {
  @apply flex items-center px-6 py-1 h-12 border-b border-textLineGrey;
}

.headerCell {
  @apply cell bg-primaryLightGrey tblHeaderText text-textLightGrey uppercase;
  border-left: 0;
  border-right: 0;
}
</style>

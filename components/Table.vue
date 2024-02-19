<script setup>
import { useAuthStore } from '/store'
import { storeToRefs } from 'pinia'

const props = defineProps({ apiUrl: String, columns: Array })

const { query } = useRoute()
const { offset = 0, limit = 12, search = '', ...outerQueryParams } = query
const filter = reactive({
  offset: +offset,
  limit: +limit,
  search
})

watch(filter, (newFilter) => {
  const queryParams = { ...outerQueryParams, ...newFilter }
  if (queryParams.search.length === 0) delete queryParams.search
  navigateTo({ query: queryParams })
})

const authStore = useAuthStore()
const { token } = storeToRefs(authStore)

const { data, pending, error, refresh } = useFetch(props.apiUrl, {
  method: 'POST',
  body: filter,
  headers: { authorization: token.value },
  default: () => ({ rows: [], count: 0 })
})
const emptyRows = computed(() =>
  Array(filter.limit)
    .fill(null)
    .map(() => {
      const row = {}
      props.columns.forEach((col) => {
        row[col.id] = null
      })
      return row
    })
)
const rows = computed(() => [...data.value.rows, ...emptyRows.value.slice(data.value.rows.length)])
const containerClass = computed(() => {
  return `grid grid-cols-[repeat(${props.columns.length},auto)] auto-rows-[3rem] h-[39rem] rounded-lg overflow-y-scroll`
})
const cellClass = computed(() => {
  return `cell [&:nth-child(${props.columns.length}n)]:border-r [&:nth-child(${props.columns.length}n+1)]:border-l`
})
const cells = computed(() => {
  return rows.value
    .map((row, rowInd) => {
      return Object.entries(row)
        .map(([cellId, cellValue], ind, arr) => {
          const col = props.columns.find((col) => col.id === cellId)

          if (col) {
            const { skeletonClass, ...props } =
              typeof col.cellProps === 'function' ? col.cellProps(row) : col.cellProps
            const value =
              typeof col.cellValue === 'function' ? col.cellValue(row) : col.cellValue || cellValue
            const id = rowInd * arr.length + ind

            if (cellValue === null) return { id, component: 'span', skeletonClass, value: '' }

            return {
              id: rowInd * arr.length + ind,
              component: col.cellComponent,
              skeletonClass,
              props,
              value
            }
          }
        })
        .filter((cell) => cell)
    })
    .flat()
})

function handleFilterChange(overridesArg) {
  const overrides = { ...overridesArg }
  if (typeof overrides.search === 'string' && overrides.search !== filter.search)
    overrides.offset = 0
  Object.assign(filter, overrides)
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex justify-between w-full">
      <InputSearch
        class="w-96"
        placeholder="Search"
        :model-value="filter.search"
        @submit="(value) => handleFilterChange({ search: value })"
      />
      <ButtonMin class="w-56" @click="navigateTo('profile/add-employee')">
        <svgo-24-plus class="w-6 h-6" :fontControlled="false" />
        <span>add new employee</span>
      </ButtonMin>
    </div>
    <div :class="containerClass">
      <div v-for="col of props.columns" :key="'a' + col.id" class="headerCell">
        {{ col.label }}
      </div>

      <div v-for="cell of cells" :key="cell.id" :class="cellClass">
        <component v-if="!pending" :is="cell.component" v-bind="cell.props">
          {{ cell.value }}
        </component>
        <Skeleton v-else :class="cell.skeletonClass" />
      </div>
    </div>
    <Pagination
      :count="data.count"
      :offset="filter.offset"
      :limit="filter.limit"
      @filter-change="handleFilterChange"
    />
  </div>
</template>

<style scoped>
.cell {
  @apply flex items-center px-6 py-1 max-h-12 border-b border-textLineGrey;
}

.headerCell {
  @apply cell sticky bg-primaryLightGrey tblHeaderText text-textLightGrey uppercase;
  border-left: 0;
  border-right: 0;
}
</style>

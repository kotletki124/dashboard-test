<script setup>
defineProps({
  modelValue: Object,
  tabs: Array
})

let emit = defineEmits(['update:modelValue'])

const handleClick = (newTab) => {
  emit('update:modelValue', newTab)
  navigateTo({ query: { tab: newTab.id } })
}
</script>

<template>
  <div class="flex gap-6">
    <TabHeaderItem
      v-for="tab of tabs"
      :key="tab.id"
      :id="tab.id"
      :selected="modelValue.id === tab.id"
      @click="handleClick(tab)"
    >
      {{ tab.label }}
    </TabHeaderItem>
  </div>
</template>

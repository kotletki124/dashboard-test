<script setup>
defineProps({
  modelValue: String,
  tabs: Array
})

let emit = defineEmits(['update:modelValue'])

const handleClick = (newTabId) => {
  emit('update:modelValue', newTabId)
}
</script>

<template>
  <div class="flex gap-6">
    <TabHeaderItem
      v-for="tab of tabs"
      :key="tab.id"
      :selected="modelValue === tab.id"
      @click="handleClick(tab.id)"
    >
      {{ tab.label }}
    </TabHeaderItem>
  </div>
</template>

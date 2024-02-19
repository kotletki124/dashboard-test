<script setup>
const props = defineProps({ modelValue: Object })
</script>

<template>
  <div class="flex flex-col px-6 py-8 bg-primaryLightGrey rounded-lg">
    <InputPassword label="Old Password" v-model="props.modelValue.old" />
    <InputPassword label="New Password" v-model="props.modelValue.new" />
    <InputPassword label="Repeat New Password" v-model="props.modelValue.repeat" />
  </div>
</template>

<script setup>
definePageMeta({ layout: false })
</script>

<template>
  <div class="w-full h-full">
    <NuxtLayout name="default">
      <template #header>
        <h1>Settings</h1>
        <TabsHeader class="mt-3" />
      </template>
      <template #main>Settings</template>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })
</script>

<template>
  <div class="w-full h-full">
    <NuxtLayout name="default">
      <template #header>
        <div class="layoutHeaderSlot">
          <h1>Vehicles</h1>
          <TabsHeader class="mt-3" />
        </div>
      </template>
      <template #main>
        <div class="layoutMainSlot">Vehicles</div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })
const tabs = [
  { id: 'profile', label: 'Profile' },
  { id: 'staff', label: 'Staff' }
]
const tabId = ref(tabs[0].id)
</script>

<template>
  <NuxtLayout name="default">
    <template #header>
      <h1>Profile</h1>
      <TabsHeader class="mt-3" v-model="tabId" :tabs="tabs" />
    </template>
    <template #main>
      <ProfileTab v-if="tabId === 'profile'" />
      <ProfileStaffTab v-if="tabId === 'staff'" />
    </template>
  </NuxtLayout>
</template>

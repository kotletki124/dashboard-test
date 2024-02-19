<script setup>
definePageMeta({
  layout: false
})
const {
  currentRoute: {
    value: {
      query: { tab: tabQuery }
    }
  }
} = useRouter()

if (!tabQuery) navigateTo({ query: { tab: 'profile' } })

const tabs = [
  { id: 'profile', label: 'Profile', order: 0 },
  { id: 'staff', label: 'Staff', order: 1 }
]

const tab = ref(tabs.find((t) => t.id === tabQuery) || tabs[0])
</script>

<template>
  <div class="w-full h-full">
    <NuxtLayout name="default">
      <template #header>
        <div class="layoutHeaderSlot">
          <h1>Profile</h1>
          <TabsHeader class="mt-3" v-model="tab" :tabs="tabs" />
        </div>
      </template>
      <template #main>
        <div class="layoutMainSlot">
          <TabBody :tabOrder="tab.order">
            <ProfileTab v-if="tab.id === 'profile'" />
            <ProfileStaffTab v-if="tab.id === 'staff'" />
          </TabBody>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active,
.page-enter-from,
.page-leave-to {
  transition: all 0.2s;
}
.page-enter-active .layoutHeaderSlot,
.page-enter-active .layoutMainSlot,
.page-leave-active .layoutHeaderSlot,
.page-leave-active .layoutMainSlot {
  transition: all 0.2s;
}
.page-enter-from .layoutHeaderSlot,
.page-enter-from .layoutMainSlot,
.page-leave-to .layoutHeaderSlot,
.page-leave-to .layoutMainSlot {
  opacity: 0;
}
</style>

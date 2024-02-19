<script setup>
import { useAuthStore } from '/store'
import { storeToRefs } from 'pinia'
const authStore = useAuthStore()
const { data } = storeToRefs(authStore)
</script>

<template>
  <div class="w-full h-full">
    <HeaderLogo />
    <div class="flex w-full h-full min-w-[600px]">
      <Nav />
      <div class="relative w-full">
        <UserToolbar class="z-10">
          <LanguageSelect />
          <UserMenu :username="data.name" :avatar="data.imageUrl" />
          <IconButton class="btn-outlined w-10 h-10" @click="navigateTo('/profile/add-employee')">
            <svgo-24-plus class="w-6 h-6" :fontControlled="false" />
          </IconButton>
        </UserToolbar>
        <div class="mt-8 mx-8 layoutHeader">
          <slot name="header" />
        </div>
        <hr class="text-textLineGrey" />
        <div class="p-6 pb-0">
          <slot name="main" />
        </div>
      </div>
    </div>
  </div>
</template>

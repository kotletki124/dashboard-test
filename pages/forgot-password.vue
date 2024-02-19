<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/profile'
  },
  layout: false
})
</script>

<template>
  <div class="w-full h-full">
    <NuxtLayout name="login">
      <template #image>
        <img src="/keys.png" />
      </template>
      <template #main>
        <form class="flex flex-col gap-8">
          <div class="flex flex-col gap-4">
            <h1 class="text-textBlack">Forgot Password?</h1>
            <h3 class="text-textDarkGrey">Do not worry! Just enter your E-mail</h3>
          </div>
          <InputBasic label="Email address" placeholder="Email" />
          <div class="flex flex-col gap-4 -mt-6">
            <Button variant="solid">
              <template #text>restore password</template>
            </Button>
          </div>
          <div>
            I remembered the password!<NuxtLink to="/signin" class="ml-2">SIGN IN</NuxtLink>
          </div>
        </form>
      </template>
    </NuxtLayout>
  </div>
</template>

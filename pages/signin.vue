<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/profile'
  },
  layout: false
})

import { useAuthStore } from '@/store'
const { signIn } = useAuthStore()
const email = ref('admin@example.com'),
  password = ref('123')

const { isLoading, error, execute } = useAsyncState(
  () =>
    signIn({ email: email.value, password: password.value }, { callbackUrl: '/profile' }).then(
      (response) => {
        if (response?.status !== 200) throw new Error('Something went wrong. Try again later.')
      }
    ),
  null,
  { immediate: false }
)

const handleSubmit = (...args) => execute(0, ...args)
</script>

<template>
  <div class="w-full h-full">
    <NuxtLayout name="login">
      <template #image>
        <div>
          <img src="/signin_car.png" alt="car" />
          <h2 class="mt-6">Digitale Lösungen für den Fahrzeughandel</h2>
        </div>
      </template>
      <template #main>
        <form class="flex flex-col gap-8 w-80" @submit.prevent="handleSubmit">
          <div class="flex flex-col gap-4">
            <h1 class="text-textBlack">CAIMAN Dashboard</h1>
            <h3 class="text-textDarkGrey">Hi there! Nice to see you again.</h3>
          </div>
          <div class="flex flex-col">
            <InputBasic label="Email address" placeholder="Email" v-model="email" />
            <InputBasic label="Password" placeholder="Password" v-model="password">
              <template #helperText>
                <span v-if="error" class="text-primaryRed">
                  {{ error.statusMessage }}
                </span>
              </template>
            </InputBasic>
          </div>
          <NuxtLink to="/forgot-password" class="-mt-6">Forgot Password?</NuxtLink>
          <div class="flex flex-col gap-4">
            <Button variant="solid" type="submit" :disabled="isLoading">
              <template #text>sign in</template>
              <template #endAdornment>
                <svgo-24-log_in class="w-6 h-6 icon" :fontControlled="false" />
              </template>
            </Button>
            <Button variant="outlined">
              <template #text>contact support</template>
            </Button>
          </div>
        </form>
      </template>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.icon::v-deep(*) {
  stroke: currentColor;
  fill: none;
}
</style>

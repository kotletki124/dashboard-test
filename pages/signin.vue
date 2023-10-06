<script setup>
definePageMeta({ layout: false })

const handleClick = async () => {
  const { data } = await useFetch('/api/auth/login', { method: 'POST', body: { test: 123 } })

  console.log(data.value)
}
</script>

<template>
  <NuxtLayout name="login">
    <template #image>
      <div>
        <img src="/signin_car.png" alt="car" />
        <h2 class="mt-6">Digitale Lösungen für den Fahrzeughandel</h2>
      </div>
    </template>
    <template #main>
      <form class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h1 class="text-textBlack">CAIMAN Dashboard</h1>
          <h3 class="text-textDarkGrey">Hi there! Nice to see you again.</h3>
        </div>
        <div class="flex flex-col">
          <InputBasic label="Email address" placeholder="Email" />
          <InputBasic label="Password" placeholder="Password" />
        </div>
        <NuxtLink to="/forgot-password" class="-mt-6">Forgot Password?</NuxtLink>
        <div class="flex flex-col gap-4">
          <Button variant="solid">
            <template #text>sign in</template>
            <template #endAdornment>
              <svgo-24-log_in class="w-6 h-6 icon" :fontControlled="false" />
            </template>
          </Button>
          <Button variant="outlined" @click="handleClick">
            <template #text>contact support</template>
          </Button>
        </div>
      </form>
    </template>
  </NuxtLayout>
</template>

<style scoped>
.icon::v-deep(*) {
  stroke: currentColor;
  fill: none;
}
</style>

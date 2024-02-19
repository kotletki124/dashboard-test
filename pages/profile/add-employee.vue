<script setup>
definePageMeta({ layout: false })
</script>

<template>
  <div class="w-full h-full">
    <NuxtLayout name="default">
      <template #header>
        <div class="flex gap-6 mb-8">
          <ButtonBack />
          <h1>New Employee</h1>
        </div>
      </template>
      <template #main>
        <form class="flex flex-col w-96 mt-10">
          <InputBasic label="Username" placeholder="Username" :required="true" />
          <InputBasic label="Email address" placeholder="Email" :required="true" class="mb-2">
            <template #helperText>
              <span class="text-primaryRed">
                Attention! A new password will be sent to the above email!
              </span>
            </template>
          </InputBasic>
          <InputBasic label="Contact phone" placeholder="+497012345678" />
          <InputBasic label="Credits" />
          <InputBasic label="Available tokens" />
          <Button type="solid">
            <template #text>add employee</template>
          </Button>
        </form>
      </template>
    </NuxtLayout>
  </div>
</template>

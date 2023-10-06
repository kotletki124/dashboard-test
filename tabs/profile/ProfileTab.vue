<script setup>
const showPasswordReset = ref(false)
</script>

<template>
  <UserDataWidget class="" />
  <form class="flex flex-col w-96 mt-10">
    <InputBasic label="Username" placeholder="Username" :required="true" />
    <InputBasic label="Email address" placeholder="Email" :required="true" />
    <InputPassword label="Password" placeholder="Password" :required="true" />
    <div role="button" class="text-secondaryBlue" @click="showPasswordReset = !showPasswordReset">
      {{ showPasswordReset ? 'Cancel' : 'Change password' }}
    </div>
    <ResetPasswordWidget v-if="showPasswordReset" />
    <InputBasic label="Contact phone" placeholder="+497012345678" />
    <Button type="solid">
      <template #text>save changes</template>
    </Button>
  </form>
</template>

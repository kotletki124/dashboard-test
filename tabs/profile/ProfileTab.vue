<script setup>
import { useAuthStore } from '/store'
import { storeToRefs } from 'pinia'
const authStore = useAuthStore()
const { data, token } = storeToRefs(authStore)
const showPasswordReset = ref(false)
const { name = '', phone = '', email = '' } = data.value
let form = reactive({
  name,
  phone,
  email,
  password: { old: '', new: '', repeat: '' }
})

watch(data, (value) => {
  const { name = '', phone = '', email = '' } = value
  form = { ...form, name, phone, email }
})

const { isLoading: updating, execute } = useAsyncState(
  async (overrides) => {
    await $fetch(`/api/users/${data.value.id}`, {
      method: 'PUT',
      body: overrides,
      headers: { authorization: token.value }
    })
    await authStore.refresh()
  },
  null,
  { immediate: false }
)

const updateUser = (...args) => execute(0, ...args)
</script>

<template>
  <div>
    <UserDataWidget :data="data" />
    <form class="flex flex-col w-96 mt-10" @submit.prevent="updateUser(form)">
      <InputBasic label="Username" placeholder="Username" :required="true" v-model="form.name" />
      <InputBasic label="Email address" placeholder="Email" :required="true" v-model="form.email" />
      <InputPassword label="Password" placeholder="Password" :required="true" />
      <div role="button" class="text-secondaryBlue" @click="showPasswordReset = !showPasswordReset">
        {{ showPasswordReset ? 'Cancel' : 'Change password' }}
      </div>
      <ResetPasswordWidget v-if="showPasswordReset" v-model="form.password" />
      <InputBasic label="Contact phone" placeholder="+497012345678" v-model="form.phone" />
      <Button type="solid" :disabled="updating">
        <template #text>save changes</template>
      </Button>
    </form>
  </div>
</template>

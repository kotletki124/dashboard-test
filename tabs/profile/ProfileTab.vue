<script setup>
import { useAuthStore } from '/store'
import { storeToRefs } from 'pinia'

/* A workaround for a vue bug when sometimes during the initial render the form ref gets updated, but the UI not */
const key = ref(0)
setTimeout(() => {
  key.value++
}, 250)

const authStore = useAuthStore()
const { data, token } = storeToRefs(authStore)
const showPasswordReset = ref(false)
let form = reactive({})
let formModified = false

const updateFormValue = (value = data.value) => {
  const { name = '', phone = '', email = '', credits = '', tokens = '' } = value
  Object.assign(form, {
    ...form,
    name,
    phone,
    email,
    credits: credits.toString(),
    tokens: tokens.toString(),
    password: {
      old: '',
      new: '',
      repeat: ''
    }
  })
}

onMounted(() => {
  updateFormValue()
})

watch(data, (value) => {
  updateFormValue(value)
})

watch(form, () => {
  formModified = true
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

const handleSubmit = async () => {
  if (formModified) {
    await updateUser(form)
    formModified = false
  }
}
</script>

<template>
  <div>
    <UserDataWidget :data="data" />
    <form :key="key" class="flex flex-col w-96 mt-10" @submit.prevent="handleSubmit">
      <InputBasic label="Username" placeholder="Username" :required="true" v-model="form.name" />
      <InputBasic label="Email address" placeholder="Email" :required="true" v-model="form.email" />
      <div role="button" class="text-secondaryBlue" @click="showPasswordReset = !showPasswordReset">
        {{ showPasswordReset ? 'Cancel' : 'Change password' }}
      </div>
      <TransitionFade>
        <ResetPasswordWidget v-if="showPasswordReset" class="my-2" v-model="form.password" />
      </TransitionFade>
      <InputBasic label="Contact phone" placeholder="+497012345678" v-model="form.phone" />
      <InputBasic label="Credits" v-model="form.credits" />
      <InputBasic label="Available tokens" v-model="form.tokens" />
      <Button type="solid" :disabled="updating">
        <template #text>save changes</template>
      </Button>
    </form>
  </div>
</template>

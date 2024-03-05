<script setup>
import { useAuthStore } from '/store'
import { storeToRefs } from 'pinia'
import { useAsyncState } from '@vueuse/core'

definePageMeta({ layout: false })

/* A workaround for a vue bug when sometimes during the initial render the form ref gets updated, but the UI not */
const key = ref(0)
setTimeout(() => {
  key.value++
}, 250)

const authStore = useAuthStore()
const { token } = storeToRefs(authStore)
const form = reactive({})
let formModified = false

const {
  params: { id }
} = useRoute()
const { data, refresh } = useFetch(`/api/users/${id}`, {
  method: 'GET',
  headers: { authorization: token.value },
  default: () => ({ loading: true })
})

watch(data, (value) => {
  if (!formModified) {
    const { name = '', phone = '', email = '', credits = '', tokens = '' } = value
    Object.assign(form, {
      ...form,
      name,
      phone,
      email,
      credits: credits.toString(),
      tokens: tokens.toString()
    })
  }
})

watch(form, () => {
  formModified = true
})

const { isLoading: updating, execute } = useAsyncState(
  async (overrides) => {
    await $fetch(`/api/users/${id}`, {
      method: 'PUT',
      body: overrides,
      headers: { authorization: token.value }
    })
    await refresh()
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
  <div class="w-full h-full">
    <NuxtLayout name="default">
      <template #header>
        <div class="flex gap-6 mb-8">
          <ButtonBack />
          <h1 v-if="!data.loading">{{ data.name }}</h1>
          <Skeleton v-else class="w-56 h-10 rounded" />
        </div>
      </template>
      <template #main>
        <UserDataWidget
          :data="data"
          :readOnly="false"
          @set-blocked="(value) => updateUser({ isBlocked: value })"
          :updating="updating"
        />
        <form :key="key" class="flex flex-col w-96 mt-10" @submit.prevent="handleSubmit">
          <InputBasic
            label="Username"
            placeholder="Username"
            :required="true"
            v-model="form.name"
          />
          <InputBasic
            label="Email address"
            placeholder="Email"
            :required="true"
            class="mb-2"
            v-model="form.email"
          >
            <template #helperText>
              <span class="text-primaryRed">
                Attention! A new password will be sent to the above email!
              </span>
            </template>
          </InputBasic>
          <InputBasic label="Contact phone" placeholder="+497012345678" v-model="form.phone" />
          <InputBasic label="Credits" v-model="form.credits" />
          <InputBasic label="Available tokens" v-model="form.tokens" />
          <Button variant="solid" type="submit" :disabled="updating">
            <template #text>save changes</template>
          </Button>
        </form>
      </template>
    </NuxtLayout>
  </div>
</template>

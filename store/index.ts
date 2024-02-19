const { signIn, signOut, status, token, data: nuxtAuthData } = useAuth()

export const useAuthStore = defineStore('auth', () => {
  const id = ref(),
    data = ref({})

  watch(nuxtAuthData, async (value, oldValue) => {
    if (value?.id && value?.id !== oldValue?.id) {
      id.value = value.id
      refresh()
    }
  })

  async function refresh() {
    const res = await $fetch(`/api/users/${id.value}`, {
      method: 'GET',
      headers: { authorization: token.value }
    })
    data.value = res
  }

  if (nuxtAuthData?.value?.id) {
    id.value = nuxtAuthData.value.id
    refresh()
  }

  return {
    status,
    token,
    data,
    signIn,
    signOut,
    refresh
  }
})

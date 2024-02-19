<script setup>
import IconUser from '~/assets/icons/32/user.svg?url'
const { signOut } = useAuth()
const props = defineProps({ username: { type: String, default: '' }, avatar: String })
const username = computed(() => {
  let [first, ...last] = props.username.split(' ')
  return last.length > 0 ? `${first.charAt(0)}. ${last.join(' ')}` : props.username
})
</script>

<template>
  <Dropdown>
    <template #header>
      <div class="flex gap-2">
        <img :src="avatar || IconUser" class="w-8 h-8 rounded-full" />
        <div class="flex max-w-28 items-center text-3 text-center truncate">{{ username }}</div>
      </div>
    </template>
    <template #list>
      <div class="flex flex-col gap-2 p-3">
        <div class="dropdown-item flex gap-4 justify-center">
          <svgo-24-user /><span>Profile</span>
        </div>
        <div
          class="dropdown-item flex gap-4 justify-center"
          @click="signOut({ callbackUrl: '/signin' })"
        >
          <svgo-24-log_in /><span>Logout</span>
        </div>
      </div>
    </template>
  </Dropdown>
</template>

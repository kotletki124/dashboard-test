<script setup>
import IconUser from '~/assets/icons/24/user.svg'
import IconRim from '~/assets/icons/24/rim.svg'
import IconSettings from '~/assets/icons/24/settings.svg'
import WavesSvg from '~/assets/waves.svg?url'

const items = [
  { route: '/profile', label: 'Profile', icon: IconUser },
  { route: '/vehicles', label: 'Vehicles', icon: IconRim },
  { route: '/settings', label: 'Settings', icon: IconSettings }
]

const route = ref(useRoute().path)
</script>

<template>
  <div class="flex flex-col justify-between bg-primaryDark w-50 shrink-0">
    <div class=".nav mt-[115px]">
      <NavItem
        v-for="item of items"
        :key="item.route"
        :route="item.route"
        :selected="route.startsWith(item.route)"
        @click="route = item.route"
      >
        <template #icon>
          <component :is="item.icon" class="w-6 h-6 icon" :fontControlled="false" />
        </template>
        <template #label>{{ item.label }}</template>
      </NavItem>
    </div>
    <img :src="WavesSvg" />
  </div>
</template>

<style scoped>
.icon::v-deep(*) {
  stroke: currentColor;
  fill: none;
}
</style>

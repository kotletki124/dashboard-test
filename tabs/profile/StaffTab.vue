<script setup>
import { NuxtLink } from '#components'
import { Chip } from '#components'

const columns = [
  {
    id: 'id',
    label: 'id',
    cellComponent: 'span',
    cellProps: { skeletonClass: 'w-10 h-4 rounded' }
  },
  {
    id: 'name',
    label: 'username',
    cellComponent: NuxtLink,
    cellProps: ({ id }) => ({
      to: `/profile/edit-employee/${id}`,
      class: 'text-secondaryBlue',
      skeletonClass: 'w-32 h-4 rounded'
    })
  },
  {
    id: 'email',
    label: 'email',
    cellComponent: 'span',
    cellProps: { skeletonClass: 'w-48 h-4 rounded' }
  },
  {
    id: 'phone',
    label: 'phone',
    cellComponent: 'span',
    cellProps: { skeletonClass: 'w-28 h-4 rounded' }
  },
  {
    id: 'credits',
    label: 'credits',
    cellComponent: 'span',
    cellProps: { skeletonClass: 'w-8 h-4 rounded' }
  },
  {
    id: 'isBlocked',
    label: 'status',
    cellComponent: Chip,
    cellValue: ({ isBlocked }) => (isBlocked ? 'blocked' : 'active'),
    cellProps: ({ isBlocked }) => ({
      class: `w-[4.5rem] ${isBlocked ? 'chipRed' : 'chipGreen'}`,
      skeletonClass: 'w-[4.5rem] h-6 rounded-md'
    })
  }
]
</script>

<template>
  <Table :columns="columns" apiUrl="/api/users" />
</template>

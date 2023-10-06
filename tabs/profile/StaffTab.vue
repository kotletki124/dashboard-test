<script setup>
import { NuxtLink } from '#components'
import { Chip } from '#components'
const data = [
  {
    id: 1,
    username: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+497074559490',
    credits: 100,
    active: true
  },
  {
    id: 2,
    username: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+497074559491',
    credits: 50,
    active: true
  },
  {
    id: 3,
    username: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    phone: '+497074559492',
    credits: 75,
    active: true
  },
  {
    id: 4,
    username: 'Sara Davis',
    email: 'sara.davis@example.com',
    phone: '+497074559493',
    credits: 30,
    active: false
  },
  {
    id: 5,
    username: 'Robert Wilson',
    email: 'robert.wilson@example.com',
    phone: '+497074559494',
    credits: 0,
    active: true
  },
  {
    id: 6,
    username: 'Emily Brown',
    email: 'emily.brown@example.com',
    phone: '+497074559495',
    credits: 60,
    active: true
  },
  {
    id: 7,
    username: 'David Lee',
    email: 'david.lee@example.com',
    phone: '+497074559496',
    credits: 25,
    active: false
  },
  {
    id: 8,
    username: 'Linda Hall',
    email: 'linda.hall@example.com',
    phone: '+497074559497',
    credits: 90,
    active: true
  },
  {
    id: 9,
    username: 'William Clark',
    email: 'william.clark@example.com',
    phone: '+497074559498',
    credits: 70,
    active: true
  },
  {
    id: 10,
    username: 'Mary Adams',
    email: 'mary.adams@example.com',
    phone: '+497074559499',
    credits: 10,
    active: false
  },
  {
    id: 11,
    username: 'James Wilson',
    email: 'james.wilson@example.com',
    phone: '+497074559410',
    credits: 45,
    active: true
  },
  {
    id: 12,
    username: 'Susan Taylor',
    email: 'susan.taylor@example.com',
    phone: '+497074559411',
    credits: 5,
    active: false
  }
]
const columns = [
  { id: 'id', label: 'id', cellComponent: 'span', cellProps: {} },
  {
    id: 'username',
    label: 'username',
    cellComponent: NuxtLink,
    cellProps: { to: '#', class: 'text-secondaryBlue' }
  },
  { id: 'email', label: 'email', cellComponent: 'span', cellProps: {} },
  { id: 'phone', label: 'phone', cellComponent: 'span', cellProps: {} },
  { id: 'credits', label: 'credits', cellComponent: 'span', cellProps: {} },
  {
    id: 'status',
    label: 'status',
    cellComponent: Chip,
    cellValue: (value) => (value ? 'active' : 'blocked'),
    cellProps: (value) => ({ class: `w-[4.5rem] ${value ? 'chipGreen' : 'chipRed'}` })
  }
]
</script>

<template>
  <Table :columns="columns" :data="data" />
</template>

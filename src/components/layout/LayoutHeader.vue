<script setup>
import { adminNavigationList, userNavigationList, navigationToKor } from '@/lib/navigator'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isAdmin = computed(() => route.path.startsWith('/admin'))
const navigationList = computed(() => (isAdmin.value ? adminNavigationList : userNavigationList))
const basePath = computed(() => (isAdmin.value ? '/admin' : ''))

// item을 경로로 변환
const resolvePath = (item) => {
  return `${basePath.value}${item.startsWith('/') ? item : '/' + item}`
}

// 현재 경로가 해당 item으로 시작하는지 확인
const isActive = (item) => {
  const fullPath = resolvePath(item)
  return route.path.startsWith(fullPath)
}
</script>

<template>
  <header class="bg-primary">
    <div class="flex items-center max-w-base mx-auto py-2">
      <RouterLink to="/" class="flex items-center">
        <div>
          <img src="/images/headerLogo.png" alt="Logo" class="w-full h-full" />
        </div>
        <span class="font-bold text-[1.5rem] text-lightblue mx-4">EcoLink</span>
      </RouterLink>
      <nav class="flex gap-4">
        <span
          v-for="item in navigationList"
          :key="item"
          :class="['hover:cursor-pointer', isActive(item) ? 'text-white' : 'text-disabled']"
        >
          <RouterLink :to="resolvePath(item)">
            {{ navigationToKor[item] }}
          </RouterLink>
        </span>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { adminNavigationList, userNavigationList, navigationToKor } from '@/lib/navigator'
import { notificationList } from '@/lib/notification'
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { generateWebexRoom } from '@/service/webex'

const route = useRoute()

const isAdmin = computed(() => route.path.startsWith('/admin'))
const navigationList = computed(() => (isAdmin.value ? adminNavigationList : userNavigationList))
const basePath = computed(() => (isAdmin.value ? '/admin' : ''))

const resolvePath = (item) => {
  return `${basePath.value}${item.startsWith('/') ? item : '/' + item}`
}

const isActive = (item) => {
  const fullPath = resolvePath(item)
  return route.path.startsWith(fullPath)
}

const notifications = ref(notificationList)

const unreadCount = computed(
  () => notifications.value.filter((n) => n.read === false || n.read === undefined).length,
)

const dropdownVisible = ref(false)
const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}

const alertRef = ref(null)
const handleClickOutside = (e) => {
  if (alertRef.value && !alertRef.value.contains(e.target)) {
    dropdownVisible.value = false
  }
}

const goToActivityRoom = async (activity) => {
  if (activity.webexUrl) {
    window.open(activity.url, '_blank')
  } else {
    await generateWebexRoom(activity)
  }

  if (activity.webexUrl) {
    window.open(activity.webexUrl, '_blank') // 새 탭에서 열기
  } else {
    alert('Webex URL이 없습니다.')
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
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

      <nav class="flex gap-4 grow">
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

      <div class="mr-8 flex gap-4 items-center">
        <div class="relative w-8 h-8" ref="alertRef">
          <img
            src="/images/alert.png"
            alt="알림"
            class="w-full h-full hover:cursor-pointer bg-disabled"
            @click.stop="toggleDropdown"
          />
          <div
            v-if="unreadCount > 0"
            class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow"
          >
            {{ unreadCount }}
          </div>

          <!-- 드롭다운 -->
          <div
            v-if="dropdownVisible"
            class="absolute right-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-md z-50"
          >
            <div v-if="notifications.length" class="p-2 max-h-60 overflow-y-auto">
              <div
                v-for="(notification, index) in notifications"
                :key="index"
                :class="[
                  'p-2 border-b last:border-none hover:bg-gray-50 rounded-sm',
                  notification.read ? 'bg-gray-100' : '',
                ]"
                @click="
                  () => {
                    notification.read = true
                  }
                "
              >
                <p class="font-semibold text-sm text-gray-800">{{ notification.title }}</p>
                <p class="text-xs text-gray-600">{{ notification.description }}</p>
                <button
                  v-if="notification.activity"
                  class="mt-2 text-xs text-blue-500 hover:underline"
                  @click="goToActivityRoom(notification.activity)"
                >
                  참여하기 →
                </button>
              </div>
            </div>
            <div v-else class="p-2 text-sm text-gray-500 text-center">알림이 없습니다</div>
          </div>
        </div>

        <img src="/images/logout.png" alt="로그아웃" class="w-6 h-6 hover:cursor-pointer" />
      </div>
    </div>
  </header>
</template>

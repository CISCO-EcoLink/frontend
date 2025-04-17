<script setup>
import { ref } from 'vue'

const badges = ref([
  {
    title: '첫 봉사 인증',
    description: '첫 번째 봉사활동을 완료했어요!',
    icon: '/images/badge_first.png',
    achieved: true,
  },
  {
    title: '매일매일 봉사',
    description: '3일 연속 봉사활동을 달성했어요!',
    icon: '/images/badge_daily.png',
    achieved: true,
  },
  {
    title: '전국 투어 봉사',
    description: '5개 이상의 지역에서 봉사했어요!',
    icon: '/images/badge_tour.png',
    achieved: false,
  },
  {
    title: '완벽 출석상',
    description: '한 달 동안 매주 봉사에 참여했어요!',
    icon: '/images/badge_perfect.png',
    achieved: false,
  },
])
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
    <div
      v-for="(badge, index) in badges"
      :key="index"
      class="flex flex-col items-center text-center border rounded-xl p-4 shadow-sm"
      :class="badge.achieved ? 'bg-white' : 'bg-gray-100 opacity-50'"
    >
      <img :src="badge.icon" alt="badge icon" class="w-16 h-16 mb-2" />
      <p class="font-semibold">{{ badge.title }}</p>
      <p class="text-xs text-gray-500">{{ badge.description }}</p>
    </div>
  </div>
</template>

<style scoped>
img {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}
</style>

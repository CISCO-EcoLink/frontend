<script setup>
import UserCalendar from '@/components/UserCalendar.vue'
import { userList } from '@/lib/user'
import { ref } from 'vue'
import VolunteerAchievement from '@/components/VolunteerAchievement.vue'

const user = ref(userList[0])
</script>

<template>
  <section class="w-full flex flex-col gap-4 px-8">
    <div class="flex flex-col gap-4 bg-white rounded-base shadow-lg p-4">
      <p class="font-semibold text-2xl">기본 정보</p>
      <ul class="flex flex-col w-full divide-y divide-gray-200 text-sm">
        <!-- 프로필 사진 안내 -->
        <li class="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 py-3">
          <span class="font-semibold w-32 shrink-0">프로필 사진</span>
          <span class="grow text-gray-600"
            >게시판과 쪽지에서 더 잘 보이도록 프로필 사진을 추가해보세요.</span
          >
          <img
            class="mr-4 w-9 h-9 rounded-full object-cover hover:cursor-pointer"
            src="/images/userIcon.png"
            alt="프로필 사진"
          />
        </li>

        <!-- 이름 -->
        <li class="flex items-center gap-4 py-3">
          <span class="font-semibold w-32 shrink-0">이름</span>
          <span class="grow">{{ user.name }}</span>
          <img
            class="mr-4 w-7 h-7 object-cover hover:cursor-pointer"
            src="/images/pencil.png"
            alt="프로필 사진"
          />
        </li>

        <!-- 지역 -->
        <li class="flex items-center gap-4 py-3">
          <span class="font-semibold w-32 shrink-0">지역</span>
          <span>{{ user.region }}</span>
        </li>

        <!-- 메일 -->
        <li class="flex items-center gap-4 py-3">
          <span class="font-semibold w-32 shrink-0">메일</span>
          <span>{{ user.email }}</span>
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-4 bg-white rounded-base shadow-lg p-4">
      <p class="font-semibold text-2xl">내 활동</p>
      <UserCalendar />
    </div>
    <div class="flex flex-col gap-4 bg-white rounded-base shadow-lg p-4">
      <p class="font-semibold text-2xl">도감</p>
      <VolunteerAchievement />
    </div>
  </section>
</template>

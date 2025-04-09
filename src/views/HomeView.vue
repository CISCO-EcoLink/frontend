<script setup>
import AppPagination from '@/components/AppPagination.vue'
import { regionRankList, userRankList } from '@/lib/rank'
import { activityList } from '@/lib/user'
import { ref } from 'vue'

const regionCurrentPage = ref(1)
const regionRankingList = regionRankList
const userRankingList = userRankList.slice(0, 10) // 상위 10명만 예시
const userActivityList = [activityList[3], activityList[1]]

const isActivityModalOpen = ref(false)
const isDetailModalOpen = ref(false)
const selectedActivity = ref({})

const openActivityModal = () => {
  isActivityModalOpen.value = true
}

const closeActivityModal = () => {
  isActivityModalOpen.value = false
}

const openDetailModal = (activity) => {
  isActivityModalOpen.value = false
  isDetailModalOpen.value = true
  selectedActivity.value = activity
}

const closeDetailModal = () => {
  isDetailModalOpen.value = false
}

const sendAlert = () => {
  if (selectedActivity.value?.region) {
    alert(`${selectedActivity.value.region} 지역에 봉사 모집 알림을 보냈습니다`)
  } else {
    alert('지역 정보가 없습니다')
  }
}
</script>

<template>
  <section class="grow flex flex-col items-center">
    <div class="h-screen">
      <img src="/images/logo.png" alt="Logo" class="w-[25rem] my-10" />
      <p class="flex flex-col gap-10 text-3xl font-bold text-center">
        <span>EcoLink로</span><span> 봉사를 더 쉽게 </span>
      </p>
    </div>
    <div class="w-full flex flex-col items-center gap-10 mb-10">
      <div class="w-full flex flex-col gap-4">
        <p class="flex items-center gap-2 font-semibold text-lg">
          <span>지역 봉사 랭킹</span>
        </p>
        <div class="w-full px-4">
          <table class="w-full text-center">
            <thead>
              <tr class="text-lg border-b border-black">
                <th class="w-1/8">랭킹</th>
                <th class="w-3/4">지역</th>
                <th class="w-1/8">점수</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(region, index) in regionRankingList.slice(
                  (regionCurrentPage - 1) * 5,
                  regionCurrentPage * 5,
                )"
                :key="index"
              >
                <td class="py-1 relative">
                  <img
                    v-if="region.rank === 1"
                    src="/images/goldCrown.png"
                    alt="Gold Crown"
                    class="absolute right-2/3 w-5"
                  />
                  <img
                    v-if="region.rank === 2"
                    src="/images/silverCrown.png"
                    alt="Silver Crown"
                    class="absolute right-2/3 w-5"
                  />
                  <img
                    v-if="region.rank === 3"
                    src="/images/copperCrown.png"
                    alt="Copper Crown"
                    class="absolute right-2/3 w-5"
                  />
                  {{ region.rank }}
                </td>
                <td class="py-1">{{ region.region }}</td>
                <td class="py-1">{{ region.score }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-center">
            <AppPagination
              v-model:currentPage="regionCurrentPage"
              :totalItems="regionRankingList.length"
              :pageSize="5"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col gap-4">
        <p class="flex items-center gap-2 font-semibold text-lg">
          <span>지역 봉사 랭킹</span>
        </p>
        <div class="w-full px-4">
          <table class="w-full text-center">
            <thead>
              <tr class="text-lg border-b border-black">
                <th class="w-1/8">랭킹</th>
                <th class="w-1/8">이름</th>
                <th class="w-1/2">지역</th>
                <th class="w-1/8">소속</th>
                <th class="w-1/8">점수</th>
              </tr>
            </thead>
            <tbody class="mt-4">
              <tr v-for="(user, index) in userRankingList" :key="index">
                <td class="py-1 relative">
                  <img
                    v-if="user.rank === 1"
                    src="/images/goldCrown.png"
                    alt="Gold Crown"
                    class="absolute left-0 w-5"
                  />
                  <img
                    v-if="user.rank === 2"
                    src="/images/silverCrown.png"
                    alt="Silver Crown"
                    class="absolute left-0 w-5"
                  />
                  <img
                    v-if="user.rank === 3"
                    src="/images/copperCrown.png"
                    alt="Copper Crown"
                    class="absolute left-0 w-5"
                  />
                  <span>{{ user.rank }}</span>
                </td>
                <td class="py-1">{{ user.name }}</td>
                <td class="py-1">{{ user.region }}</td>
                <td class="py-1">{{ user.organization }}</td>
                <td class="py-1">{{ user.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="w-full flex justify-center items-center text-lg font-semibold bg-third text-white rounded-base overflow-hidden"
      >
        <span
          class="grow text-center py-2 hover:bg-primary transition-colors duration-300"
          @click="openActivityModal"
        >
          진행중인 봉사
        </span>
        <span>|</span>
        <RouterLink
          to="/volunteer"
          class="grow text-center py-2 hover:bg-primary transition-colors duration-300"
        >
          봉사하러 가기
        </RouterLink>
      </div>
      <div
        v-if="isActivityModalOpen"
        class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-xl shadow-lg p-6 w-[40rem] relative">
          <button
            class="absolute top-3 right-3 text-gray-500 hover:text-black"
            @click="closeActivityModal"
          >
            ✕
          </button>
          <h2 class="text-xl font-bold mb-4">진행중인 봉사</h2>
          <div class="border border-base rounded-md"></div>
          <table class="w-full text-center mt-4 shadow-lg">
            <thead>
              <tr class="text-lg border-b border-black">
                <th class="w-1/6">Level</th>
                <th class="w-1/3">지역</th>
                <th class="w-1/6">적정 인원</th>
                <th class="w-1/6">상태</th>
                <th class="w-1/6">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(activity, index) in userActivityList" :key="index">
                <td class="py-1">{{ activity.level }}</td>
                <td class="py-1">{{ activity.region }}</td>
                <td class="py-1 font-semibold">{{ activity.requireUser }}인</td>
                <td class="py-1">
                  <span v-if="activity.state === 'accept'" class="text-secondary font-medium"
                    >모집 완료</span
                  >
                  <span v-else-if="activity.state === 'pending'" class="text-third font-medium"
                    >모집중</span
                  >
                  <span v-else-if="activity.state === 'reject'" class="text-red-500 font-medium"
                    >반려</span
                  >
                  <span v-else-if="activity.state === 'complete'" class="font-medium">완료</span>
                </td>
                <td class="py-1">
                  <button
                    class="bg-third text-white rounded-md px-4 py-2 hover:bg-primary transition-colors duration-300"
                    @click="openDetailModal(activity)"
                  >
                    상세보기
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        v-if="isDetailModalOpen"
        class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      >
        <div
          class="bg-white rounded-xl shadow-lg p-6 w-[60vw] relative max-h-[70vh] overflow-y-auto"
        >
          <div class="flex border-b-2 border-base">
            <h2 class="text-xl font-bold mb-4">상세 내용</h2>
            <button
              class="absolute top-3 right-3 text-gray-500 hover:text-black"
              @click="closeDetailModal"
            >
              ✕
            </button>
          </div>
          <div class="flex flex-col gap-2 font-semibold">
            <p>봉사지역 : {{ selectedActivity.region }}</p>
            <p>Level : {{ selectedActivity.level }}</p>
            <p>적정 인원 : {{ selectedActivity.curUser }} / {{ selectedActivity.requireUser }}</p>
            <p>날짜 : {{ selectedActivity.date }}</p>
            <p>시각 : {{ selectedActivity.time }}</p>
          </div>
          <div>
            <div v-if="selectedActivity.beforeImg" class="flex flex-col items-center">
              <p class="font-semibold text-lg">Before</p>
              <img
                :src="selectedActivity.beforeImg"
                alt="Before Image"
                class="w-full max-w-md rounded-lg shadow-md mt-2"
              />
            </div>

            <div v-if="selectedActivity.afterImg" class="flex flex-col items-center">
              <p class="font-semibold text-lg">After</p>
              <img
                :src="selectedActivity.afterImg"
                alt="After Image"
                class="w-full max-w-md rounded-lg shadow-md mt-2"
              />
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex gap-2 mt-6">
              <button
                class="px-4 py-2 bg-secondary text-white font-semibold rounded-md hover:bg-secondary/80 transition"
                v-if="selectedActivity.curUser < selectedActivity.requireUser"
                @click="sendAlert"
              >
                모집하기
              </button>

              <button
                class="px-4 py-2 bg-third text-white font-semibold rounded-md hover:bg-third/80 transition"
                @click="
                  () => {
                    closeDetailModal()
                    openActivityModal()
                  }
                "
              >
                뒤로가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

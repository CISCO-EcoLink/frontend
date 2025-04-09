<script setup>
import { activityList } from '@/lib/user'
import { computed, ref, watch } from 'vue'
import ArticleContent from './ArticleContent.vue'
import GoogleMap from './GoogleMap.vue'
import { getLatLng } from '@/lib/coordination'

const props = defineProps({
  selectedRegion: { type: String, required: true },
  selectedDistrict: { type: String, required: true },
})

const selectedMarker = ref(null)
const isModalOpen = ref(false)
const selectedActivity = ref({})
const loading = ref(false)

const volunteerList = ref([activityList[0], activityList[1], activityList[2]])

const center = computed(() => getLatLng(props.selectedRegion, props.selectedDistrict))

const markers = computed(() => {
  if (!center.value) return []
  return [
    {
      lat: center.value.lat - 0.003,
      lng: center.value.lng + 0.002,
      title: '봉사 1',
    },
    {
      lat: center.value.lat + 0.002,
      lng: center.value.lng - 0.003,
      title: '봉사 2',
    },
    {
      lat: center.value.lat + 0.001,
      lng: center.value.lng + 0.002,
      title: '봉사 3',
    },
  ]
})

// 지역 변경 시 초기화 + 로딩 효과
watch(
  () => [props.selectedRegion, props.selectedDistrict],
  () => {
    loading.value = true
    selectedMarker.value = null
    selectedActivity.value = {}
    isModalOpen.value = false

    // 약간의 딜레이로 로딩 표현
    setTimeout(() => {
      loading.value = false
    }, 500)
  },
  { immediate: true },
)

const openModal = (activity) => {
  selectedActivity.value = activity
  isModalOpen.value = true
}
const closeModal = () => {
  isModalOpen.value = false
}
const reserveHandler = (user) => {
  alert(user === 0 ? '예약되었습니다.' : '참여 신청이 완료되었습니다.')
  closeModal()
}
</script>

<template>
  <section class="relative grow flex flex-wrap justify-center items-center gap-4">
    <Transition class="absolute" name="fade">
      <div v-if="loading" class="w-full text-center text-xl text-gray-500 py-10">
        로딩 중입니다...
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="!loading" class="w-2/5 h-[30rem]">
        <ArticleContent title="지도">
          <GoogleMap
            :center="center"
            :markers="markers"
            :zoom="14"
            v-model:selectedMarker="selectedMarker"
          />
        </ArticleContent>
      </div>
    </Transition>

    <Transition name="fade">
      <div v-if="!loading && selectedMarker" class="w-2/5 h-[30rem]">
        <ArticleContent
          title="카메라"
          :description="`${props.selectedRegion} ${props.selectedDistrict}`"
        >
          <img src="/images/before.png" alt="before Img" class="w-full h-full object-center" />
        </ArticleContent>
      </div>
    </Transition>

    <Transition name="fade">
      <table v-if="!loading && selectedMarker" class="w-[70vw] text-center mt-4 shadow-lg">
        <thead>
          <tr class="text-lg border-b border-black">
            <th class="w-1/6">Level</th>
            <th class="w-1/3">지역</th>
            <th class="w-1/6">적정 인원</th>
            <th class="w-1/6">예약</th>
            <th class="w-1/6">봉사</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(activity, index) in volunteerList" :key="index">
            <td class="py-1">{{ activity.level }}</td>
            <td class="py-1">{{ props.selectedRegion + ' ' + props.selectedDistrict }}</td>
            <td class="py-1 font-semibold">{{ activity.requireUser }}인</td>
            <td class="py-1">
              <span
                v-if="activity.state === 'accept' || activity.curUser == activity.requireUser"
                class="text-red font-medium"
                >불가능</span
              >
              <span v-else class="text-secondary font-medium">가능</span>
            </td>
            <td class="py-1">
              <button
                class="bg-third text-white rounded-md px-4 py-2 hover:bg-primary transition-colors duration-300"
                @click="openModal(activity)"
              >
                예약하기
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Transition>

    <div v-if="isModalOpen" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-lg p-6 w-[60vw] relative max-h-[70vh] overflow-y-auto">
        <div class="flex border-b-2 border-base">
          <h2 class="text-xl font-bold mb-4">상세 내용</h2>
          <button class="absolute top-3 right-3 text-gray-500 hover:text-black" @click="closeModal">
            ✕
          </button>
        </div>
        <div class="flex flex-col gap-2 font-semibold">
          <p>봉사지역 : {{ `${props.selectedRegion} ${props.selectedDistrict}` }}</p>
          <p>Level : {{ selectedActivity.level }}</p>
          <p>적정 인원 : {{ selectedActivity.curUser }} / {{ selectedActivity.requireUser }}</p>
          <p>날짜 : {{ selectedActivity.date }}</p>
          <p>시각 : {{ selectedActivity.time }}</p>
        </div>
        <div class="mt-4">
          <div v-if="selectedActivity.beforeImg" class="flex flex-col items-center">
            <p class="font-semibold text-lg">Before</p>
            <img
              :src="selectedActivity.beforeImg"
              alt="Before Image"
              class="w-full max-w-md rounded-lg shadow-md mt-2"
            />
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex gap-2 mt-6">
            <button
              class="px-4 py-2 bg-secondary text-white font-semibold rounded-md hover:bg-secondary/80 transition"
              v-if="selectedActivity.curUser < selectedActivity.requireUser"
              @click="reserveHandler(selectedActivity.curUser)"
            >
              {{ selectedActivity.curUser > 0 ? '참여하기' : '예약하기' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

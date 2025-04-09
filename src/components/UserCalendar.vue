<script setup>
import { ref } from 'vue'

const currentMonth = ref(3)
const currentYear = ref(2025)

const days = Array.from({ length: 31 }, (_, i) => i + 1)
const weekDays = ['일', '월', '화', '수', '목', '금', '토']

const events = [
  { day: 1, status: 'complete' },
  { day: 1, status: 'pending' },
  { day: 1, status: 'rejected' },
  { day: 2, status: 'complete' },
  { day: 5, status: 'complete' },
  { day: 12, status: 'complete' },
  { day: 12, status: 'complete' },
  { day: 19, status: 'pending' },
  { day: 26, status: 'rejected' },
  // ... (you can add more event data as needed)
]

const getEventsByDay = (day) => {
  return events.filter((event) => event.day === day)
}

const getColorClass = (status) => {
  switch (status) {
    case 'complete':
      return 'bg-green-400'
    case 'pending':
      return 'bg-blue-400'
    case 'rejected':
      return 'bg-orange-400'
    default:
      return ''
  }
}
</script>

<template>
  <div class="w-full max-w-5xl mx-auto relative">
    <div class="absolute right-0">
      <div class="flex justify-end gap-4 text-sm text-gray-700 mt-4 pr-4">
        <div class="flex items-center gap-1">
          <span class="w-4 h-4 bg-green-400 rounded"></span> 완료
        </div>
        <div class="flex items-center gap-1">
          <span class="w-4 h-4 bg-blue-400 rounded"></span> 신청
        </div>
        <div class="flex items-center gap-1">
          <span class="w-4 h-4 bg-orange-400 rounded"></span> 거절
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center px-4 py-2 w-fit gap-4 mx-auto">
      <button class="text-xl text-disabled">«</button>
      <h2 class="text-xl font-bold">{{ currentYear }}.{{ currentMonth }}</h2>
      <button class="text-xl text-disabled">»</button>
    </div>
    <div class="grid grid-cols-7 gap-px bg-gray-300 rounded-lg overflow-hidden">
      <!-- Weekdays -->
      <div
        v-for="day in weekDays"
        :key="day"
        class="bg-gray-100 text-center py-2 font-semibold text-sm"
      >
        {{ day }}
      </div>

      <!-- Dates -->
      <div v-for="day in days" :key="day" class="bg-white min-h-[80px] p-1 text-xs align-top">
        <div class="font-semibold mb-1">{{ day }}</div>
        <div class="flex flex-col gap-1">
          <div
            v-for="(event, idx) in getEventsByDay(day)"
            :key="idx"
            :class="`${getColorClass(event.status)} text-white text-[10px] rounded px-1 py-0.5 text-center`"
          >
            00:00 ~ 00:00
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional custom styles */
</style>

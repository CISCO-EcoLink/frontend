<script setup>
import { ref } from 'vue'

const currentMonth = ref(new Date().getMonth() + 1)
const currentYear = ref(new Date().getFullYear())

const days = Array.from({ length: 31 }, (_, i) => i + 1)
const weekDays = ['일', '월', '화', '수', '목', '금', '토']

const events = [
  // 3월
  { month: 3, day: 5, status: 'complete', startTime: '09:00', endTime: '11:00' },
  { month: 3, day: 10, status: 'pending', startTime: '10:30', endTime: '12:30' },
  { month: 3, day: 12, status: 'complete', startTime: '08:00', endTime: '10:00' },
  { month: 3, day: 17, status: 'rejected', startTime: '09:30', endTime: '11:30' },
  { month: 3, day: 21, status: 'complete', startTime: '10:00', endTime: '12:00' },

  // 4월
  { month: 4, day: 3, status: 'complete', startTime: '11:00', endTime: '13:00' },
  { month: 4, day: 7, status: 'pending', startTime: '14:00', endTime: '16:00' },
  { month: 4, day: 10, status: 'complete', startTime: '13:30', endTime: '15:30' },
  { month: 4, day: 14, status: 'complete', startTime: '10:00', endTime: '12:00' },
  { month: 4, day: 20, status: 'rejected', startTime: '15:00', endTime: '17:00' },
  { month: 4, day: 22, status: 'complete', startTime: '12:00', endTime: '14:00' },
  { month: 4, day: 25, status: 'pending', startTime: '13:00', endTime: '15:00' },
  { month: 4, day: 30, status: 'complete', startTime: '09:00', endTime: '11:00' },

  // 5월
  { month: 5, day: 2, status: 'pending', startTime: '10:00', endTime: '12:00' },
  { month: 5, day: 5, status: 'complete', startTime: '13:00', endTime: '15:00' },
  { month: 5, day: 8, status: 'complete', startTime: '16:00', endTime: '18:00' },
  { month: 5, day: 10, status: 'rejected', startTime: '15:30', endTime: '17:30' },
  { month: 5, day: 15, status: 'complete', startTime: '11:00', endTime: '13:00' },
  { month: 5, day: 21, status: 'complete', startTime: '14:30', endTime: '16:30' },
  { month: 5, day: 27, status: 'pending', startTime: '10:30', endTime: '12:30' },
]

const getEventsByDay = (day) => {
  return events.filter((event) => event.day === day && event.month === currentMonth.value)
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

const goPrevMonth = () => {
  if (currentMonth.value === 1) {
    currentMonth.value = 12
    currentYear.value -= 1
  } else {
    currentMonth.value -= 1
  }
}

const goNextMonth = () => {
  if (currentMonth.value === 12) {
    currentMonth.value = 1
    currentYear.value += 1
  } else {
    currentMonth.value += 1
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
      <button class="text-xl text-disabled" @click="goPrevMonth">«</button>
      <h2 class="text-xl font-bold">{{ currentYear }}.{{ currentMonth }}</h2>
      <button class="text-xl text-disabled" @click="goNextMonth">»</button>
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
            {{ event.startTime }} ~ {{ event.endTime }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional custom styles */
</style>

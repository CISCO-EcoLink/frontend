<!-- components/BaseDropdown.vue -->
<script setup>
import { ref } from 'vue'

defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '-',
  },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const selectOption = (option) => {
  emit('update:modelValue', option)
  isOpen.value = false
}
</script>

<template>
  <div class="relative inline-block text-left w-full">
    <button
      @click="isOpen = !isOpen"
      class="inline-flex justify-between items-center w-full px-4 py-2 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50"
    >
      <span>{{ modelValue || placeholder }}</span>
      <svg
        class="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-md"
    >
      <ul class="max-h-60 overflow-y-auto">
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

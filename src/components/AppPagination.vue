<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: Number,
  totalItems: Number,
  pageSize: Number,
})

const emit = defineEmits(['update:currentPage'])

const totalPages = computed(() => Math.ceil(props.totalItems / props.pageSize))

const maxVisiblePages = 5

const pageNumbers = computed(() => {
  const half = Math.floor(maxVisiblePages / 2)
  let start = props.currentPage - half
  let end = props.currentPage + half

  if (start < 1) {
    end += 1 - start
    start = 1
  }

  if (end > totalPages.value) {
    start -= end - totalPages.value
    end = totalPages.value
  }

  if (start < 1) start = 1

  const pages = []
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

const goToPage = (page) => {
  if (page !== props.currentPage) emit('update:currentPage', page)
}

const prevPage = () => {
  if (props.currentPage > 1) emit('update:currentPage', props.currentPage - 1)
}
const nextPage = () => {
  if (props.currentPage < totalPages.value) emit('update:currentPage', props.currentPage + 1)
}
</script>

<template>
  <div class="flex items-center justify-center gap-2 mt-4 text-sm">
    <button
      @click="prevPage"
      :disabled="props.currentPage === 1"
      class="px-2 py-1 rounded hover:bg-gray-100 disabled:text-disabled"
    >
      «
    </button>

    <button
      v-for="page in pageNumbers"
      :key="page"
      @click="goToPage(page)"
      :class="[
        'px-3 py-1 rounded',
        page === props.currentPage
          ? 'font-bold text-black bg-gray-200'
          : 'text-gray-500 hover:text-black hover:bg-gray-100',
      ]"
    >
      {{ page }}
    </button>

    <button
      @click="nextPage"
      :disabled="props.currentPage === totalPages"
      class="px-2 py-1 rounded hover:bg-gray-100 disabled:text-disabled"
    >
      »
    </button>
  </div>
</template>

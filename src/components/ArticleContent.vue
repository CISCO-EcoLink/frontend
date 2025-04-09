<script setup>
defineProps({
  title: String,
  description: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div
    class="w-full h-full flex flex-col border border-primary rounded-base overflow-hidden shadow-lg"
  >
    <p
      class="h-[2.5rem] w-full bg-primary text-lightblue font-semibold flex items-center justify-between px-4"
    >
      <span>{{ title }}</span>
      <span v-if="description" class="text-sm text-lightblue">
        {{ description }}
      </span>
    </p>
    <div class="grow w-full">
      <!-- <RouterView /> -->
      <slot />
    </div>
  </div>
</template>

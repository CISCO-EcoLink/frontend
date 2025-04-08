<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="grow flex flex-col bg-base">
    <div class="grow flex flex-col max-w-base mx-auto">
      <RouterView />
    </div>
  </main>
</template>

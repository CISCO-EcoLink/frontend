<script setup>
import LayoutHeader from './components/layout/LayoutHeader.vue'
import LayoutFooter from './components/layout/LayoutFooter.vue'
import LayoutMain from './components/layout/LayoutMain.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />
    <LayoutMain />
    <LayoutFooter />
  </div>
</template>

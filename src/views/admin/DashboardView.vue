<script setup>
import ArticlePreview from '@/components/ArticlePreview.vue'
</script>

<template>
  <section class="grow flex flex-wrap justify-center items-center gap-4">
    <div class="w-2/5">
      <ArticlePreview title="지역별 적제치" imgSrc="/images/localData.png" />
    </div>
    <div class="w-2/5">
      <ArticlePreview title="지역별 봉사 횟수" imgSrc="/images/localData.png" />
    </div>
  </section>
</template>

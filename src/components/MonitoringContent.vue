<script setup>
import ArticleContent from './ArticleContent.vue'

defineProps({
  selectedRegion: {
    type: String,
    required: true,
  },
  selectedDistrict: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <section class="grow flex flex-wrap justify-center items-center gap-4">
    <div class="w-2/5">
      <ArticleContent title="지역별 적제치">
        <img src="/images/localData.png" alt="Map Image" class="w-full h-full object-center" />
      </ArticleContent>
    </div>
    <div class="w-2/5">
      <ArticleContent title="지역별 봉사 횟수">
        <img src="/images/localData.png" alt="Map Image" class="w-full h-full object-center" />
      </ArticleContent>
    </div>
  </section>
</template>

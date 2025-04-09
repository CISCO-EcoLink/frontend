<script setup>
import { computed, ref } from 'vue'
import BaseDropdown from '@/components/AppDropdown.vue'
import { districtList, regionList } from '@/lib/region'
import MonitoringContent from '@/components/MonitoringContent.vue'

const selectedRegion = ref('')
const regionOptions = regionList

const selectedDistrict = ref('')
const districtOptions = computed(() => {
  const index = regionOptions.indexOf(selectedRegion.value)
  return index >= 0 ? districtList[index] : []
})
</script>

<template>
  <div class="flex flex-col p-4">
    <div class="flex gap-4">
      <BaseDropdown v-model="selectedRegion" :options="regionOptions" placeholder="시 / 도" />
      <BaseDropdown v-model="selectedDistrict" :options="districtOptions" placeholder="구 / 군" />
    </div>

    <div class="mt-6">
      <p
        v-if="!selectedRegion || !selectedDistrict"
        class="pt-[5rem] text-center text-2xl font-semibold"
      >
        지역을 선택하세요
      </p>
      <MonitoringContent
        v-else
        :selectedRegion="selectedRegion"
        :selectedDistrict="selectedDistrict"
      />
    </div>
  </div>
</template>

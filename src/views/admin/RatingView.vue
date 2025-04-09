<script setup>
import AppPagination from '@/components/AppPagination.vue'
import { regionRankList, userRankList } from '@/lib/rank'
import { ref } from 'vue'

const regionCurrentPage = ref(1)
const regionRankingList = regionRankList

const userCurrentPage = ref(1)
const userRankingList = userRankList
</script>

<template>
  <section class="w-full flex flex-col p-6 gap-4">
    <div class="w-full flex flex-col gap-4">
      <p class="flex items-center gap-2 font-semibold text-lg">
        <img src="/images/goldCrown.png" alt="Crown" class="w-6" />
        <span>지역 봉사 랭킹</span>
      </p>
      <div class="w-full px-4">
        <table class="w-full text-center">
          <thead>
            <tr class="text-lg border-b border-black">
              <th class="w-1/8">랭킹</th>
              <th class="w-3/4">지역</th>
              <th class="w-1/8">점수</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(region, index) in regionRankingList.slice(
                (regionCurrentPage - 1) * 5,
                regionCurrentPage * 5,
              )"
              :key="index"
            >
              <td class="py-1">{{ region.rank }}</td>
              <td class="py-1">{{ region.region }}</td>
              <td class="py-1">{{ region.score }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center">
          <AppPagination
            v-model:currentPage="regionCurrentPage"
            :totalItems="regionRankingList.length"
            :pageSize="5"
          />
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col gap-4">
      <p class="flex items-center gap-2 font-semibold text-lg">
        <img src="/images/goldCrown.png" alt="Crown" class="w-6" />
        <span>지역 봉사 랭킹</span>
      </p>
      <div class="w-full px-4">
        <table class="w-full text-center">
          <thead>
            <tr class="text-lg border-b border-black">
              <th class="w-1/8">랭킹</th>
              <th class="w-1/8">이름</th>
              <th class="w-1/2">지역</th>
              <th class="w-1/8">소속</th>
              <th class="w-1/8">점수</th>
            </tr>
          </thead>
          <tbody class="mt-4">
            <tr
              v-for="(user, index) in userRankingList.slice(
                (userCurrentPage - 1) * 10,
                userCurrentPage * 10,
              )"
              :key="index"
            >
              <td class="py-1">{{ user.rank }}</td>
              <td class="py-1">{{ user.name }}</td>
              <td class="py-1">{{ user.region }}</td>
              <td class="py-1">{{ user.organization }}</td>
              <td class="py-1">{{ user.score }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center">
          <AppPagination
            v-model:currentPage="userCurrentPage"
            :totalItems="userRankingList.length"
            :pageSize="10"
          />
        </div>
      </div>
    </div>
  </section>
</template>

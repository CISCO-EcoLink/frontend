<script setup>
import AppPagination from '@/components/AppPagination.vue'
import { regionRankList, userRankList } from '@/lib/rank'
import { ref } from 'vue'

const regionCurrentPage = ref(1)
const regionRankingList = regionRankList

const userRankingList = [
  userRankList[0],
  userRankList[1],
  userRankList[2],
  userRankList[3],
  userRankList[4],
  userRankList[5],
  userRankList[6],
  userRankList[7],
  userRankList[8],
  userRankList[9],
]
</script>

<template>
  <section class="grow flex flex-col items-center">
    <div class="h-screen">
      <img src="/images/logo.png" alt="Logo" class="w-[25rem] my-10" />
      <p class="flex flex-col gap-10 text-3xl font-bold text-center">
        <span>EcoLink로</span><span> 봉사를 더 쉽게 </span>
      </p>
    </div>
    <div class="w-full flex flex-col items-center gap-10 mb-10">
      <div class="w-full flex flex-col gap-4">
        <p class="flex items-center gap-2 font-semibold text-lg">
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
                <td class="py-1 relative">
                  <img
                    v-if="region.rank === 1"
                    src="/images/goldCrown.png"
                    alt="Gold Crown"
                    class="absolute right-2/3 w-5"
                  />
                  <img
                    v-if="region.rank === 2"
                    src="/images/silverCrown.png"
                    alt="Silver Crown"
                    class="absolute right-2/3 w-5"
                  />
                  <img
                    v-if="region.rank === 3"
                    src="/images/copperCrown.png"
                    alt="Copper Crown"
                    class="absolute right-2/3 w-5"
                  />
                  {{ region.rank }}
                </td>
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
              <tr v-for="(user, index) in userRankingList" :key="index">
                <td class="py-1 relative">
                  <img
                    v-if="user.rank === 1"
                    src="/images/goldCrown.png"
                    alt="Gold Crown"
                    class="absolute left-0 w-5"
                  />
                  <img
                    v-if="user.rank === 2"
                    src="/images/silverCrown.png"
                    alt="Silver Crown"
                    class="absolute left-0 w-5"
                  />
                  <img
                    v-if="user.rank === 3"
                    src="/images/copperCrown.png"
                    alt="Copper Crown"
                    class="absolute left-0 w-5"
                  />
                  <span>{{ user.rank }}</span>
                </td>
                <td class="py-1">{{ user.name }}</td>
                <td class="py-1">{{ user.region }}</td>
                <td class="py-1">{{ user.organization }}</td>
                <td class="py-1">{{ user.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

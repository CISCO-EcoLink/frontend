import { userList } from './user'

export const userRankList = userList
  .map((user) => ({
    name: user.name,
    region: user.region,
    organization: user.group,
    score: user.score,
  }))
  .sort((a, b) => b.score - a.score)
  .map((user, index) => ({
    rank: index + 1,
    ...user,
  }))

export const regionRankList = [
  { rank: 1, region: '서울특별시 강북구', score: 953 },
  { rank: 2, region: '경기도 성남시', score: 941 },
  { rank: 3, region: '부산광역시 해운대구', score: 932 },
  { rank: 4, region: '인천광역시 연수구', score: 918 },
  { rank: 5, region: '대전광역시 유성구', score: 905 },
  { rank: 6, region: '전라북도 전주시', score: 897 },
  { rank: 7, region: '충청남도 천안시', score: 888 },
  { rank: 8, region: '광주광역시 북구', score: 872 },
  { rank: 9, region: '전라남도 순천시', score: 864 },
  { rank: 10, region: '충청북도 청주시', score: 853 },
  { rank: 11, region: '대구광역시 수성구', score: 839 },
  { rank: 12, region: '경상북도 포항시', score: 826 },
  { rank: 13, region: '경상남도 창원시', score: 814 },
  { rank: 14, region: '강원특별자치도 원주시', score: 799 },
  { rank: 15, region: '울산광역시 남구', score: 788 },
  { rank: 16, region: '세종특별자치시 도담동', score: 775 },
  { rank: 17, region: '제주특별자치도 제주시', score: 761 },
]

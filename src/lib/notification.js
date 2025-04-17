import { activityList } from './user'

export let notificationList = [
  {
    title: 'webex방 개설',
    description: '서울특별시 강남구 봉사활동을 위한 webex방이 개설되었습니다. 참여하세요!',
    activity: activityList[1],
  },
  {
    title: '새로운 봉사활동',
    description: '서울 강남구에서 새로운 활동이 시작되었어요.',
    read: false,
  },
  { title: '참여자 모집!!', description: '전주 활동이 곧 마감됩니다!', read: true },
]

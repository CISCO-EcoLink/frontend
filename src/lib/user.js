// 먼저 userList 정의 (activity는 빈 배열)
export const userList = [
  {
    id: 1,
    name: '홍성표',
    region: '서울특별시 영등포구',
    email: 'pwsusc10@gmail.com',
    group: 'SSAFY',
    score: 982,
    activity: [],
  },
  {
    id: 2,
    name: '박지우',
    region: '경기도 성남시',
    email: 'jiwoo2@example.com',
    group: '경기에코시티',
    score: 951,
    activity: [],
  },
  {
    id: 3,
    name: '이준호',
    region: '부산광역시 해운대구',
    email: 'lee3@example.com',
    group: '부산그린클럽',
    score: 925,
    activity: [],
  },
  {
    id: 4,
    name: '최서윤',
    region: '대전광역시 유성구',
    email: 'seo4@example.com',
    group: '대전그린센터',
    score: 910,
    activity: [],
  },
  {
    id: 5,
    name: '정민규',
    region: '광주광역시 북구',
    email: 'min5@example.com',
    group: '광주지속협',
    score: 894,
    activity: [],
  },
]

// activityList 정의
export let activityList = [
  {
    id: 101,
    date: '2025-01-10',
    region: '서울특별시 강남구',
    state: 'pending',
    time: '10:00~12:00',
    beforeImg: '/images/before3.png',
    afterImg: '/images/after.png',
    level: 4,
    requireUser: 2,
    curUser: [userList[0]],
    webexUrl: '',
  },
  {
    id: 102,
    date: '2025-01-12',
    region: '서울특별시 영등포구',
    state: 'accept',
    time: '13:00~15:00',
    beforeImg: '/images/before1.png',
    afterImg: '',
    level: 7,
    requireUser: 3,
    curUser: [userList[0], userList[1], userList[2]],
    webexUrl:
      'https://web.webex.com/spaces/aHR0cHM6Ly9jb252LXIud2J4Mi5jb20vY29udmVyc2F0aW9uL2FwaS92MS9jb252ZXJzYXRpb25zLzIzOTEzNjIwLTE5Y2ItMTFmMC1iOGE1LWYxZTk2MmFjMDQwMQ==',
  },
  {
    id: 103,
    date: '2025-01-15',
    region: '서울특별시 강서구',
    state: 'complete',
    time: '09:30~11:30',
    beforeImg: '/images/before2.png',
    afterImg: '/images/after.png',
    level: 1,
    requireUser: 1,
    curUser: [userList[0]],
    webexUrl: '',
  },
  {
    id: 104,
    date: '2025-01-20',
    region: '대전광역시 유성구',
    state: 'accept',
    time: '14:00~16:00',
    beforeImg: '/images/before3.png',
    afterImg: '',
    level: 3,
    requireUser: 2,
    curUser: [userList[1], userList[2]],
    webexUrl: '',
  },
  {
    id: 105,
    date: '2025-01-25',
    region: '광주광역시 북구',
    state: 'reject',
    time: '10:00~12:00',
    beforeImg: '/images/before3.png',
    afterImg: '',
    level: 5,
    requireUser: 3,
    curUser: [userList[0], userList[3]],
    webexUrl: '',
  },
]

// userList에 활동 내역 추가
userList[0].activity = [activityList[0], activityList[1], activityList[2], activityList[4]]
userList[1].activity = [activityList[0], activityList[1], activityList[3]]
userList[2].activity = [activityList[1], activityList[3]]
userList[3].activity = [activityList[4]]
userList[4].activity = [] // 아직 활동 없음

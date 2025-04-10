export const activityList = [
  {
    id: 101,
    date: '2025-01-10',
    region: '서울특별시 강남구',
    state: 'complete',
    time: '10:00~12:00',
    beforeImg: '/images/before3.png',
    afterImg: '/images/after.png',
    level: 4,
    requireUser: 2,
    curUser: 1,
  },
  {
    id: 102,
    date: '2025-01-12',
    region: '경기도 성남시',
    state: 'pending',
    time: '13:00~15:00',
    beforeImg: '/images/before1.png',
    afterImg: '',
    level: 7,
    requireUser: 4,
    curUser: 3,
  },
  {
    id: 103,
    date: '2025-01-15',
    region: '부산광역시 해운대구',
    state: 'complete',
    time: '09:30~11:30',
    beforeImg: '/images/before2.png',
    afterImg: '/images/after.png',
    level: 1,
    requireUser: 1,
    curUser: 1,
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
    curUser: 2,
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
    curUser: 2,
  },
  {
    id: 106,
    date: '2025-02-01',
    region: '세종특별자치시 도담동',
    state: 'complete',
    time: '11:00~13:00',
    beforeImg: '/images/before2.png',
    afterImg: '/images/after.png',
    level: 2,
    requireUser: 1,
    curUser: 1,
  },
  {
    id: 107,
    date: '2025-02-03',
    region: '제주특별자치도 제주시',
    state: 'complete',
    time: '15:00~17:00',
    beforeImg: '/images/before1.png',
    afterImg: '/images/after.png',
    level: 6,
    requireUser: 3,
    curUser: 3,
  },
  {
    id: 108,
    date: '2025-02-10',
    region: '울산광역시 남구',
    state: 'accept',
    time: '10:30~12:30',
    beforeImg: '/images/before3.png',
    afterImg: '',
    level: 4,
    requireUser: 2,
    curUser: 2,
  },
  {
    id: 109,
    date: '2025-02-15',
    region: '전라북도 전주시',
    state: 'pending',
    time: '09:00~11:00',
    beforeImg: '/images/before2.png',
    afterImg: '',
    level: 3,
    requireUser: 2,
    curUser: 1,
  },
  {
    id: 110,
    date: '2025-02-20',
    region: '충청남도 천안시',
    state: 'complete',
    time: '13:00~15:00',
    beforeImg: '/images/before2.png',
    afterImg: '/images/after.png',
    level: 1,
    requireUser: 1,
    curUser: 1,
  },
]

export const userList = [
  {
    id: 1,
    name: '김하늘',
    region: '서울특별시 강남구',
    email: 'sky1@example.com',
    group: '서울환경청',
    score: 982,
    activity: [activityList[0]],
  },
  {
    id: 2,
    name: '박지우',
    region: '경기도 성남시',
    email: 'jiwoo2@example.com',
    group: '경기에코시티',
    score: 951,
    activity: [activityList[1], activityList[2]],
  },
  {
    id: 3,
    name: '이준호',
    region: '부산광역시 해운대구',
    email: 'lee3@example.com',
    group: '부산그린클럽',
    score: 925,
    activity: [activityList[2]],
  },
  {
    id: 4,
    name: '최서윤',
    region: '대전광역시 유성구',
    email: 'seo4@example.com',
    group: '대전그린센터',
    score: 910,
    activity: [activityList[3], activityList[4]],
  },
  {
    id: 5,
    name: '정민규',
    region: '광주광역시 북구',
    email: 'min5@example.com',
    group: '광주지속협',
    score: 894,
    activity: [activityList[4]],
  },
  {
    id: 6,
    name: '한예린',
    region: '세종특별자치시 도담동',
    email: 'yerin6@example.com',
    group: '세종푸른봉사단',
    score: 886,
    activity: [activityList[5]],
  },
  {
    id: 7,
    name: '오세훈',
    region: '제주특별자치도 제주시',
    email: 'se7@example.com',
    group: '제주에코지킴이',
    score: 875,
    activity: [activityList[6], activityList[7]],
  },
  {
    id: 8,
    name: '윤다연',
    region: '울산광역시 남구',
    email: 'dayeon8@example.com',
    group: '울산환경봉사대',
    score: 867,
    activity: [activityList[7]],
  },
  {
    id: 9,
    name: '조민재',
    region: '전라북도 전주시',
    email: 'minjae9@example.com',
    group: '전주그린네트워크',
    score: 854,
    activity: [activityList[8]],
  },
  {
    id: 10,
    name: '김지안',
    region: '충청남도 천안시',
    email: 'jiaan10@example.com',
    group: '천안지속협',
    score: 849,
    activity: [activityList[9]],
  },
  {
    id: 11,
    name: '배진수',
    region: '서울특별시 노원구',
    email: 'jinsoo11@example.com',
    group: '노원환경단',
    score: 838,
    activity: [activityList[0], activityList[1]],
  },
  {
    id: 12,
    name: '송가람',
    region: '경기도 고양시',
    email: 'garam12@example.com',
    group: '고양그린청년',
    score: 822,
    activity: [activityList[2]],
  },
  {
    id: 13,
    name: '장우석',
    region: '부산광역시 남구',
    email: 'wooseok13@example.com',
    group: '부산자연지킴이',
    score: 815,
    activity: [activityList[3]],
  },
  {
    id: 14,
    name: '임하윤',
    region: '대전광역시 중구',
    email: 'hayoon14@example.com',
    group: '대전청년봉사단',
    score: 799,
    activity: [activityList[4]],
  },
  {
    id: 15,
    name: '김유진',
    region: '제주특별자치도 서귀포시',
    email: 'yujin15@example.com',
    group: '서귀포생태팀',
    score: 794,
    activity: [activityList[5]],
  },
  {
    id: 16,
    name: '전예빈',
    region: '세종특별자치시 한솔동',
    email: 'yebin16@example.com',
    group: '세종환경센터',
    score: 785,
    activity: [activityList[6]],
  },
  {
    id: 17,
    name: '이도현',
    region: '울산광역시 북구',
    email: 'dohyun17@example.com',
    group: '울산봉사연합',
    score: 772,
    activity: [activityList[7]],
  },
  {
    id: 18,
    name: '유하늘',
    region: '강원특별자치도 춘천시',
    email: 'sky18@example.com',
    group: '춘천환경지킴이',
    score: 759,
    activity: [activityList[8]],
  },
  {
    id: 19,
    name: '하승민',
    region: '경상북도 포항시',
    email: 'seungmin19@example.com',
    group: '포항그린도시',
    score: 748,
    activity: [activityList[9]],
  },
  {
    id: 20,
    name: '강주원',
    region: '경상남도 창원시',
    email: 'joo20@example.com',
    group: '창원에코봉사단',
    score: 739,
    activity: [activityList[0], activityList[3]],
  },
]

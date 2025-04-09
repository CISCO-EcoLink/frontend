// 대략적인 위도(lat), 경도(lng) 정보입니다. 실제로는 더 정확한 DB나 API 연동이 필요합니다.
export const regionCoords = {
  서울특별시: {
    강남구: { lat: 37.5172, lng: 127.0473 },
    강북구: { lat: 37.6396, lng: 127.0257 },
    강동구: { lat: 37.5301, lng: 127.1238 },
    강서구: { lat: 37.5509, lng: 126.8495 },
    관악구: { lat: 37.4781, lng: 126.9516 },
    // ... 생략 (다른 구도 위와 같은 방식으로 추가)
  },
  부산광역시: {
    해운대구: { lat: 35.1632, lng: 129.1636 },
    중구: { lat: 35.1065, lng: 129.0323 },
    기장군: { lat: 35.2442, lng: 129.2226 },
    // ...
  },
  경기도: {
    수원시: { lat: 37.2636, lng: 127.0286 },
    성남시: { lat: 37.4202, lng: 127.1266 },
    고양시: { lat: 37.6584, lng: 126.832 },
    // ...
  },
  제주특별자치도: {
    제주시: { lat: 33.4996, lng: 126.5312 },
    서귀포시: { lat: 33.253, lng: 126.5596 },
  },
  // 나머지 지역도 동일하게 추가 가능
}

// 지역명으로 위도/경도 반환 함수
export function getLatLng(region, district) {
  if (regionCoords[region] && regionCoords[region][district]) {
    return regionCoords[region][district]
  }
  return null // 값이 없을 경우 null 반환
}

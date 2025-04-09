<script setup>
/* global google */
import { onMounted, ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

const props = defineProps({
  center: {
    type: Object, // { lat: Number, lng: Number }
    required: true,
  },
  markers: {
    type: Array, // [{ lat: Number, lng: Number, title?: String }]
    default: () => [],
  },
  zoom: {
    type: Number,
    default: 14,
  },
  selectedMarker: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['update:selectedMarker'])

const mapElement = ref(null)
let mapInstance = null

onMounted(async () => {
  const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    version: 'weekly',
    language: 'ko', // 한글로 표시
    region: 'KR', // 한국 지도 기준
  })

  await loader.load()

  mapInstance = new google.maps.Map(mapElement.value, {
    center: props.center,
    zoom: props.zoom,
  })

  props.markers.forEach((marker) => {
    const googleMarker = new google.maps.Marker({
      position: { lat: marker.lat, lng: marker.lng },
      map: mapInstance,
      title: marker.title || '',
    })

    // ✅ 마커 클릭 시 부모에 전달
    googleMarker.addListener('click', () => {
      emit('update:selectedMarker', marker)
    })
  })
})
</script>

<template>
  <div ref="mapElement" class="w-full h-full rounded-lg shadow-md"></div>
</template>

<style scoped>
div {
  min-height: 300px;
}
</style>

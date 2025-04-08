import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('@/views/admin/DashboardView.vue'),
  },
  {
    path: '/admin/monitoring',
    name: 'admin-monitoring',
    component: () => import('@/views/admin/MonitoringView.vue'),
  },
  {
    path: '/admin/rating',
    name: 'admin-rating',
    component: () => import('@/views/admin/RatingView.vue'),
  },
  {
    path: '/volunteer',
    name: 'volunteer',
    component: () => import('@/views/user/VolunteerView.vue'),
  },
  { path: '/mypage', name: 'mypage', component: () => import('@/views/user/MyPageView.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

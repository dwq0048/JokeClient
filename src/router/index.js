import { createRouter, createWebHashHistory } from 'vue-router'
import Before from './before/index'

const routes = [
	{
		path: '/', name: 'Home',
		component: () => import('@/views/Home'),
		beforeEnter: Before(),
	},
	{
		path: '/login', name: 'Login',
		component: () => import('@/views/auth/login')
	},
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/auth/index'),
		beforeEnter: Before(),
		children: [
			{
				path: 'login',
				component: () => import('@/views/auth/login'),
				meta: { transition: 'slide-left' },
			},
			{
				path: 'join',
				component: () => import('@/views/auth/join'),
				meta: { transition: 'slide-right' },
			}
        ]
    },
	{
		path: '/setting',
		name: 'Setting',
		component: () => import('@/views/setting/index'),
		beforeEnter: Before(),
		children: [
			{
				path: '',
				component: () => import('@/views/setting/normal'),
			},
			{
				path: 'press',
				component: () => import('@/views/setting/press'),
			}
		]
	},
	{
		path: '/post',
		name: 'post',
		component: () => import('@/views/post/index'),
		beforeEnter: Before(),
	}
]

//const router = createRouter({ history: createWebHistory(), routes});
const router = createRouter({ history: createWebHashHistory(), routes});
export default router

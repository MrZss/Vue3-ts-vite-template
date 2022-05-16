import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PageView from "@/components/layout/RouteView.vue"
import RouteView from "@/components/layout/RouteView.vue"
import { HomeFilled } from "@element-plus/icons-vue"

export const pageRoutes = [
	{
		path: "/home",
		component: () => import("@/views/home/index.vue"),
        meta: {
            title: "控制台",
            icon: HomeFilled,
        }
	}
]

export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/home",
        component: PageView,
        children: pageRoutes,
    },

    {
        path: "/login",
        meta: {
            title: "登录",
        },
        component: () => import("@/views/login/index.vue"),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

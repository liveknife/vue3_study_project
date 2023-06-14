/*
 * @Author: MaKun MaKunn@163.com
 * @Date: 2023-06-14 13:55:22
 * @LastEditors: MaKun MaKunn@163.com
 * @LastEditTime: 2023-06-14 14:01:09
 * @FilePath: \vue3_study_project\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
        meta: {
            title: 'Home'
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/index.vue"),
        meta: {
            title: 'Login'
        }
    },
];
const router = createRouter({
    history,
    routes
})
export default router

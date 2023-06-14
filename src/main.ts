/*
 * @Author: MaKun MaKunn@163.com
 * @Date: 2023-06-14 13:33:12
 * @LastEditors: MaKun MaKunn@163.com
 * @LastEditTime: 2023-06-14 14:12:44
 * @FilePath: \vue3_study_project\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

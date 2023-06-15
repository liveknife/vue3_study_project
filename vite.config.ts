import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'0.0.0.0',
    port:3333,    //设置服务启动端口
    // open:true,    //设置服务启动时是否自动打开浏览器
    cors:true,    //允许跨域

    //设置代理
    proxy:{
      // 字符串简写写法
      // '/api': 'http://localhost:8060',
      // // 选项写法
      // '/urlApi':{
      // 	target:'http://localhost:8060',
      // 	changeOrigin: true,       //是否跨域
      // 	ws: true,            //是否代理 websockets
      // 	secure: true,          //是否https接口
      // 	// rewrite:(path) => path.replace('/urlApi/','/')
      // 	rewrite: (path) => path.replace(/^\/urlApi/, '')
      // },
      // 正则表达式写法
      '^/urlApi/.*': {
        target: 'http://localhost:8060',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/urlApi/, '')
      },
    }
  }

})

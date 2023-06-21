<template>
  <div>
    首页
    <button @click="login">Login</button>
  </div>
  <canvas></canvas>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import canvas from '../canvas/canvas.vue';
// import { Debounce, Throttler } from '../../utils/common';
// import { Debounce, Throttle } from '../../utils/common'
// 创建防抖实例
// const debounceInstance = new Debounce(0, 1000);

// 创建节流实例
// const throttleInstance = new Throttler(0, 1000);
// console.log(debounceInstance)
// console.log(throttleInstance)
const router = useRouter()
const login = () => {
  router.push('/login')
}
</script>

<style scoped lang="scss"></style>

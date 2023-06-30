<template>
  <div>
    <canvas ref="canvas" style="width: 100%; height: 100vh;"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

export default {
  name: 'App',
  setup () {
    const canvas = ref(null)
    let scene, camera, renderer, cube

    onMounted(() => {
      // 创建场景
      scene = new THREE.Scene()

      // 创建相机
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 5

      // 创建渲染器
      renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)

      // 创建立方体
      const geometry = new THREE.BoxGeometry()
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      // 动画循环
      const animate = function () {
        requestAnimationFrame(animate)

        // 旋转立方体
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        // 渲染场景和相机
        renderer.render(scene, camera)
      }

      animate()
    })

    onBeforeUnmount(() => {
      // 清除场景内的对象和资源
      scene.remove(cube)
      cube.geometry.dispose()
      cube.material.dispose()
      renderer.dispose()
    })

    return { canvas }
  }
}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>

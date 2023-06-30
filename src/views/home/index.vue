<template>
    <div>首页</div>
</template>

<script setup lang="ts">
interface A {
    name: string
}
class name implements A {
    name: string
    constructor(parameters: {}) {
        console.log(parameters)
        this.name = 'x'
    }
}
const a = new name({ name: 'xmzs' })
console.log(a)
</script>

<style scoped lang="scss"></style>

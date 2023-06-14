<template>
    <el-button type="primary" style="margin-left: 16px" @click="skipRouter">
        跳转
    </el-button>
    <div>{{ num }}</div>
    <div>当前值为：{{ data.count }}</div>
</template>
  
<script lang="ts" setup>
import { ref, reactive } from 'vue'
// import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from '../../stores/index'
let num = ref(10)
const router = useRouter()
const store = useStore
const data = reactive({
    count: 0
})
function skipRouter() {
    data.count++
    num = ref(100)
    console.log(store)
    if (data.count >= 100) {
        data.count = 0
        router.push('/home')
    }

}
</script>
  
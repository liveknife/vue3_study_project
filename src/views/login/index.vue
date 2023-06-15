<template>
    <el-button type="primary" style="margin-left: 16px" @click="skipRouter">
        跳转
    </el-button>
    <div>{{ num }}</div>
    <div>当前值为：{{ data.count }}</div>

  <button @click="handleLogin">Login</button>
  <button @click="setInter">添加</button>
  <input ref="username" placeholder="name..." v-model="state.nameval">
  <input ref="password" placeholder="password...." v-model="state.pasval">
  <div v-for="(item,i) in state.userList" :key="i" @click="deleteUser(i)">{{ item.name }}</div>

</template>

<script lang="ts" setup>
import HelloWorld from '../../components/HelloWorld.vue';
import { ref, reactive,onMounted } from 'vue'
// import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from '../../stores/index'
import axios from "axios";
let num = ref(10)
const router = useRouter()
const store = useStore
const data = reactive({
    count: 0
})
onMounted(()=>{
})
const state = ref({
  nameval: '',
  pasval: '',
  userList: [],
})
function handleLogin(){
   axios({
     method: 'get',
     url: `http://localhost:8888/user/login?username=${state.value.nameval}&password=${state.value.pasval}`
   }).then(res=>{
     console.log(res)
   })
}

function setInter(){
  axios({
    method: 'post',
    url: `http://localhost:8888/user/home?username=${state.value.nameval}&password=${state.value.pasval}`
  }).then(res=>{
    console.log(res)
    getUserInfo()

  })
}
function getUserInfo(){
    axios({
    method: 'get',
    url: `http://localhost:8888/user/userinfo`
  }).then(res=>{
      state.value.userList = res.data
  })
}
getUserInfo()
function deleteUser(i:number){
const id = state.value.userList[i].id
  axios({
    method: 'post',
    url:  `http://localhost:8888/user/deleteUser?id=${id}`
  }).then(res=>{
    console.log(res)
    getUserInfo()
  })
}
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

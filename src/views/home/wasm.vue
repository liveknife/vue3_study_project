<template>
    <canvas ref="canvas" width="800" height="400"></canvas>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios'
import WASM from '../../../public/Test_Interface_Render'
let canvas = ref()
onMounted(() => {
    // initWasm(canvas.value)
})

// 设置wasm文件路劲
let Module = ref({
    locateFile: function (s) {
        if (process.env.NODE_ENV === 'development') {
            return '../../../public/' + s
        } else {
            return `${process.env.VUE_APP_OSS}/public/` + s
        }
    }
})
// 初始化wasm
function initWasm(canvas: any) {
    Module.canvas = (function () {
        var e = canvas
        return (
            e.addEventListener(
                'webglcontextlost',
                function (e) {
                    // alert('WebGL context lost. You will need to reload the page.'),
                    e.preventDefault()
                },
                !1
            ),
            e
        )
    })()
    new WASM(Module).then(myModule => {
        Module = myModule
        Module.onRuntimeInitialized = getYzk()
    })
}
async function getYzk() {
    const winWidth = document.body.clientWidth
    const winHeight = document.body.clientHeight
    await Module._create_global_controller()
    await Module._set_global_controller_mode(1)
    var globalWindowOption = Module.allocateUTF8(
        '{ "window_name": "test_window"}'
    )

    await Module._create_one_window(globalWindowOption)
    var currentWindowOption = Module.allocateUTF8(
        '{ "window_name": "test_window"}'
    )
    await Module._set_current_window(currentWindowOption)

    var renderWindowOption = Module.allocateUTF8(
        `{ "window_index": 0, "width": ${winWidth}, "height": ${winHeight - 155}}`)
    await Module._create_render_window(renderWindowOption)
    var globalElementOption = Module.allocateUTF8(
        '{ "element_name": "test_element", "scheme_id": 1, "mode": 2}'
    )
    await Module._create_one_element(globalElementOption)

    var currentElementOption = Module.allocateUTF8(
        '{ "element_name": "test_element"}'
    )
    await Module._set_current_element(currentElementOption)
    axios({
        method: 'get',
        url: `/static/ObjectsScheme.txt`,
    }).then(async respond => {
        const data = JSON.stringify(respond.data)
        var ptr = Module.allocateUTF8(data)
        // await Module._import_context(ptr)
        await Module._import_objects_scheme(ptr)
        console.log('import_context is success')
        await Module._start_default_component()
        console.log('start_default_component is success')
        await Module._set_stage_index(
            Module.allocateUTF8('{ "stage_index": 0 }')
        )
        console.log('init switch 0 index')
    }).
        catch(error => {
            console.log(error, '错误捕获')
            return
        })
        .finally(() => {
            console.log('then和catch都走这里');
        })
    await Module._exec_all_windows()
    console.log('draw is success')
}

</script>
<style>
.home {
    font-size: 30px;
}
</style>

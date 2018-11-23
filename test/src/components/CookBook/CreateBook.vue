<template>
<div>
    <mt-header fixed title="创建菜谱">
        <router-link to="/" slot="left">
            <mt-button>取消</mt-button>
        </router-link>
        <mt-button slot="right">保存</mt-button>
    </mt-header> 
    <SimpleCropper></SimpleCropper>
 
</div>
</template>
<script>
import SimpleCropper from './SimpleCropper'
export default {
    data() {
        return {
            errorText: '', //错误提示
            filesName: [], //文件名
            filesBlob: [], //二进制数据
            filesData: [],
            inputId: ''
        };
    },
    components: {
        SimpleCropper
    }
}
</script>
<style>

</style>

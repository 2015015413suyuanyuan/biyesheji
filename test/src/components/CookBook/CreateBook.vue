<template>
<div>
    <mt-header fixed title="创建菜谱">
        <router-link to="/" slot="left">
            <mt-button>取消</mt-button>
        </router-link>
        <mt-button slot="right">保存</mt-button>
    </mt-header> 
    <SimpleCropper @onChange="imgChange" :filesPreview='filesPreview' placeholder="选择或拖放图片"></SimpleCropper>
    <Step :step='step'></Step>
</div>
</template>
<script>
import SimpleCropper from './SimpleCropper'
import Step from './Step'

export default {
    data() {
        return {
            errorText: '', //错误提示
            filesName: [], //文件名
            filesBlob: [], //二进制数据
            filesData: [],
            inputId: '',
            filesPreview: [],
            step: [
                {name:'用料'
                },
                {
                step:[
                    {
                        num:'1',
                        img:'',
                        detail:''
                    },
                    {
                        num:'2',
                        img:'',
                        detail:''
                    },
                    {
                        num:'3',
                        img:'',
                        detail:''
                    }
                ]
            }], // 文件名
        };
    },
    components: {
        SimpleCropper,
        Step
    },
    methods: {
        imgChange(files, filesName) {
            console.log('在菜谱封面中使用该插件');
        }
    }
}
</script>
<style>

</style>

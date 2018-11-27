<template>
<div>
    <mt-header fixed title="创建菜谱">
        <router-link to="/" slot="left">
            <mt-button>取消</mt-button>
        </router-link>
        <mt-button slot="right">保存</mt-button>
    </mt-header> 
    <!-- <SimpleCropper @onChange="imgChange" :filesPreview='filesPreview' placeholder="选择或拖放图片"></SimpleCropper> -->
    <Step :step='step'></Step>
    <section>
        <p class="tip">小贴士</p>
        <input type="textarea" class="inputTip" placeholder="这道菜还有哪些需要注意的细节和小技巧？">
    </section>
</div>
</template>
<script>
import SimpleCropper from './SimpleCropper'
import Step from './Step'

export default {
    data() {
        return {
            filesPreview: [],
                step:[
                    {
                        num:'1',
                        img:'',
                        detail:'',
                        displayImg:true
                    },
                    {
                        num:'2',
                        img:'',
                        detail:'',
                        displayImg:true
                    },
                    {
                        num:'3',
                        img:'',
                        detail:'',
                        displayImg:true
                    }
                ]
            , // 文件名
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
.tip{
    text-align: left;
    font-weight: bolder;
}
.inputTip{
    outline: none;
    border: 0;
    width: 100%;
    height: 30px;
}
</style>

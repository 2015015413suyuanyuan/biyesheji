<template>
<div class="step">
    <div v-for="(item, index) in step" class="little">
        <p>做法</p>
        <p class="txt">步骤{{index+1}}</p>
        <SimpleCropperTwo @onChange="imgChange" :filesPreview1='filesPreview1' placeholder="选择或拖放图片"></SimpleCropperTwo>
        <input type="text" placeholder="添加步骤说明" class="detail" v-model="item.detail">
    </div>  
</div>
</template>
<script>
import SimpleCropperTwo from './SimpleCropperTwo'
export default {
    props: {
      step: {
        type: Array,
      }
    },
    data() {
      return {
          filesPreview1:[],
      };
    }, 
    components: {
        SimpleCropperTwo
    },  
    methods: {
        imgChange(files, filesName) {
            console.log('在步骤中使用该插件');
        }
    },
 
}    
</script>
<style lang="scss" scoped>
.step{
    position: absolute;
    top: 300px;
    width: 100%;
    .little{
        border-bottom: 1px solid yellow;
    }
.txt{
    font-weight: bolder;
    text-align: left;
}
.detail{
    width: 100px;
    height: 20px;
}
}
</style>

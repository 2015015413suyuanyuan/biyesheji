<template>
        <div class="upload" >
            <div class="img-container">
                <p :class="{displayImg:!step.displayImg}">
                    +步骤图(或15秒小视频)
                    <br>
                    清晰的步骤图会让菜谱更瘦欢迎
                </p>
                <img :src="step.img" alt="user image" class="special" :class="{displayImg:step.displayImg}"> 
            </div>
            <input type="file" @change="getFile(step.img)" ref="file" id="file">
        </div>
</template>
<script>
  export default {
    data() {
      return {
        step: {
          num:'1',
          img: '',
          detail:'',
          displayImg:true
        }
      };
    },
    methods: {
        getFile (img) {
            var step = this.step;
            const e = window.event;
            let _this = this
            var files = e.target.files[0]
            if (!e || !window.FileReader) return  // 看支持不支持FileReader
            let reader = new FileReader()
            reader.readAsDataURL(files) // 这里是最关键的一步，转换就在这里
            reader.onloadend = function () {
                img = this.result;
                step.img=this.result;
            }
        },
    },
    watch: {
        step: {
        handler: function (newVal) {
     
                if(newVal.img !== ''){
                newVal.displayImg = false;
                }
            
        },
        deep: true
    }
},
  };
</script>

<style lang="scss" scoped>
.upload{
    position: relative;
    margin-top: 10px;
    width: 100%;
    height: 100%;
    background-color: #efefed;
    color: #b3b3b3;

    .displayImg{
        display: none;
    }
    .img-container{
        width: 100%;
        height: 120px;

        .special{
            width: 100%;
            height:120px;
        }
    }
        #file{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
}

</style>

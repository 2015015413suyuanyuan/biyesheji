<template>
<div class="step">
    <p class="cooktitle">做法</p>
    <div v-for="(item, index) in step" class="little" :key="index">
        <p class="txt">步骤{{index+1}}</p>
        <div class="upload">
            <div class="img-container">
                <p :class="{displayImg:!item.displayImg}">
                    +步骤图(或15秒小视频)
                    <br>
                    清晰的步骤图会让菜谱更瘦欢迎
                </p>
                <img :src="item.img" alt="user image" class="special" :class="{displayImg:item.displayImg}"> 
            </div>
            <input type="file" @change="getFile(index,item.img)" ref="file" id="file">
        </div>
        <input type="text" placeholder="添加步骤说明" class="detail" v-model="item.detail">
    </div> 
    <p class="addstep" @click="addStep">
        增加一步
    </p> 
</div>
</template>
<style lang="scss" scoped>
.step{
    width: 100%;
    overflow: hidden;
    input{
        outline: none;
    }
    .displayImg{
        display: none;
    }
    p {
        margin: 0;
        padding: 0;
    }
    .addstep{
        padding: 5px 0;
        color: red;
        text-align: left;
    }
    .cooktitle{
        padding: 5px 0;
        text-align: left;
        font-weight: bolder;
    }
    .little{
        position: relative;
        border-bottom: 1px solid yellow;
        margin-bottom: 30px;
    }
    .txt{
        font-weight: bolder;
        text-align: left;
    }
    .detail{
        width: 100vw;
        height: 20px;
        border: 0;
        padding: 10px 0;
    }
    .img-container{
        width: 100%;
        height: 120px;


        .special{
            width: 100%;
            height:120px;
        }
    }

    .upload{
        position: relative;
        margin-top: 10px;
        width: 100%;
        height: 100%;
        background-color: #efefed;
        color: #b3b3b3;
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
<script>
export default {
    data() {
      return {
          removeClass:true,
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
      };
    },  
    watch: {
        step: {
        handler: function (newVal) {
            for(var i=0;i<newVal.length;i++){
                if(newVal[i].img !== ''){
                newVal[i].displayImg = false;
                }
            }
        },
        deep: true
    }
},
    methods: {
        getFile (idx,img) {
            var step = this.step;
            const e = window.event;
            let _this = this
            var files = e.target.files[0]
            if (!e || !window.FileReader) return  // 看支持不支持FileReader
            let reader = new FileReader()
            reader.readAsDataURL(files) // 这里是最关键的一步，转换就在这里
            reader.onloadend = function () {
                img = this.result;
                step[idx].img=this.result;
            }
        },
        addStep (){
                console.log('添加步骤之前的',this.step);
                this.step.push({num:'4',img:'',detail:'',displayImg:true});
                console.log('添加步骤之后的',this.step);
        }
    },

 
}    
</script>


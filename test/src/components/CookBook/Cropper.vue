<template>
  <div class="upload" >
    <div class="img-container">
			<article :class="{displayImg:!step.displayImg}" class="pstyle">
				<p class="p1">
						+ 菜谱封面
				</p>
				<p class="p2">
						诱人的封面图是吸引厨友的关键
				</p>
			</article>
        <img :src="step.img" class="special" :class="{displayImg:step.displayImg}"> 
    </div>
    <input type="file" @change="getFile(step.img)" ref="file" id="file" accept="image/*">
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        step: {
          num:'1',
          img: '',
          detail:'',
          displayImg:true
				},
				file: '',
      };
    },
  created() {
    if(JSON.stringify(localStorage.getItem('cover')) == 'null'){
    }else{
      this.step.img = localStorage.getItem('cover');
    }
  },
  methods: {
    getFile (img) {
      const that = this;
      var step = this.step;
      const e = window.event;
      let _this = this
      var files = e.target.files[0]
      this.file = files
        if(files && files.size/1048576 >= 2) {
          let instance = Toast({
            message: '图片大小不能超过2M~',
            position: 'top'
          });
          let self = this;
          setTimeout(function () {
            instance.close();
          }, 2000) 
        } 
        if (files && files.size/1048576 < 2) {
          const params = new FormData();
          params.append('file',this.file,this.file.name);
          that.$ajax.post('upload', params,{
            headers:{'Content-Type': 'multipart/form-data'}
          }).then((res) => {
            if(res != ''){
              localStorage.setItem('cover', res.image);
              this.step.img = res.image
            }
          }).catch((err) => {
            console.log(err)
          })
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
    },
},
  };
</script>

<style lang="scss" scoped>
.upload{
  position: relative;
  margin-top: 45px;
  width: 100vw;
  height: 220px;
  background-color: #efefed;
  color: #b3b3b3;

  .displayImg{
      display: none;
  }
  .pstyle {
      height: 220px;
      font-size: 18px;
      color: #A29999;
      padding-top: 82px;
      p {
          height: 28px;
      }

  }
  .img-container{
      width: 100vw;
      height: 220px;

      .special{
          width: 100vw;
          height:220px;
      }
  }
      #file{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      font-size: 18px;
  }
}

</style>

<template>
  <div class="upload" >
    <div class="img-container">
        <img :src="touImage"  class="special" :class="touImage"> 
    </div>
    <input type="file" @change="getFile(touImage)" ref="file" id="file" accept="image/*">
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
  export default {
    data() {
      return {
        file: '',
        touImage: ''
      };
    },
    created() {
      this.getData();
    },
    methods: {
			getFile (img) {
				const that = this;
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
        if(files && files.size/1048576 < 2){
          const params = new FormData();
          params.append('file',this.file,this.file.name);
          that.$ajax.post('upload', params,{
            headers: {'Content-Type': 'multipart/form-data'}
          }).then((res) => {
            if(res.data != ''){
              this.touImage = res.image
              localStorage.setItem('touImage',this.touImage)
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      },
      getData() {
        const data = {
          "username": localStorage.getItem('username'),
        }
        this.$ajax.post('basicInfo', data,{
          headers: {'Content-Type': 'application/json'}
        }).then((res) => {
          this.touImage = res[0].image
          localStorage.setItem('touImage',this.touImage)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
  };
</script>

<style lang="scss" scoped>
.upload{
  position: relative;
  width: 10vw;
  height: 10vw;
  background-color: #efefed;
  color: #b3b3b3;
  border-radius: 50%;
  float: right;
  margin-right: 25px;
  .pstyle {
      height: 220px;
      font-size: 18px;
      color: #A29999;
      padding-top: 82px;
      border-radius: 50%;
      p {
          height: 28px;
      }

  }
  .img-container{
      width: 10vw;
      height: 10vw;
      border-radius: 50%;

      .special{
          width: 10vw;
          height:10vw;
          border-radius: 50%;
      }
  }
      #file{
      position: absolute;
      top: 0;
      left: 0;
      width: 10vw;
      height: 10vw;
      opacity: 0;
      font-size: 18px;
      border-radius: 50%;
  }
}

</style>

<template>
  <div class="img-uploader"  ref="uploader" @click="handleFileChange">
  
      <span>头像</span>

      <img src="../../assets/logo.png" class="rt first-rt" ref="image1" />
      <input class="upload-input" 
             :id="inputId"
             @change="handleFileChange"
             accept="image/*"
             ref="input"
             type="file"
      >

  </div>
</template>
<style scoped>
.HeadIcon{
  width: 10px;
}
.first-rt{
  width: 10px;
}
 .upload-input {
   display: none;
    height: 100%;
    width: 100%;
  }
</style>

<script>
  export default {

    data() {
      return {
        errorText: '', // 错误提示
        filesName: [], // 文件名
        filesBlob: [], // 二进制数据
        filesData: [], // 原始图片数据
        filesPreview: [], // 预览图片数据
        inputId: '', // input 的id
      };
    },

   methods: {
      handleFileChange() {
        const input = this.$refs.input;
        const image1 = this.$refs.image1;
        const files = input.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload=function(e){
          console.log(this.result);
          input.src=this.result;
        };
      },
  
    },
  };
</script>

<template>
  <div class="img-uploader" @drop="handleDrop" ref="uploader">
    <div class="head-icon bt upload" @click="openInput">
      <div class="defaultImg" v-if="!hasImages">
        +菜谱封面<br>
        诱人的封面图是吸引厨友的关键
      </div>
      <p v-if="hasImages" v-for="data in filesPreview"><img :src="data" class="HeadIcon"/></p>
      <p v-else><img src="../../assets/logo.png" class="HeadIcon"/></p>
      <input class="upload-input"
             :id="inputId"
             @change="handleFileChange"
             accept="image/*"
             ref="input"
             type="file"
      >
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      // 是否退换货组件使用
      exchange: {
        default: 0,
        type: Number,
      },
      // 占位文字
      placeholder: {
        default: '点击上传图片',
        type: String,
      },
      // 文件更改回调
      onChange: {
        type: Function,
      },
      filesPreview: {
        type: Array,
      },
    },
    data() {
      return {
        errorText: '', // 错误提示
        filesName: [], // 文件名
        filesBlob: [], // 二进制数据
        filesData: [], // 原始图片数据
        // filesPreview: [], // 预览图片数据
        inputId: '', // input 的id
      };
    },
    computed: {
      // 是否有图片
      hasImages() {
        return this.filesPreview.length > 0;
      },
      // 格式化的文件大小，可读的
      sizeFormatted() {
        let result = 0;
        if (this.maxSize < 1024) {
          result = `${this.maxSize}K`;
        } else {
          result = `${(this.maxSize / 1024).toFixed(this.maxSize % 1024 > 0 ? 2 : 0)}M`;
        }
        return result;
      },
    },
    mounted() {
      // 防止多个组件互相影响
      this.inputId = this.id || Math.round(Math.random() * 100000);

      ['drop', 'dragenter', 'dragover', 'dragleave'].forEach((eventName) => {
        this.preventDefaultEvent(eventName);
      });
    },
    methods: {
      handleFileChange() {
        const input = this.$refs.input;
        const files = input.files;
        this.handleFile(files);
      },
      handleDrop(e) {
        // 获取文件列表
        const files = e.dataTransfer.files;
        this.handleFile(files);
      },
      preventDefaultEvent(eventName) {
        document.addEventListener(eventName, (e) => {
          e.preventDefault();
        }, false);
      },
      openInput() {
        document.getElementById(this.inputId).click();
      },
      // 处理图片
      handleFile(files) {
        // for (let i = 0; i < files.length && i < 2; i += 1) {
        const file = files[0];
        this.filesData.push(file);
        this.filesName.push(file.name);
        // }
        this.preview(files);
        this.upload(files);
        // this.$emit('onChange', this.filesData, this.filesData); // 文件选择事件
        // this.$emit('onChange', this.filesBlob, this.filesName); // 文件选择事件
      },
      // 预览的图片
      preview(files) {
        if (!files || !window.FileReader) return;
        // for (let i = 0; i < files.length && i < 5; i += 1) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.resizeImage(e.target.result, 128, 128, (result) => {
            this.filesPreview.push(result);
          });
        };
        reader.readAsDataURL(file);
        // }
      },
      // 上传的图片
      upload(files) {
        if (!files || !window.FileReader) return;
        // for (let i = 0; i < files.length && i < 2; i += 1) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.resizeImage(e.target.result, 750, 750, (result, canvas) => {
            // base64:
            // this.filesData.push(result);
            // 二进制数据：
            canvas.toBlob((blob) => {
              this.filesBlob = [];
              this.filesBlob.push(blob);
              // 将裁剪后的图片传到服务器
              this.$emit('onChange', this.filesBlob, this.filesName);
            });
          });
        };
        reader.readAsDataURL(file);
        // }
      },
      resizeImage(url, width, height, callback) {
        const sourceImage = new Image();
        sourceImage.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          if (sourceImage.width === sourceImage.height) {
            canvas.getContext('2d').drawImage(sourceImage, 0, 0, width, height);
          } else {
            const minVal = Math.min(sourceImage.width, sourceImage.height);
            if (sourceImage.width > sourceImage.height) {
              canvas.getContext('2d').drawImage(sourceImage, (sourceImage.width - minVal) / 2, 0, minVal, minVal, 0, 0, width, height);
            } else {
              canvas.getContext('2d').drawImage(sourceImage, 0, (sourceImage.height - minVal) / 2, minVal, minVal, 0, 0, width, height);
            }
          }
          callback(canvas.toDataURL(), canvas);
        };
        sourceImage.src = url;
      },
      zipImage(url, width, callback) {
        const sourceImage = new Image();
        sourceImage.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = Math.round((width * sourceImage.height) / sourceImage.width);

          canvas.getContext('2d').drawImage(sourceImage, 0, 0, canvas.width, canvas.height);

          callback(canvas.toDataURL(), canvas);
        };
        sourceImage.src = url;
      },
    },
  };
</script>

<style lang="scss" scoped>

  $lightgrey: #f5f5f5;
  $grey: #ccc;
  $darkgrey: #999;
  $red: #df3434;

  .upload {
    box-sizing: border-box;
    float: left;
  }

  .title {
    color: $darkgrey;
    font-size: 14px;
  }

  .tip {
    color: $red;
    font-size: 12px;
  }

  .img_dec {
    width: px2vw(480);
    color: #999;
    line-height: normal;
    text-align: justify;
  }

  .upload-input {
    display: none;
    height: 100%;
    width: 100%;
  }

  .placeholder {
    float: left;
    line-height: 1;

  }

  .placeholder.exchange {

  }

  .bt {
    width: 100%;
    background: #fff;
    position: relative;

    span {
      font-size: 14px;
      color: #333;
      float: left;
    }

    .rt {
      float: right;
    }

    .first-rt {

    }

    p {
      height: 200px;
      position: absolute;
      width: 100%;
      color: #999;
      font-size: 14px;
    }

    .HeadIcon {
      width: 100%;
      height: 200px;
    }
    .defaultImg {
      color: #999;
      background-color: #efefed;
      height: 200px;
      width: 100%;
      position: absolute;
    }
  }

</style>

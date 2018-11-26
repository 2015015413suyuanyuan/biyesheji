<template>
    <div class="img">
        <p>
            <label>请选择一个文件：</label>
            <input type="file" id="file" ref="input"/>
            <input type="button" value="读取图像" @click="readAsDataURL"/>
            <input type="button" value="读取二进制数据" @click="readAsBinaryString">
        </p>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
    data() {
      return {
          filesPreview1:[],
      };
    },  
    methods: {
        readAsDataURL() {
            const input = this.$refs.input;
            const files = input.files;
            const file = files[0];
        },
        readAsBinaryString(){

        }
    },    
}
</script>

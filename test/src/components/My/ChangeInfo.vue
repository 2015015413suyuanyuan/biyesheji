<template>
  <div class="page-change">
    <mt-header fixed title="我的资料">
        <mt-button @click.native="back" icon='back'  slot="left"></mt-button>
        <mt-button slot="right"  @click.native="save" class="right">保存</mt-button>
    </mt-header>
      <div class='changeImg'>
        <label for="img">头像</label>
        <Cropper></Cropper>
      </div>
      <div class="petName">
        <label for="petName">昵称（2-10个字符）</label>
        <i-input v-model="petName" right  placeholder="请输入..." style="width: 25vw" class="inp2"></i-input>
      </div>
      <div class="sex">
        <label for="sex" class="sexxx">性别</label>
        <RadioGroup v-model="userSex"  class="inp3">
            <Radio :label="1">男</Radio>
            <Radio :label="0">女</Radio>
        </RadioGroup>
      </div>
      <div class="tel">
        <label for="tel">手机号码</label>
        <i-input v-model="tel" right  placeholder="请输入..." style="width: 25vw" class="inp1"></i-input>
      </div>
  </div>
</template>

<style lang='scss' scoped>
.page-change {
  font-size: 15px;
  .right {
    color: #FF9800;
  }
  .changeImg {
    width: 100vw;
    height: 50px;
    margin-top: 40px;
    float: left;
    border-bottom: 1px solid #E3E0E0;
    label {
      display: block;
      float: left;
      height: 50px;
      line-height: 50px;
      text-align: left;
      width: 30vw;
      padding-left: 7px;
    }
  }
  .petName {
    width: 100vw;
    float: left;
    border-bottom: 1px solid #E3E0E0;
    label {
      display: block;
      float: left;
      height: 50px;
      line-height: 50px;
      text-align: left;
      width: 40vw;
      padding-left: 7px;
    }
    .inp2 {
      float: right;
      height: 50px;
      line-height: 50px;    
      text-align: right;
      font-size: 22px;
    }
  }
  .sex {
    width: 100vw;
    float: left;
    border-bottom: 1px solid #E3E0E0;
    .sexxx {
      display: block;
      float: left;
      height: 50px;
      line-height: 50px;
      text-align: left;
      width: 30vw;
      padding-left: 7px;
      .inp3 {
        float: right;
        height: 50px;
        line-height: 50px;  
        font-size: 22px;
      }
    }
  }
  .tel {
    width: 100vw;
    float: left;
    border-bottom: 1px solid #E3E0E0;
    label {
      display: block;
      float: left;
      height: 50px;
      line-height: 50px;
      text-align: left;
      width: 30vw;
      padding-left: 7px;
    }
    .inp1 {
      float: right;
      height: 50px;
      line-height: 50px;
      text-align: right;  
      font-size: 22px;
    }
  }
}
.page-change::after {
  display: block;
  content: '';
  clear: both;
}
</style>
<script>
import { Tabbar } from 'mint-ui';
import Vue from 'vue'
import Router from 'vue-router'
import Cropper from './Cropper.vue';
import { MessageBox } from 'mint-ui';
export default {
  name: 'page-tabbar',
  data() {
    return {
      list: [],
      userSex: 0,
      petName: '我的名字',
      tel: '15732176533'
    };
  },
  created() {
    this.getData();
      this.options1 = ['男', '女'];
  },
  components: {
Cropper
  },
  methods: {
    getData() {
      const data = {
        "username": localStorage.getItem('username'),
      }
      this.$ajax.post('basicInfo', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        this.list = res[0]
        this.userSex = res[0].sex
        this.petName = res[0].name
        this.tel = res[0].phone
      }).catch((err) => {
        console.log(err)
      })      
    },
    back() {
      this.$router.back(-1);
    },
    save() {
      const data = {
        "id": localStorage.getItem('user_id'),
        "name": this.petName,
        "phone": this.tel,
        "sex": this.userSex,
        "image": localStorage.getItem('touImage'),
      }
      this.$ajax.post('updateInfo', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res.status_code == '200') {
          this.$Message.success('编辑成功');
          this.$router.push({
            name: "Logged"
          });    
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    change() {
    }
  },
};
</script>



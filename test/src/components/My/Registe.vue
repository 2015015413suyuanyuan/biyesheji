<template>
<div class="noLogin">
    <router-link to="/NoLogged" slot="left" icon='back'>
        <img src="../../assets/img/close.png" class='close'>
    </router-link>
    <p class='p1'>开始准备好好吃饭</p>
    <p class='p2'>
        好好吃饭用心生活，
        比什么都幸福，保存你最喜欢的美食，
        分享你的三餐，做一个热爱生活的人~
    </p>
    <div class="page-part">
        <mt-field placeholder="用户名(不超过10位的数字、字母组合)"  class='tel' v-model="tel"></mt-field>
        <p v-show="isShowHas">        
          <i class="fail">
              <img :src="'./static/img/cuo.png'" >
          </i>
          用户名重复，请重新输入
        </p>
        <p v-show="isShowOverTen">
          <i class="fail">
              <img :src="'./static/img/cuo.png'" >
          </i>
          用户名的长度不超过11位</p>
        <p v-show='isShowChar'>
          <i class="fail">
              <img :src="'./static/img/cuo.png'" >
          </i>
          用户名不能含有汉字
        </p>
        <p v-show="ishHasBlack">
          <i class="fail">
              <img :src="'./static/img/cuo.png'" >
          </i>
          用户名不能含有空格
        </p>
        <mt-field placeholder="密码(不少于6位的数字+字母组合)" type="password" class='password' v-model="password"></mt-field>
        <p v-show='isShowAllNumber'>
          <i class="fail">
              <img :src="'./static/img/cuo.png'" >
          </i>
          密码不能全是数字或者字母，请重新输入
          </p>
        <p v-show='isShowOverSixteen'>
          <i class="fail">
              <img :src="'./static/img/cuo.png'" >
          </i>
          密码不能超过16位，请重新输入
        </p>
        <p v-show='isHasSpecialChar'>
          <i class="fail">
              <img :src="'./static/img/cuo.png'" >
          </i>
          密码不能含有空格及其他特殊字符
        </p>    
        <p v-show='isLessSix'>
          <i class="fail">
              <img :src="'./static/img/cuo.png'" >
          </i>
          密码长度不能小于6位
        </p>     
    </div>
    <div>
        <img src="../../assets/img/rightarrow.png" class='toLogin' v-show="!isRight">
        <img src="../../assets/img/rightArrowY.png" class='toLogin' @click ="toRegiste" v-show='isRight'>
    </div>
    <div class="hasUserName" @click="toLogin">
      已有账号？去<span>登陆</span>吧~
    </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      filesPreview: [],
      tel: '',
      password: '',
      // 用户名重复
      isShowHas: false,
      // 用户名不能包含汉字
      isShowChar: false,
      // 用户名不能包含空格
      ishHasBlack: false,
      // 用户名的长度不超过11位
      isShowOverTen: false,
      // 密码不能全是数字
      isShowAllNumber: false,
      // 密码不能超过16位
      isShowOverSixteen: false,
      // 密码不能含有空格及其他特殊字符
      isHasSpecialChar: false,
      isLessSix: false,
      isRight: false
    };
  },
  components: {
      
  },
  watch: {
    tel: function () {
      this.isShowHas = false
      if(/\s/.test(this.tel)){
        this.ishHasBlack = true
      } else {
        this.ishHasBlack = false
        if(/[\u4e00-\u9fa5]+/.test(this.tel)) {
          this.isShowChar = true
        } else {
          this.isShowChar = false
          if(this.tel.length <= 11) {
            this.isShowOverTen = false
          } else {
            this.isShowOverTen = true
          }
        }
      }
      console.log(!this.isShowOverTen,!this.isShowChar,!this.ishHasBlack)
      // if(!this.ishHasBlack && !this.isShowChar && !this.isShowOverTen && !this.isHasSpecialChar && !this.isShowOverSixteen && !this.isShowAllNumber && !this.isLessSix) {
      //   this.isRight = true
      // } else {
      //   this.isRight = false
      // }
    },
    password: function () {
      var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
      var reg2 = new RegExp(/^[0-9]+$/);
      var reg3 = new RegExp(/^[A-Za-z]+$/);
      if (!reg1.test(this.password)) {
        this.isHasSpecialChar = true
      } else {
        this.isHasSpecialChar = false
      }
      if(this.password.length > 16) {
        this.isShowOverSixteen = true
      } else {
        this.isShowOverSixteen = false
      }
      if(this.password.length >= 6) {
        if (!reg2.test(this.password) && !reg3.test(this.password)) {
          this.isShowAllNumber = false
        } else {
          this.isShowAllNumber = true
        }
        this.isLessSix = false
      } else {
        this.isLessSix = true
        this.isShowAllNumber = false
      }
      if(this.password.length == 0) {
        this.isHasSpecialChar = false
        this.isLessSix = false
      }
      console.log(!this.isHasSpecialChar,!this.isShowOverSixteen,!this.isShowAllNumber,!this.isLessSix)
      if(!this.ishHasBlack && !this.isShowChar && !this.isShowOverTen && !this.isHasSpecialChar && !this.isShowOverSixteen && !this.isShowAllNumber && !this.isLessSix) {
        this.isRight = true
      } else {
        this.isRight = false
      }
    }
  },
  methods: {
    toLogin() {
      this.$router.push({
        name: "Login"
      });
    },
    toRegiste() {
      const data = {
        "username": this.tel,
        "password": this.password
      }
      this.$ajax.post('register', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        console.log(res.message)
        if(res.status_code == '200') {
          if(res.message == "用户名已存在") {
            this.isShowHas = true
          } else if (res.message == "注册成功") {
            localStorage.setItem('username', res.username);
            localStorage.setItem('user_id', JSON.stringify(res.id));
            localStorage.setItem('state', JSON.stringify(res.state));
            let instance = Toast('注册成功~');
            let self = this;
            setTimeout(function () {
              instance.close();
              self.$router.push({
                name: "Logged",
                params: { username: res.username }            
              });
            }, 2000)  
          }
    
        }else {
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style  lang="scss" scoped>
.noLogin{
  background-color: #FFF9EF;
  height: 100vh;
  overflow-y: hidden;
  position: relative;
  .close {
    position: absolute;
    left: 27px;
    top: 27px;
    width: 24px;
    height: 24px;
  }
  p {
    padding: 0;
    margin: 0;
  }
  .p1 {
    font-size: 20px;
    margin-top: 74px;
  }
  .p2 {
    margin: 0 auto;
    text-align: left;
    width: 300px;
    height: 66px;
    font-size: 15px;
    margin-top: 37px;
    margin-bottom: 25px;
  }
  .page-part {
    .tel,.password {
      margin: 0 auto;
      width: 300px;
      height: 35px;
      border-radius: 10px;
      color: rgba(136, 136, 136, 1);
      font-size: 16px;
      text-align: left;
      font-family: Microsoft Yahei;
      border: 1px solid rgba(187, 187, 187, 1);
    }
    .password {
      margin-top: 11px;
    }
    p {
      font-size: 14px;
      text-align: left;
      padding-left: 40px;
      color: #86181d;
    }
  }
  .toLogin {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-top: 46px;
  }
  .hasUserName {
    margin-top: 100px;
    left: 120px;
    font-size: 14px;

    span {
      color: #FF9800;
    }
  }
  .fail {
    width: 20px;
    height: 20px;
    img {
      width: 20px;
      height: 20px;
      position: relative;
      top: 4px;
      left: 1px;
    }
  }
  .success {
    width: 20px;
    height: 20px;
    img {
      width: 20px;
      height: 20px;
      position: relative;
      top: 4px;
      left: 1px;
    }
  }
}

</style>

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
        <mt-field placeholder="用户名(不超过10位的数字+字母组合)" type="tel" class='tel' v-model="tel"></mt-field>
        <mt-field placeholder="密码(不少于6位的数字+字母组合)" type="password" class='password' v-model="password"></mt-field>
    </div>
    <div>
        <img src="../../assets/img/rightarrow.png" class='toLogin' @click ="toRegiste">
    </div>
    <div class="hasUserName" @click="toLogin">
      已有账号？去<span>登陆</span>吧~
    </div>
</div>
</template>
<script>

export default {
  data() {
    return {
      filesPreview: [],
      tel: '',
      password: '',
    };
  },
  components: {
      
  },
  methods: {
    toLogin() {
      this.$router.push({
        name: "Login"
      });
    },
    toRegiste() {
      const reg =  /^[0-9a-zA-Z]*$/g

      if(reg.test(this.tel) && this.tel.length <= 11) {

      } else {

      }
      const data = {
        "username": this.tel,
        "password": this.password
      }
      this.$ajax.post('register', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res.data.status_code == '200') {
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('user_id', JSON.stringify(res.data.id));
          localStorage.setItem('state', JSON.stringify(res.data.state));
          this.$router.push({
            name: "Logged",
            params: { username: res.data.username }            
          });         
        }else {
        }
      }).catch((err) => {
        console.log(err)
      })
      // this.$router.push({
      //   name: "Logged"
      // });
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
  }
  .toLogin {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-top: 46px;
  }
  .hasUserName {
    margin-top: 160px;
    font-size: 14px;

    span {
      color: #FF9800;
    }
  }
}

</style>

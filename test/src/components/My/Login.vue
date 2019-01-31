<template>
<div class="noLogin">
    <router-link to="/NoLogged" slot="left" icon='back'>
        <img src="../../assets/img/close.png" alt="" class='close'>
    </router-link>
    <span class='title'>美食加</span>
    <div class="page-part">
        <mt-field placeholder="请输入用户名" class='tel' v-model="tel"></mt-field>
        <mt-field placeholder="请输入密码" type="password" class='password' v-model="password"></mt-field>
    </div>
    <div class='error' v-if="errorInfo">
      用户名或密码错误
    </div>
    <div>
        <button class='btn' @click="login">登录</button>
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
      img: 'http://140.143.75.82:81/images/3egpDsmX3PqLW6tc9NzUBlSUtnD8oqS7Bpf3cf6K.jpeg',
      errorInfo: false,
    };
  },
  components: {
      
  },
  methods: {
    login() {
      const data = {
        "username": this.tel,
        "password": this.password
      }
      this.$ajax.post('login', data,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res.data.message == '登录成功') {
          localStorage.setItem('username', JSON.stringify(res.data.username));
          localStorage.setItem('user_id', JSON.stringify(res.data.id));
          localStorage.setItem('state', JSON.stringify(res.data.state));
          this.errorInfo = false
          this.$router.push({
            name: "Logged",
            params: { username: res.data.username }
          });
        }
        else {
          this.errorInfo = true
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
    .title {
      display: inline-block;
      margin-top: 25px;
      font-size: 20px;
    }
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
      margin-top: 100px;
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
    .btn {
      margin-top: 30px;
      width: 133px;
      height: 40px;
      border-radius: 4px;
      background-color: rgba(47, 46, 46, 0.57);
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      text-align: center;
      font-family: Microsoft Yahei;
      border: 1px solid rgba(187, 187, 187, 1);
      outline: none;
    }
    .error {
      color: #FF9800;
      font-size: 13px;
      text-align: left;
      padding: 10px 0;
      padding-left: 36px;
    }
}

</style>

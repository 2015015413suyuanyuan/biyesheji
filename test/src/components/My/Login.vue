<template>
<div class="noLogin">
    <router-link to="/NoLogged" slot="left" icon='back'>
        <img src="../../assets/close.png" alt="" class='close'>
    </router-link>
    <span class='title'>美食加</span>
    <div class="page-part">
        <mt-field placeholder="请输入用户名" type="tel" class='tel'></mt-field>
        <mt-field placeholder="请输入密码" type="password" class='password'></mt-field>
    </div>
    <div>
        <button class='btn'>登录</button>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
            filesPreview: [],
        };
    },
    components: {
       
    },
    methods: {
        toRegiste() {
            this.$router.push({
              name: "Logged"
            });
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
    }
}

</style>

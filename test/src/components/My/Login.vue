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

        };
    },
    components: {
       
    },
    methods: {
        login() {
            console.log(this.tel,this.password)
            const reg =  /^[0-9a-zA-Z]*$/g

            if(reg.test(this.tel) && this.tel.length <= 11) {
                console.log('tre')
            } else {
                console.log('false')
            }
            const data = {
                "username": this.tel,
                "password": this.password
            }
            const data1 = this.qs.parse(data)
            console.log(data1)
            this.axios.post('http://140.143.75.82:81/index.php/register', data1,{
                        // headers: {
                        //             'Content-Type': 'application/json'
                        //         }
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            } )
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
}

</style>

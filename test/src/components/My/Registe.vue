<template>
<div class="noLogin">
    <router-link to="/NoLogged" slot="left" icon='back'>
        <img src="../../assets/close.png" alt="" class='close'>
    </router-link>
    <p class='p1'>开始准备好好吃饭</p>
    <p class='p2'>
        好好吃饭用心生活，
        比什么都幸福，保存你最喜欢的美食，
        分享你的三餐，做一个热爱生活的人~
    </p>
    <div class="page-part">
        <mt-field placeholder="请输入用户名" type="tel" class='tel'></mt-field>
        <mt-field placeholder="设置密码（不少于6位）" type="password" class='password'></mt-field>
    </div>
    <div>
        <img src="../../assets/rightarrow.png" alt="" class='toLogin' @click ="toRegiste">
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
}

</style>

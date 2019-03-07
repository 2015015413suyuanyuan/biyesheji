<template>
<div class="noLogin">
    <mt-header title="我的" fixed>
    <router-link to="/About" slot="left">
        <mt-button>关于</mt-button>
    </router-link>
    </mt-header>   
    <section>
        <p class='txt1' @click ="toLogin">登录/注册</p>
        <p class='txt2'>登录账号，查看自己喜欢的菜谱</p>
    </section>
    <div class="like">
        <div class="list">
            <p class='cookbook'>我喜欢的菜谱~</p>
            <img src="../../assets/img/like.png">
            <p>目前没有内容</p>
        </div>
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
        toLogin() {
            this.$router.push({
              name: "Registe"
            });
        },
    }
}
</script>
<style  lang="scss" scoped>
.noLogin{
    background-color: #FFF9EF;
    height: 100vh;
    overflow-y: hidden;
    p {
        padding: 0;
        margin: 0;
    }
    .list img{
        width: 100px;
    }
    section {
        margin-top: 56px;
        .txt1 {
            color: #FF9800;
            font-size: 18px;
            padding-top: 17px;
        }
        .txt2 {
            color: #A8A8A8;
            font-size: 15px;
            padding-top: 9px;
        }
    }
    .like {
        .list {
            img {
                width: 200px;
            }
            p {
                color: #A8A8A8;
                font-size: 20px;
                margin-top: 30px;
            }
            .cookbook {
                color: #FF9800;
                font-size: 18px; 
                text-align: left;
                padding-left: 10px;
            }
        }
    }
}

</style>

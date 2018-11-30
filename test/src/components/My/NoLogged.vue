<template>
<div class="about">
    <mt-header title="我的" fixed>
    <router-link to="/About" slot="left">
        <mt-button>关于</mt-button>
    </router-link>
    <mt-button icon="search" slot="right"></mt-button>
    </mt-header>   
    <section>
        <p>登录/注册</p>
        <p>登录账号，查看自己喜欢的菜谱</p>
    </section>
    <div class="like">
        <h4>我喜欢的菜谱~</h4>
        <div class="list">
            <img src="../../assets/like.png" alt="">
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
        imgChange(files, filesName) {
            console.log('在菜谱封面中使用该插件');
        }
    }
}
</script>
<style>
.list img{
    width: 100px;
    
}
</style>

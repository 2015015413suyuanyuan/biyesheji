<template>
    <div class="cookbook">
        <mt-header fixed title="创建菜谱">
            <router-link to="/" slot="left">
                <mt-button>取消</mt-button>
            </router-link>
            <router-link to="/CreateBook" slot="right">
                <mt-button>继续</mt-button>
            </router-link>
        </mt-header>
        <section>
            <input type="text" placeholder="写下你的菜谱名吧" autofocus >
        </section>
        <section>
            <p>提示</p>
            <p>
                1.好的标题是吸引厨友关注的第一步<br>
                2.在标题中描述菜谱的特点，会吸引更多人点击。如[不用捏的饭团]、[不焯水不放油的红烧肉]
            </p>
        </section>
    </div>
</template>
<script>
import { Header } from 'mint-ui';
export default {
  name: 'page-cookbook',
  data() {
    return {
     
    };
  }
};   
</script>
<style scoped>
.mint-tabbar.is-fixed{
    display: none !important;
}
.cookbook{
    color: red;
}
</style>


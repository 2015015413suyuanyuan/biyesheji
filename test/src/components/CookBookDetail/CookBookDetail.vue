<template>
  <div class="CookBookDetail">
      <mt-header title="菜谱详情">
        <router-link to="/" slot="right">
          <mt-button  icon='back'></mt-button>
        </router-link>
      </mt-header>
      <div class='headerimg'>
          <img src="" alt="">
      </div>
      <article>
          <h1>爱心早餐</h1>
          <p class='detail'>
              重阳节，为每年的农历九月初九日，是中华民族的传统节日。《易经》中把“九”定为阳数，九月九日，两九相重，故曰“重阳”；因日与月皆逢九，故又称为“重九”。九九归真，一元肇始，古人认为九九重阳是吉祥的日子。古时民间在重阳节有登高祈福、秋游赏菊、佩插茱萸、祭神祭祖及饮宴求寿等习俗。
          </p>
      </article>
      <Usage></Usage>
      <Step></Step>
      <div class="comment">
        <h1>评论</h1>
        <div class="commentItem" v-for="(item,index) in commentList" :key="index">
          <div class="itemLeft">
            <img :src="item.img" alt="">
          </div>
          <div class="itemRight">
            <div class="textTop">
              {{item.name}}
            </div>
            <div class="textBottom">
              {{item.time}}
            </div>
          </div>
          <p>{{item.content}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import Usage from './Usage'
import Step from './Step'
export default {
  name: 'footer-view',
  data() {
    return {
      commentList:[
        {
          img: '/static/img/food2.jpg',
          name: '煮迷qcMQM4',
          time: '',
          content: '看起来很好吃，很有食欲！！加油加油！'
        },
        {
          img: '/static/img/food2.jpg',
          name: '煮迷qcMQM4',
          time: '',
          content: '看起来很好吃，很有食欲！！加油加油！'
        },
        {
          img: '/static/img/food2.jpg',
          name: '煮迷qcMQM4',
          time: '',
          content: '看起来很好吃，很有食欲！！加油加油！'
        }
      ]
    };
  },
components: {
    Usage,
    Step
},
  created() {
  
  },
  methods: {

  },
  mounted() {
    // 从API获取最新的底部导航图片和类别【暂时没用到】
  },
  computed: {
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>

</style>

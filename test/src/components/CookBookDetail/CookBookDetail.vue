<template>
  <div class="CookBookDetail">
      <mt-header title="菜谱详情" class='headertitle' fixed>
        <router-link to="/" slot="left">
          <mt-button  icon='back'></mt-button>
        </router-link>
        <img src="../../assets/img/heart.png" alt="" slot='right' @click="like" class='like'>
      </mt-header>
      <div class='headerimg'>
          <img :src="img" alt="">
      </div>
      <article>
          <h1>爱心早餐</h1>
          <p class="left">“</p>
          <p class='detail'>
              重阳节，为每年的农历九月初九日，是中华民族的传统节日。《易经》中把“九”定为阳数，九月九日，两九相重，故曰“重阳”；因日与月皆逢九，故又称为“重九”。九九归真，一元肇始，古人认为九九重阳是吉祥的日子。古时民间在重阳节有登高祈福、秋游赏菊、佩插茱萸、祭神祭祖及饮宴求寿等习俗。
          </p>
          <p class="right">”</p>
      </article>
      <Usage></Usage>
      <Step></Step>
      <p class='littleTip'>- 小贴士 -</p>
      <div class='TipList'>
        <div v-for="(item,index) in littleTip" :key="index">
          {{item.index}}、{{item.title}}
        </div>
      </div>
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
      <div class='commentInput'>
        <input type="text" placeholder=" 我也来说两句……">
        <div>发送</div>
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
      img :'/static/img/food2.jpg',
      commentList:[
        {
          img: '/static/img/food2.jpg',
          name: '煮迷qcMQM4',
          time: '2018/10/11 12:12',
          content: '看起来很好吃，很有食欲！！加油加油！'
        },
        {
          img: '/static/img/food2.jpg',
          name: '煮迷qcMQM4',
          time: '2018/10/11 12:12',
          content: '看起来很好吃，很有食欲！！加油加油！'
        },
        {
          img: '/static/img/food2.jpg',
          name: '煮迷qcMQM4',
          time: '2018/10/11 12:12',
          content: '看起来很好吃，很有食欲！！加油加油！'
        }
      ],
      littleTip: [
        {
          index: '1',
          title: '首先制作蔓越莓馅，将蔓越莓热水冲洗后放入小锅，放入一些纯净水，没过果干就可以'
        },
        {
          index: '2',
          title: '首先制作蔓越莓馅，将蔓越莓热水冲洗后放入小锅，放入一些纯净水，没过果干就可以'
        },
        {
          index: '3',
          title: '首先制作蔓越莓馅，将蔓越莓热水冲洗后放入小锅，放入一些纯净水，没过果干就可以'
        },
        {
          index: '4',
          title: '首先制作蔓越莓馅，将蔓越莓热水冲洗后放入小锅，放入一些纯净水，没过果干就可以'
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
    like () {
      console.log('点赞')
    }
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
.CookBookDetail {
  p {
    padding: 0;
    margin: 0;
  }
  .headertitle {
    color: rgba(0, 0, 0, 1);
    font-size: 20px;
    font-family: SourceHanSansSC-regular;

    .like {
      width: 30px;
    }
  }
  .headerimg {
    img {
      width: 100vw;
      height: 220px;
      margin-top: 55px;
    }
  }
  article {
    h1 {
      font-size: 18px;
    }
    .detail {
      margin: 0;
      padding: 0 26px;
            text-align: left;
      padding-top: 3px;
      font-size: 14px;
    }
    .left {
      text-align: left;
      font-size: 50px;
      height: 20px;
      padding-left: 5px;
      color: #e5e5e5;
    }
    .right {
      text-align: right;
      font-size: 50px;
      height: 20px;
      padding-right: 5px;
      color: #e5e5e5
    }
  }
  .comment {
    h1 {
      color: rgba(16, 16, 16, 1);
      font-size: 18px;
      text-align: left;
      font-family: SourceHanSansSC-regular;
      font-weight: normal;
      padding: 0;
      margin: 0;
      padding-bottom: 18px;
      padding-left: 18px;
    }
    .commentItem {
      text-align: left;
      border-bottom: 1px solid #F4F3F3;
      padding-bottom: 18px;
      img {
        width:45px;
        height: 45px;
        border-radius: 50%; 
      }
      .itemLeft {
        float: left;
        img {
          padding: 18px;
        }
      }
      .itemRight {
        float: left;
        height: 45px;
        padding-top: 18px;
        .textTop {
          height: 22px;
          line-height: 22px;
          color: #101010;
          font-size: 15px;
        }
        .textBottom {
          height: 22px;
          line-height: 22px;
          color: #757171;
          font-size: 14px;
        }
      }
      p {
        clear: both;
        font-size: 15px;
        color: #101010;
        padding-left: 16px;
      }
    }
    .commentItem::after {
      display: block;
      content: '';
      clear: both;
    }
  }
  .commentInput {
    margin-top: 59px;
    input {
      outline: none;
      margin: 0 auto;
      display: block;
      clear: both;
      width: 340px;
      height: 32px;
      border-radius: 10px;
      background-color: rgba(244, 243, 243, 1);
      color: rgba(136, 136, 136, 1);
      font-size: 14px;
      text-align: left;
      font-family: Roboto;
      border: 1px solid rgba(255, 255, 255, 0);
    }
    div {
      margin-left: 18px;
      width: 56px;
      height: 21px;
      color: rgba(255, 152, 0, 1);
      font-size: 14px;
      text-align: left;
      font-family: SourceHanSansSC-regular;
      padding: 4px 0;
    }
  }
  .littleTip {
    font-size: 18px;
    color: #101010;
    margin-bottom: 8px;
  }
  .TipList {
    font-size: 16px;
    text-align: left;
    padding: 0 10px;
    margin-bottom: 41px;
  }
}
</style>

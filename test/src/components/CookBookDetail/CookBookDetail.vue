<template>
  <div class="CookBookDetail">
      <mt-header title="菜谱详情" class='headertitle' fixed>
        <router-link to="/" slot="left">
          <mt-button  icon='back'></mt-button>
        </router-link>
        <img :src="imgHeart" alt="" slot='right' @click="like" class='like'>
      </mt-header>
      <div class='headerimg'>
          <img :src="cover" alt="">
      </div>
      <article>
          <h1>{{menu_name}}</h1>
          <p class="left">“</p>
          <p class='detail'>
              {{story}}
          </p>
          <p class="right">”</p>
      </article>
      <Usage :materials='materials'></Usage>
      <Step :step='step'></Step>
      <p class='littleTip'>- 小贴士 -</p>
      <div class='TipList'>
        <div>
          {{tips}}
        </div>
      </div>
      <div class="comment">
        <h1>评论</h1>
        <div class="commentItem" v-for="(item,index) in comment" :key="index">
          <div class="itemLeft">
            <img :src="item.image" alt="">
          </div>
          <div class="itemRight">
            <div class="textTop">
              {{item.username}}
            </div>
            <!-- <div class="textBottom">
              {{item.time}}
            </div> -->
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
      cover: '',
      menu_name: '',
      story: '',
      tips: '',
      materials: [],
      step: [],
      img :'/static/img/food2.jpg',
      imgHeart: '/static/img/likes.png',
      isHeart: false,
      comment:[],
    };
  },
components: {
    Usage,
    Step
},
  created() {
  this.getData();
  },
  methods: {
    like () {
      console.log('点赞')
      this.isHeart = !this.isHeart
      if( this.isHeart ) {
        this.imgHeart = '/static/img/like.png'
        const data = {
          "main_menu_id": localStorage.getItem('main_menu_id'),
          "user_id": localStorage.getItem('id')
        }
        const data1 = this.qs.parse(data)
        this.axios.post('http://140.143.75.82:81/index.php/myLikeCreate', data1,{
          headers: {'Content-Type': 'application/json'}
        }).then((res) => {
          if(res.message == '点赞成功') {
            console.log('dddd')
          }
        }).catch((err) => {
          console.log(err)
          console.log('err')
        })
      }
      else {
        this.imgHeart = '/static/img/likes.png'
      }
    },
    getData() {
      const data = {
        "menu_name": localStorage.getItem('menu_name'),
        "user_id": localStorage.getItem('id')
      }
      const data1 = this.qs.parse(data)
      this.axios.post('http://140.143.75.82:81/index.php/select', data1,{
        headers: {'Content-Type': 'application/json'}
      }).then((res) => {
        if(res.status == 200 && res.status && res.data[0] && res.data[0].lenght != 0) {
          const returnData = res.data[0];
          this.story = returnData.story
          this.tips = returnData.tips
          this.materials = returnData.materials
          this.step = returnData.step
          this.menu_name = returnData.menu_name
          this.cover = returnData.cover
          this.comment = returnData.comment
          localStorage.setItem('main_menu_id',returnData.id)
        }
      }).catch((err) => {
        console.log(err)
        console.log('err')
      })
    }
  },
  mounted() {
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

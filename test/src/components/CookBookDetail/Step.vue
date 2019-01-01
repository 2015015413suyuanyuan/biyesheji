<template>
  <div class="page-step">
    <div class="step" v-for="(item, index) in step" :key="index">
      <div class="step-image">
        <img :src="item.img" alt="">
      </div>
      <p>
        {{item.detail}}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-step {
  .step {
      p {
        text-align: left;
        padding-left: 12px;
      }
    .step-image {
      img {
        width: 95vw;
        height: 170px;
      }
    }
  }
}
</style>


<script>
export default {
  name: 'footer-view',
  data() {
    return {
      step: [
        {
          img: '/static/img/food2.jpg',
          detail: '首先制作蔓越莓馅，将蔓越莓热水冲洗后放入小锅，放入一些纯净水，没过果干就可以'
        },
        {
          img: '/static/img/food1.jpg',
          detail: '首先制作蔓越莓馅，将蔓越莓热水冲洗后放入小锅，放入一些纯净水，没过果干就可以'
        }
      ]
    };
  },
  created() {
    
  },
  methods: {
  },

};
</script>
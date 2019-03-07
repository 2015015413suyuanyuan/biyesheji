<template>
  <div class="page-step">
    <p class='cookStepTitle'>- 烹饪步骤 -</p>
    <div class="step" v-for="(item, index) in step" :key="index">
      <p class='num'>步骤 {{index+1}}</p>
      <div class="step-image">
        <img :src="item.image">
      </div>
      <p class='detal'>
        {{item.step}}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-step {
  .step {
    padding-bottom: 24px;
      p {
        text-align: left;
        padding-left: 12px;
        font-size: 16px;
      }
      .detal {
        font-size: 16px;
      }
      .num {
        color: rgba(16, 16, 16, 1);
        font-size: 14px;
        text-align: left;
        font-family: SourceHanSansSC-regular;
        padding-bottom: 8px;
      }
    .step-image {
        width: 95vw;
        height: 170px;
        margin: 0 auto;
        overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .cookStepTitle {
    text-align: center;
    padding: 29px 0 13px;
    font-size: 18px;
    color: #101010;
  }
}
</style>


<script>
export default {
  name: 'footer-view',
  props:['step'],
  data() {
    return {
    };
  },
  created() {
    
  },
  methods: {
  },

};
</script>
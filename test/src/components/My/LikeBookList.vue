<template>
<div class='list'>
  <div class="foodItem">
    <div class='foodItemlfet'>
        <img :src="myFavoriteBookList[0].img" alt="">
    </div>
    <div class='foodItemright'>
        <p>{{myFavoriteBookList[0].name}}</p>
        <input type="button" class="button" @click="del(myFavoriteBookList[1])" v-show="isdel" value='删除'>
        <input type="button" class='button btn' v-show="!isdel" value='确认删除' @click="del111(myFavoriteBookList[1])">
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.list {
  .cookbook {
  padding: 0;
  margin: 0;
  color: #FF9800;
  font-size: 18px; 
  text-align: left;
  padding-left: 10px;
  height: 46px;
  line-height: 46px;
  background-color: white;
  }
.foodItem {
  height: 140px;
  background-color: white;
  margin-bottom: 19px;
    .foodItemlfet {
      float: left;
      vertical-align: middle;
      padding-top: 12px;
      padding-left: 10px;
      img {
        width: 200px;
        height: 120px;
        border-radius: 18px;
      }
    }
  .foodItemright {
    float: right;
    width: 150px;
    height: 140px;
    text-align: left;
    position: relative;
    color: rgba(16, 16, 16, 1);
    font-size: 16px;
    font-family: SourceHanSansSC-regular;
    .button {
    outline: none;
    width: 60px;
    height: 27px;
    border-radius: 4px;
    background-color: #E3E0E0;
    color: #918E8E;
    font-size: 14px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(255, 255, 255, 0);
    position: absolute;
    right: 22px;
    bottom: 8px;
    }
    .btn {
    width: 69px;
    height: 27px;
    color: white;
    background-color: #FF9800;
    }
  }
}
.foodItem::after {
display: block;
content: '';
clear: both;
}
}
</style>


<script>
import Vue from 'vue'
import { MessageBox } from 'mint-ui';

export default {
  name: 'page-tabbar',
  data() {
    return {
      isdel: true,
      isHasBookList: false
    };
  },
  props: {
      myFavoriteBookList: {
          type:Array,
          required: true
      }
  },
  methods: {
    change(){
      this.isHasBookList = !this.isHasBookList
    },
    del(index){
      this.isdel = false
    },
    del111(index) {
      this.$emit('delete',index)
    }
  }
};
</script>
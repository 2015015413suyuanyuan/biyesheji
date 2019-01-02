<template>
  <div class="page-tabbar">
    <input type="search">
  </div>
</template>

<style lang="scss" scoped>
  input {
    display: block;
    width: 100vw;
    height: 100px;
    font-size: 30px;
  }
</style>


<script>
import Vue from 'vue'
import Router from 'vue-router'

export default {
  name: 'page-tabbar',
  data() {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    };
  }
};
</script>



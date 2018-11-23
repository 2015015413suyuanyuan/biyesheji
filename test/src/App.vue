<template>
  <div id="app">
  
    <router-view/>
    <footer-view></footer-view>
  </div>
</template>

<script>
import FooterView from '@/components/FooterView';
export default {
  name: 'App',
 components: {
    'footer-view': FooterView,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
  
    <router-view/>
    <footer-view  v-show="$route.meta.navShow"></footer-view>
  </div>
</template>

<script>
import FooterView from '@/components/common/FooterView';
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
}
  p {
    padding: 0;
    margin: 0;
  }
</style>
<style lang="scss">

$color-primary: white;
 
.mint-header {
  background-color: $color-primary;
  color: #101010;
}
.mint-header-title {
  font-size: 20px;
  overflow: visible;
  padding: 0;
  margin: 0;
}
.mint-header .mint-button {
  font-size: 18px;
}
.mint-button--small {
  width: 49.5vw;
  height: 46px;
  border: 0;
  background-color: white;
  box-shadow: none;
  font-size: 18px;
}
.mint-button::after {
  background-color: white;
}
.mint-checkbox-input:checked + .mint-checkbox-core {
  background-color: white;
}
.mint-checkbox-input:checked + .mint-checkbox-core::after {
  border-color: #ffba00;
}
.mint-checkbox-core::after {
  width: 8px;
  height: 12px;
}
.mint-checkbox-core {
  border: 0;
}
  .mint-checkbox-label {
    font-size: 14px !important;
  }
</style>

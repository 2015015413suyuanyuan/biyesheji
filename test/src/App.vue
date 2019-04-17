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
  width: 49%;
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
textarea.ivu-input {
  resize: none !important;
}
.textInput textarea.ivu-input{
    outline: none;
    margin: 0 auto;
    display: block;
    clear: both;
    width: 340px;
    // height: 32px;
    border-radius: 10px;
    background-color: rgba(244, 243, 243, 1);
    color: rgba(136, 136, 136, 1);
    font-size: 14px;
    text-align: left;
    font-family: Roboto;
    border: 1px solid rgba(255, 255, 255, 0);
}
.ivu-input {
  outline: 0;
  border: 0;
  border-radius: 0;
}
.ivu-input:focus {
  outline: 0;
  border: 0;
  box-shadow: 0;
  border-radius: 0;
}
.ivu-input:hover {
  border: 0;
  box-shadow:none;
}
.menuName {
  margin-top: 10px;
  margin-bottom: 10px;
}
.menuName>.ivu-input{
  text-align: center !important;
  font-size: 24px;
}
.story {
  margin-top: 10px;
}
.story>.ivu-input {
  font-size: 20px;
}
.tipInput>.ivu-input {
  font-size: 16px;
}
.ivu-modal-confirm-body {
  padding-left: 0;
}
.mint-msgbox-confirm {
background-color: #ffba00;
color: white;
}
.mint-msgbox-message {
  color: #101010;
  font-size: 18px;
  letter-spacing: 2px;
}
.mint-msgbox-cancel {
  border-right: 0;
}
.mint-msgbox-content {
  border-bottom: 1px solid rgb(243, 238, 238);
}
.ivu-radio-group {
  float: right;
  height: 50px;
  line-height: 50px;
}
.ivu-radio-checked .ivu-radio-inner {
  border-color: #ffba00;
}
.ivu-radio-checked:hover .ivu-radio-inner{
    border-color: #ffba00;
}
.ivu-radio-inner:after{
  background-color: #ffba00;
}
.mint-checklist-title {
  color: #FF9800;
  font-size: 16px;
}
.mint-toast.is-placebottom {
    bottom: 80px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0)
}
.mint-toast {
  padding: 5px 12px !important;
  background: rgba(0, 0, 0, 0.7);
}
.ivu-input {
  font-size: 14px;
}
</style>

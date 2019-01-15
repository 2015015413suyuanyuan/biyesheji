<template>
    <div class="edit-div1"
         v-html="innerText"
         :contenteditable="canEdit"
         @focus="isLocked = true"
         @blur="Locked"
         @input="changeText"
         :placeholder='placeholderValue'
         >
    </div>
</template>
<script>
export default{
  name: 'editDiv',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholderValue:{
      type: String,
      default: ''
    },
    canEdit: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      innerText: this.value,
      isLocked: false,
      placeHolderStyle: {}
    }
  },
  watch: {
    'value'(){
      if (!this.isLocked || !this.innerText) {
        this.innerText = this.value;
      }
    }
  },
  methods: {
    changeText(){
      this.$emit('input', this.$el.innerHTML);
    },
    Locked(){
      this.isLocked = false;
      this.$emit('blurUsage',this.$el.innerHTML);
    }
  }
}
</script>
<style lang="scss"  scoped>
  .edit-div1 {
    text-align: left;
    margin: 0 auto;
    width: 45vw;
    min-height: 30px;
    max-height: 300px;
    _height: 26px;
    line-height: 30px;
    overflow: auto;
    word-break: break-all;
    outline: none;
    user-select: text;
    white-space: pre-wrap;
    color: #101010;
    font-size: 10px;
    &[contenteditable=true]{
      -webkit-user-modify: read-write-plaintext-only;
      font-size: 18px;
      &:empty:before {
        content: attr(placeholder);
        font-size: 16px;
        display: block;
        color: #A29999;
      }
    }
  }
</style>

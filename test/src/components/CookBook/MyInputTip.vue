<template>
    <div class="edit-div3"
         v-html="innerText"
         :contenteditable="canEdit"
         @focus="isLocked = true"
         @blur="isLocked = false"
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
    }
  }
}
</script>
<style lang="scss"  scoped>
  .edit-div3 {
    margin: 0 auto;
    width: 95vw;
    min-height: 30px;
    max-height: 300px;
    _height: 26px;
    line-height: 24px;
    overflow: auto;
    word-break: break-all;
    outline: none;
    user-select: text;
    white-space: pre-wrap;
    color: #101010;
    font-size: 8px;
    &[contenteditable=true]{
      -webkit-user-modify: read-write-plaintext-only;
      &:empty:before {
        content: attr(placeholder);
        font-size: 16px;
        display: block;
        color: #A29999;
      }
    }
  }
</style>

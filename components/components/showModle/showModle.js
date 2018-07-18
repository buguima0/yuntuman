// components/showModle/showModle.js
Component({
  options:{
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'提示'
    },
    modelShow:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hiddenReminder(){
      this.triggerEvent("hiddenModle", {}, { bubbles: true, composed: true })
    }
  }
})

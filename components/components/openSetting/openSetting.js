// components/openSetting/openSetting.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:{
      type:String,
      value:"如需正常使用，请按确认并在授权管理中授权"
    },
    showOpenSetting:{
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
    hidden(){
      this.triggerEvent("hidden", {}, { bubbles: true, composed: true })
    }
  }
})

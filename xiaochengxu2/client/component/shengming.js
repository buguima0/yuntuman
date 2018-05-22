// pages/component/shengming.js
const myBehavior = require("my-behavior")
Component({
  behaviors: [myBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
  created(){
    console.log("created")
  },
  attached(){
    console.log("attached")
  },
  ready(){
    console.log("ready")
  },
  moved(){
    console.log("moved")
  },
  detached(){

  },
  /**
   * 组件的初始数据
   */
  data: {
    show:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(){
      this.setData({
        show:!this.data.show
      })
    },
    myBehaviorMethod(){
      console.log('a')
    }
  }
})

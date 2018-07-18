// components/indent-detail-component/indent-detail-component.js
Component({
  externalClasses: ['towup', 'towdown','iconfont'],
  /**
   * 组件的属性列表
   */
  properties: {
    currentIndent:{
      type:Object,
      value:{}
    },
    userInfo: {
      type: Object,
      value: {}
    },
    isToggle:{
      type:Boolean,
      value:false
    },
    StatusString: {
      type: Array,
      value: ['', '待安装', '安装中','已完成']
    },
    TerTypes: {
      type: Array,
      value: ['', '有线', '无线', '有线，无线']
    }
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    isShow:false
  },
  /**
   * 生命周期钩子
   */
  attached() {
    // 不显示切换 默认展开
    if (!this.data.isToggle) {
      this.setData({
        isShow:true
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
  /**
   * 是否展开
   */
    toggleShow(){
      this.setData({
        isShow: !this.data.isShow
      })
    }
  }
})

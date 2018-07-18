// components/list/list.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: [],
      observer: (newVal, oldVal) => {

      }
    },
    textLineHeight:{                   //设置描述行高
      type:Number,
      value:100
    },

    hasIcon:{                           //是否显示图标
      type:Boolean,
      value:true
    },
    stateLeft:{                        //状态描述是否显示在坐标
      type:Boolean,
      value:false
    },
    hasAngleRight: {                   //是否右箭头
      type: Boolean,
      value: true
    },
    alginRight:{
      type: Boolean,
      value: false
    },
    stateColor:{
      type:String,
      value:'#b2b2b2'
    },
    fontSize:{
      type:Number,
      value:32
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
    chooseTab(e) {
// title存在就是 车辆列表 编辑按钮  否则就是普通list
       if(e.target.dataset.title){
         const data= e.currentTarget.dataset.item
         data.choosed =e.target.dataset.title
        this.triggerEvent("chooseTab", { data }, { bubbles: false, composed: false })
       } else{
         const data = e.target.dataset.item
         this.triggerEvent("chooseTab", { data }, { bubbles: false, composed: false })
      } 
    }
  }
})
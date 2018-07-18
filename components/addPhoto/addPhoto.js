// components/addPhoto/addPhoto.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    photos:{
      type:Array,
      value:[],
      observer:function(newData){
      this.setData({
        photos: newData
      })
      }
    },
    title:{
      type:String,
      value:'图片'
    },
    hasTitleIcon: {
      type: Boolean,
      value: false
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
    upPhoto(e){
      const data = {
        item: e.target.dataset.data
      }
      this.triggerEvent("upPhoto", { data }, { bubbles: false, composed: false })
    }
  }
})

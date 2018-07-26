// components/forms/forms.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    forms: {
      type: Array,
      value: [],
      observer: function(newForms,oldForms){
      }
    },
    hasTitleIcon:{
      type:Boolean,
      value:false
    },
    btnTitle:{
      type:String,
      value:'确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    regionString:''
  },
  

  /**
   * 组件的方法列表
   */
  methods: {

    typeChange(e) {
      const data = {
        value:e.detail.value,
        item:e.target.dataset.data
      }
      this.triggerEvent("pickerChange", { data }, { bubbles: false, composed: false })
    },
    inputChange(e) {
      const data = {
        value: e.detail.value,
        item: e.target.dataset.data
      }
      this.triggerEvent("inputChange", { data}, { bubbles: false, composed: false })
    },
    radioChange(e){
      const data = {
        value: e.detail.value,
        item: e.target.dataset.data
      }
      this.triggerEvent("radioChange", { data}, { bubbles: false, composed: false })
    },
    switchChange(e){
      const data = {
        value: e.detail.value,
        item: e.target.dataset.data
      }
      this.triggerEvent("switchChange", { data }, { bubbles: false, composed: false })
    },
    regionChange(e){
      const data = {
        value: e.detail.value,
        item: e.target.dataset.data
      }
      this.triggerEvent("regionChange", { data }, { bubbles: false, composed: false })
    },
    dateChange(e){
      const data = {
        value: e.detail.value,
        item: e.target.dataset.data
      }
      this.triggerEvent("pickerChange", { data }, { bubbles: false, composed: false })
    },
    submit(e){
      const data = {
        value: e,
      }
      this.triggerEvent("formsubmit", data , { bubbles: false, composed: false })
    },
    upPhoto(e){
      const data = {
        item: e.target.dataset.data
      }
      this.triggerEvent("imageChange", { data }, { bubbles: false, composed: false })
    },
    selfRegionChange(e){
     const data =e.detail
     data.item = e.currentTarget.dataset.data
     this.setData({
       regionString: data.value[0] + data.value[1] + data.value[2] 
     })
     this.triggerEvent("selfRegionChange", data , { bubbles: false, composed: false })
    },
  }
})
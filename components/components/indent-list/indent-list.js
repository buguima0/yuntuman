// component/indent-list/indent-list.js
Component({
  externalClasses: ['up', 'down', 'iconfont'],
  /**
   * 组件的属性列表
   */
  properties: {
    indents: {
      type: Array,
      value: [],
      observer: function () {
      }
    },
    isFinished: {
      type: Boolean,
      value: false
    },
    composed: {
      type: Boolean,
      value: false,
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
    /** 
      * 显示进度
      */
    showProgress(e) {
      // target 有时候没有数据 currentTarget有
      let index = e.target.dataset.idx || e.currentTarget.dataset.idx
      this.triggerEvent("showProgress", { index }, {
        bubbles: true, composed: false
      })
    },
    /**
     * 接单
     */
    order(e) {
      let index = e.target.dataset.idx || e.currentTarget.dataset.idx
      this.triggerEvent("orderIndent", { index }, {
        bubbles: true, composed: false
      })
    },
    /**
      * 导航到录入界面
      */
    entering(e) {
      let index = e.target.dataset.idx || e.currentTarget.dataset.idx
      this.triggerEvent("entering", { index }, {
        bubbles: true, composed: false
      })
    },
    /**
     * 工单详情
     */
    detailShow(e) {
      let index = e.target.dataset.idx || e.currentTarget.dataset.idx
      this.triggerEvent("detailShow", { index }, {
        bubbles: true, composed: this.data.composed
      })
    }
  }
})


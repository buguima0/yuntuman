// components/histogram-component/histogram-component.js
let timers
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgShow: {
      type: Boolean,
      value: true
    },
    lineHeight: {
      type: Number,
      value: 480,
      observer: function () {
      }
    },
    installData: {
      type: Array,
      value: [],
      observer: function (oldData, newData) {
        this.getMultiple()
      }
    },
    unit: {
      type: String,
      value: "单"
    },
    queryType: {
      type: Number,
      value: 2
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    touchIndex: 0,
    viewto: 'to-10',
    currentLeft: 0,
    timer: {},
    left:174,
    imageLeft:183,
    animationData:{}
  },
 
  ready() {
    let that = this
    setTimeout(function () {
      that.getMultiple()
    }, 100)
  },
  moved() {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取每行间隔数
    getMultiple() {
      let installData = this.data.installData
      let numArray = []
      installData.forEach(((item) => {
        // 判断是否有值 没有值 计算出来会是无穷大
        if (item.Finished) {
          numArray.push(parseInt(item.Finished))
        }
      }))

      let touchIndex = installData.length - 4
      let viewto = "to-" + (installData.length - 7)
      // 图标纵坐标倍数 也就是一格表示多少 最小为1
      let multiple = Math.max(Math.round(Math.max(...numArray) / 3), 1)
      this.setData({
        multiple,
        viewto,
        touchIndex
      })
    },
    /**
 * 当前点击的柱状图
 */
    changeTouch(e) {
      let data = this.data.installData
      let index = e.target.dataset.idx || e.currentTarget.dataset.idx
      if (JSON.stringify(data[index]) === "{}") {
        return
      }
      let viewto = "to-" + (index - 3)
      this.setData({
        viewto
      })
      clearTimeout(this.data.timer)
      this.data.timers = setTimeout(() => {
        this.setData({
          touchIndex: index
        })
      }, 200)

    },
    /**
     * touch事件处理函数
     */
    touch(e) {

    },
    /**
     * scroll事件
     */
    scroll(e) {

      let scrollLeft = e.detail.scrollLeft
      let allData = this.data.installData
      let all = allData.length
      // 每一柱子的宽度
      let oneWidth = e.detail.scrollWidth / all
      let index = Math.round(scrollLeft / oneWidth)
      let viewto = "to-" + index
      index = index + 3
      //  计算 中间柱子位置
      let left = oneWidth * 3 + (oneWidth - 60 / 110 * oneWidth)/2
      let imageLeft  = left + 40 / 110 * oneWidth/2
      if (JSON.stringify(allData[index]) === "{}") {
        return
      }
      let height = this.data.lineHeight / this.data.multiple / 4 * allData[index].Finished
    //   let animation= wx.createAnimation({
    //   })
    //  this.animation = animation
    //  animation.height(height, "rpx").step()
      clearTimeout(this.data.timer)
      this.data.timer = setTimeout(() => {
        this.setData()
        this.setData({
          touchIndex: index,
          viewto,
          left,
          imageLeft,
          // animationData:this.animation.export()
        })
      }, 200)
      this.triggerEvent('indexChange', {
        currentIndex: index
      }, { bubbles: true, composed: false })
    },
  }
})

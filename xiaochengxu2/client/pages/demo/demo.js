Page({

  /**
   * 页面的初始数据
   */
  data: {
    scale: 14,
    w:0,
    h:0,
    markers: [{
      label:{
        content:"是不是哦",
        x:100,
        y:0,
        color:"#f0f",
        fontSize:15
      },
      callout: { 
        content: "玩玩哦",
        color:"#ffffff",
      fontSize:16,
      display:"ALWAYS",
      bgColor:"#000000",
      borderRadius:5
      },
      iconPath: "/common/imges/定位终端.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 25,
      height: 25
    }, {
      iconPath: "/common/imges/专业安装.png",
      id: 1,
      latitude: 23.100100,
      longitude: 113.324520,
      width: 25,
      height: 25
    }
    ],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.3345211,
        latitude: 23.12229
      }, {
          longitude: 113.3245211,
          latitude: 23.13229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: false,
      arrowLine: true,
      borderColor: "black",
      borderWidth: 120
    }],
    controls: [{
      id: 1,
      iconPath: '/common/imges/售后服务.png',
      position: {
        left: 0,
        top: 100 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }, {
      id: 2,
      iconPath: '/common/imges/技术支持.png',
      position: {
        right: 100,
        top: 0,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    circles: [
      {
        longitude: 113.3245211,
        latitude: 23.10229,
        color: "#ff0000",
        fillColor: "#00000020",
        strokeWidth: 0,
        radius: 1200
      },
    ],
    includePoints:[{
      longitude: 113.3245211,
      latitude: 23.10229,
    }]
  },
  regionchange(e) {
    console.log(e.type)
    console.log("11")
  },
  markertap(e) {
    console.log(e.markerId)
    console.log("000")
  },
  controltap(e) {
    console.log(e.controlId)
    var scale = this.data.scale
    if (e.controlId === 1) {
      scale+=1;
      scale= Math.min(scale,18)
      console.log(scale)
      this.setData({
        scale: scale,
        includePoints: [{
          longitude: 113.3245211,
          latitude: 23.13229,
        }]
      })
    } else if (e.controlId === 2){
    
      scale-=1;
      scale = Math.max(scale, 5)
      console.log(scale)
      this.setData({
        scale: scale
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let thia = this
    wx.getSystemInfo({
      success: function (res) {
        thia.setData({
          w: res.screenWidth,
          h: res.screenHeight
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.shengming = this.selectComponent("#shengming");
   
  },
  change() {
    this.shengming.change()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
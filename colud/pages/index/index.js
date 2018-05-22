let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenW: 0,
    screenH: 0,
    latitude: 23.099994,
    longitude: 113.324520,
    equipments:[],
    currentIndex:0,
    showToggle:true,
    mapContext:{},
    menuShow:false,
    markers: [{
      iconPath: "/common/images/car.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/common/images/定位终端.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }, {
      id: 2,
      iconPath: '/common/images/定位终端.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const appid = 'wx8ace3d6abd43b31b'
    const key = "a78ed1219efc0c4c6391b317419396ab"
    wx.login({
      success:function(res){
       const code = res.code
       console.log(res)
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+appid+'&secret='+key+'&js_code='+code+'&grant_type=authorization_code',
          data: '',
          header: {},
          method: 'GET',
          success: function (res) {
            console.log(res)
           },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    })
    let that = this
    let controls = this.data.controls
    // 获取设备宽高
    wx.getSystemInfo({
      success: function (res) {
        app.globalData.screenW = res.windowWidth
        app.globalData.screenH = res.windowHeight
        // 设置 控制图标位置
        controls[0].position.top = res.windowHeight - 180 - 80
        controls[1].position.top = res.windowHeight - 180 - 80
        controls[1].position.left = res.windowWidth - 50
       let  equipments = app.globalData.equipments
       let markers =[]
       let mapContext = wx.createMapContext("map", this)
       for (let i = 0; i < equipments.length;i++){
         markers.push({
           iconPath: "/common/images/car.png",
           id: i,
           latitude: equipments[i].latitude,
           longitude: equipments[i].longitude,
           width: 50,
           height: 50
         })
       }

        that.setData({
          screenW: res.windowWidth,
          screenH: res.windowHeight,
          controls: controls,
          equipments: equipments,
          latitude: equipments[that.data.currentIndex].latitude,
          longitude: equipments[that.data.currentIndex].longitude,
          markers,
          mapContext
        })
      }
    })
   
    // 请求数据
    // const data = {
    //   "password": "E10ADC3949BA59ABBE56E057F20F883E",
    //   "account": "admin"
    // }

    // wx.request({
    //   url: 'http://119.147.218.67:8308/Api/Ter/postTerList',
    //   data: data,
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    
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

  },
  /**
   * 点击地图控件
   */
  controltap(e){
    let showToggle = this.data.showToggle
    let that =this
    let latitude
    let longitude
    let currentCar = this.data.equipments[this.data.currentIndex]
    let mapContext = this.data.mapContext
    if (e.controlId===1){
      if (showToggle){
        latitude = currentCar.latitude
        longitude = currentCar.longitude
      }else{
        //获取当前位置
        wx.getLocation({
          success: function (res) {     
              latitude=res.latitude,
              longitude=res.longitude
          },
        })  
      }
      setTimeout(()=>{
        that.setData({
          latitude: latitude,
          longitude: longitude,
          showToggle: !showToggle
        })
        mapContext.getRegion({
          success: function () {
          }
        })
      },500)
    
    } else if (e.controlId === 2){

    }
    
  },
  /**
   * 视野变化
   */
  regionchange(){

  },
  /**
   * 下一个设备
   */
  downEquipment(){
    let currentIndex = this.data.currentIndex
    let equipments = this.data.equipments
    let mapContext = this.data.mapContext
    currentIndex++
    if (currentIndex > equipments.length-1){
      currentIndex=0
    }
    let latitude = equipments[currentIndex].latitude
    let longitude = equipments[currentIndex].longitude
    this.setData({
      currentIndex,
      latitude: latitude,
      longitude: longitude,
    })
    //
    mapContext.getRegion({
      success: function () {
      }
      })
  },
  /**
   * 上一个设备
   */
  upEquipment(){
    let currentIndex = this.data.currentIndex
    let equipments = this.data.equipments
    let mapContext = this.data.mapContext
    currentIndex--
    if (currentIndex <0) {
      currentIndex = equipments.length-1
    }
    let latitude = equipments[currentIndex].latitude
    let longitude = equipments[currentIndex].longitude
    this.setData({
      currentIndex,
      latitude: latitude,
      longitude: longitude,
    })
    mapContext.getRegion({
      success: function () {
      }
    })
  },
  /**
   * 显示底部菜单
   */
  showMenu(){
    this.setData({
      menuShow:true
    })
  },
  /**
   * 隐藏底部菜单
   */
  closeMenu(){
    this.setData({
      menuShow: false
    })
  }
})
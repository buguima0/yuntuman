Page({

  /**
   * 页面的初始数据
   */
  data: {
    passwordShow: true,                             // 密码可见
    username: '',                                   // 用户名
    userWarn: '',                                   // 用户名警告
    passwordWarn: "",                               // 密码警告
    userBorderColor: "",                            // 用户名边框颜色class
    passwordBorderColor: "",                        // 密码边框颜色class
    userErorr: false,                               // 用户名是否错误 
    passwordErorr: false,                           // 密码错误
    modelShow: false                                // 弹窗展示
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
   * 显示密码
   */
  toggle() {
    this.setData({
      passwordShow: !this.data.passwordShow
    })
  },
  /**
   * 清楚账号
   */
  clearUser() {
    this.setData({
      username: ""
    })
  },
  /** 
   * 提交表单事件
   */
  formSubmit(e) {
    wx.showToast({
      title: "正在绑定",
      icon: "loading"
    })
    setTimeout(function () {
      wx.switchTab({
        url: "/pages/index/index"
      })
    }, 1000)

    // 登录验证 
    if (false) {
      wx.request({
        url: '',
        data: '',
        header: {},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          // 判定账号和密码是否正确
          if ("用户不存在") {
            this.setData({
              modelShow: true,
              userErorr: true,
            })
          } else if ("密码错误") {
            this.setData({
              modelShow: true,
              passwordErorr: true,
            })
          }
        },
        fail: function (res) {
        },
        complete: function (res) { },
      })
    }
  },
  /** 
   * 检测用户名
   */
  checkUser(e) {
    let userBorderColor = "";
    let userWarn = "";
    // 判断输入值
    if (e.detail.value.length < 6) {
      userBorderColor = "border-red";
      userWarn = '字符6~18位阿拉伯数字和大小写字母'
    }
    // 改变警告内容
    this.setData({
      userWarn: userWarn,
      userBorderColor: userBorderColor
    })
  },
  /**
   * 检测密码
   */
  checkPassword(e) {
    let passwordBorderColor = "";
    let passwordWarn = "";
    // 判断输入值
    if (e.detail.value.length < 6) {
      passwordBorderColor = "border-red";
      passwordWarn = '6~16位阿拉伯数字和大小写字母'
    }
    // 改变样式
    this.setData({
      passwordBorderColor: passwordBorderColor,
      passwordWarn: passwordWarn
    })
  },
  /**
   * 隐藏验证弹窗
   */
  hiddenReminder() {
    this.setData({
      modelShow: false,
      passwordErorr: false,
      userErorr: false
    })
  }
})
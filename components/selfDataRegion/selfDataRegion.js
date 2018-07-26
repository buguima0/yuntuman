// components/selfDataRegion/selfDataRegion.js
//获取应用实例
// var app = getApp()
// var util = require('../../utils/util.js')
import area from './citys.js'

var areaInfo = []; //所有省市区县数据

var provinces = []; //省

var citys = []; //城市

var countys = []; //区县

var index = [0, 0, 0];

var cellId;

var t = 0;
var show = false;
var moveY = 200;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:''
    },
    height:{
      type:Number,
      value:100
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: show,
    provinces: provinces,
    citys: citys,
    countys: countys,
    value: [0, 0, 0]
  },
  ready() {
    // cellId = options.cellId;
    var that = this;
    var date = new Date()
    // console.log(date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日");
    if (area) {
      //获取省市区县数据
      area.getAreaInfo(function(arr) {
        areaInfo = arr;
        //获取省份数据
        getProvinceData(that);
      });
      this.animation = wx.createAnimation({
        transformOrigin: "50% 50%",
        duration: 0,
        timingFunction: "ease",
        delay: 0
      })
      this.animation.translateY(200 + 'vh').step();
      this.setData({
        animation: this.animation.export(),
        show: show
      })
    }

  },
  /**
   * 组件的方法列表
   */
  methods: {
    //滑动事件
    bindChange: function(e) {
      var val = e.detail.value
      // console.log(e)
      //判断滑动的是第几个column
      //若省份column做了滑动则定位到地级市和区县第一位
      if (index[0] != val[0]) {
        val[1] = 0;
        val[2] = 0;
        getCityArr(val[0], this); //获取地级市数据
        getCountyInfo(val[0], val[1], this); //获取区县数据
      } else { //若省份column未做滑动，地级市做了滑动则定位区县第一位
        if (index[1] != val[1]) {
          val[2] = 0;
          getCountyInfo(val[0], val[1], this); //获取区县数据
        }
      }
      index = val;

      //更新数据
      this.setData({
        value: [val[0], val[1], val[2]],
        province: provinces[val[0]].name,
        city: citys[val[1]].name,
        county: countys[val[2]].name
      })

    },
    //输出数据
    getValue(val){
      
      const data={
        idArray: [provinces[val[0]].id, citys[val[1]].id, countys[val[2]].id],
        value:[ provinces[val[0]].name , citys[val[1]].name , countys[val[2]].name]
      }
      this.triggerEvent("regionChange",  data , { bubbles: false, composed: false })
    },
    //移动按钮点击事件
    translate: function (e) {
      if (t == 0) {
        moveY = 0;
        show = false;
        t = 1;
      } else {
        moveY = 200;
        show = true;
        t = 0;
      }
      // this.animation.translate(arr[0], arr[1]).step();
      animationEvents(this, moveY, show);

    },
    //隐藏弹窗浮层
    hiddenFloatView(e) {
      moveY = 200;
      show = true;
      t = 0;
      this.getValue(this.data.value)

      animationEvents(this, moveY, show);

    },
    nono: function () { }

  }
})
//动画事件
function animationEvents(that, moveY, show) {
  // console.log("moveY:" + moveY + "\nshow:" + show);
  that.animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: 400,
    timingFunction: "ease",
    delay: 0
  })
  that.animation.translateY(moveY + 'vh').step()

  that.setData({
    animation: that.animation.export(),
    show: show
  })

}

// ---------------- 分割线 ---------------- 

//获取省份数据
function getProvinceData(that) {
  provinces = areaInfo
  that.setData({
    provinces: areaInfo
  })

  //初始化调一次
  getCityArr(0, that);
  getCountyInfo(0, 0, that);
  that.setData({
    province: "北京市",
    city: "市辖区",
    county: "东城区",
  })

}

// 获取地级市数据
function getCityArr(count, that) {
  citys = areaInfo[count].child
  that.setData({
    city: "",
    citys: areaInfo[count].child,
    value: [count, 0, 0]
  })
}

// 获取区县数据
function getCountyInfo(column0, column1, that) {

  countys = areaInfo[column0].child[column1].child
  that.setData({
    county: "",
    countys: areaInfo[column0].child[column1].child,
    value: [column0, column1, 0]
  })
}
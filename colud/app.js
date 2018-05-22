//app.js
App({
  onLaunch: function () {

  
  },
  globalData: {
    userInfo: null,
    equipments:[
      {
        equipmentName:"奔驰的小轿车",
        latitude: 23.199994,
        longitude: 113.324520,
        state:"运行",
        speed:100,
        getLocationTime:'2018-03-10 10:00:00',
        address:"广东省深圳市龙岗区五和大道和堪工业区"
      },
      {
        equipmentName: "睡着的大卡车",
        latitude: 23.199994,
        longitude: 113.424520,
        state: "停止",
        speed: 0,
        getLocationTime: '2018-03-10 10:00:00',
        address: "广东省深圳市龙岗区五和大道和堪工业区"
      },
      {
        equipmentName: "飞起的公交车",
        latitude: 23.299994,
        longitude: 113.324520,
        state: "运行",
        speed: 1000,
        getLocationTime: '2018-03-10 10:00:00',
        address: "广东省深圳市龙岗区五和大道和堪工业区"
      }, {
        equipmentName: "躺下的地铁",
        latitude: 23.199994,
        longitude: 113.524520,
        state: "停止",
        speed: 0,
        getLocationTime: '2018-03-10 10:00:00',
        address: "广东省深圳市龙岗区五和大道和堪工业区"
      }
    ]
  }
})
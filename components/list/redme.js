// tabs:[


//   title: "",  列表的标题
//   icon?: '',   列表的标题图标
//   iconColor?: '' 图标的颜色
//   image?：''图标图标的地址
//   describes?: //标题右边描述
//       [{ title :  ''     //key值
//       content:    ''       //value             
//         }]
  
//   }]
//   eidtor?:false         右边是否有编辑删除按钮
// toDetail?: false        右边是否显示详情按钮

// state：''                描述值 前后显示的内容
// stateIcon ：''               右边的图标地址
// ]
// // 属性
// textLineHeight  标题的行高
// hasAngleRight  是否有右边箭头
// hasIcon  左边是否有标题图标
// stateLeft 中间的state  值显示在左边 颜色#333  默认显示在右边颜色 #ccc
// alginRight  state值  是否 右对齐
// stateColor state 的颜色
// fontSize  字体大小

// 事件
// chooseTab 选择列表item 
// chooseTab(e) {

//   const title = e.detail.data.title
//   if (title === "我的资料") {
//     wx.navigateTo({
//       url: "/pages/own/myInformation/myInformation",
//     })
//   } else if (title === "titel的值") {
//     wx.navigateTo({
//       url: "/pages/own/myWallet/myWallet",
//     })
//   } else if (title === "titel的值") {}




// }





//  或者选择 编辑按钮 删除按钮  详情按钮


// chooseed(e) {
//   let car = e.detail.data

//   if (car.choosed == 'eidtorBtn') {
//     console.log('选择了编辑')

//   } else if (car.choosed == 'cancleBtn') {
//     console.log('选择了删除')
  
//   } else if (car.choosed == 'seeBtn') {
//      点击查看按钮
//   }
       

// },
// 传入值

// forms: [

//   {
//     formType: 'picker（普通表单）' | 'input（普通输入框）' | 'radio（单选)' | 'switch（开关按钮）' | 'pickerRegion（省市区选择器）' | 'headIcon（头像选）' |'datePicker（日期选择器）'|'selfDataRegion'（自定义省市）,
//     title: '标题一',  标题的值
//     types: ['a', 'b', 'c'], 普通选择器的值
//     value: '',      表单的值
//     currentType: -1,    普通选择器当前选择的index
//     defaultType: '设备类型', 普通选择器默认显示的值
//     name: '',             表单对应的name
//     inputType: ''       表单类型
//     placeholder:''   表单的提示语
//     region:['省'，'市'，'区']         地址数组
//     customItem:""    省份选择器的默认提示，
//     image  上传图片地址
//   }

// ]
//属性
// forms：渲染的数组
// hasTitleIcon： 标题右边是否有五角星图标
// btnTitle：底部按钮标题名


// 事件
//pickerChange 普通选择器值改变事件
// inputChange  输入框值改变事件
// radioChange  单选框改变事件
// switchChange  开关值改变事件
// regionChange  省分改变事件
// formsubmit  提交表单事件
// imageChange  上传头像事件
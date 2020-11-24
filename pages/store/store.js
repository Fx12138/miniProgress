// pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    list:[
      {
        name:'张三',
        age:55
      },
      {
        name:'里斯',
        age:55
      },
      {
        name:'怀庆',
        age:55
      }
    ],
    person:{
      name:'dada',
      age:55,
      sex:'男'
    },
    items:[
      {
        id:0,
        title:"首页",
        isactive:true
      },
      {
        id:1,
        title:"推荐",
        isactive:false
      },
      {
        id:2,
        title:"分类",
        isactive:false
      },
      {
        id:3,
        title:"关于",
        isactive:false
      }
    ]
  },
  handleinput(e){
    console.log(e.detail.value);
    this.setData({
      num:e.detail.value
    })
  },
  handlenum(e){
    const number = e.currentTarget.dataset.number;
    console.log(number)
    this.setData({
      num:this.data.num + number*1
    })
  },
  getUserInfo(e){
    console.log(e)
  },

  //父组件自定义事件，用来接受子组件传递的数据
  handleItemChange(e){
    const {index} = e.detail;
    let {items}=this.data;
      items.forEach((v,i)=>i===index?v.isactive=true:v.isactive=false);
      this.setData({
        items
        
      })
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

  }
})
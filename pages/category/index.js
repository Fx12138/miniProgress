// pages/category/index.js

import {request} from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左侧的菜单数据
    leftMenuList:[],
    //右侧商品数据
    rightContent:[],
    //被点击的左侧菜单
    currentIndex:0
    
  },
  //接口获取的数据
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 使用缓存技术
     * 1、先看一下本地存储中有无数据
     *    {time：Date.now(),data:[]}
     * 2、没有旧数据，直接发送请求
     * 3、有旧数据且旧数据没有过期就使用本地存储的数据
     */

     //1 获取本地存储中的数据
     const Cates = wx.getStorageSync('cates');
     //2  判断
     if(!Cates){
       //不存在，发送请求获取数据
       this.getCates();
     }else{
       //有旧的数据 设置超时事件 
       if(Date.now()-Cates.time>1000*10){
        console.log('重新发送请求')
         //数据已经过期，重新发送请求
         this.getCates();
       }else{
         console.log('用缓存中的数据')
         //使用缓存中的数据
        this.Cates=Cates.data
        // 设置左侧菜单的数据
        let leftMenuList=this.Cates.map(v=>v.cat_name)
        //设置右侧内容数据
        let rightContent=this.Cates[0].children
        this.setData({
          leftMenuList,
          rightContent
        })
       }
     }
  },
  //获取分类数据
  getCates(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    }).then(result=>{
        this.Cates=result.data.message
        //把数据缓存到本地存储中
        wx-wx.setStorageSync('cates', {time:Date.now(),data:this.Cates})

        // 设置左侧菜单的数据
        let leftMenuList=this.Cates.map(v=>v.cat_name)
        //设置右侧内容数据
        let rightContent=this.Cates[0].children
        this.setData({
          leftMenuList,
          rightContent
        })
        
        
      }
    )
  },
  //点击菜单
  handleMenuClick(e){
    const {index}=e.currentTarget.dataset;
    //设置右侧内容数据
    let rightContent=this.Cates[index].children;
    this.setData({
      currentIndex:index,
      rightContent
    })

    
    
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
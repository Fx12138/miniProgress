//index.js
//获取应用实例
const app = getApp()

import {request} from "../../request/index.js"

Page({
  data: {
    swiperList:[],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },





  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面开始加载的时候就会触发的事件
  onLoad: function () {
    //1、发送异步请求获取轮播图数据
    // wx-wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   method: "GET",
    //   timeout: 5000,
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   },
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })
    request(
      {
        url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
      }
    ).then(result=>{
      this.setData({
        swiperList:result.data.message
      })
    })
  }
})

// pages/user/user.js
const qcloud = require("../../vendor/wafer2-client-sdk/index.js")
const config = require("../../config.js")
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    authType: app.data.authType
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onTapLogin() {
    app.login({
      success: ({userInfo}) => {
        this.setData({
          userInfo: userInfo,
          authType: app.data.authType
        })
      },
      error: () => {
        this.setData({
          authType: app.data.authType
        })
      }
    })
  },
  onTapAddress() {
    wx.showToast({
      icon: "none",
      title: '功能暂未开放',
    })
  },
  onTapKf() {
    wx.showToast({
      icon: "none",
      title: '功能暂未开放',
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
    app.checkSession({
      success: ({userInfo}) => {
        this.setData({
          userInfo,
          authType: app.data.authType
        })
      }
    })
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
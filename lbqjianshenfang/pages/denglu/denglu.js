// pages/denglu/denglu.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://m.qpic.cn/psb?/V10KNnd03rkHsX/v0m7g9xrnwzxgS*W7JeqxQN7j6oQ.6iHTGDzkvdx1cU!/b/dLYAAAAAAAAA&bo=OASoBgAAAAABF6I!&rf=viewer_4',
      'http://m.qpic.cn/psb?/V10KNnd03rkHsX/Gm0lWI42Alb1TWqwkoGGaBY2Jy7zMjz9opj3U*0f6.0!/b/dMUAAAAAAAAA&bo=OASoBgAAAAARF7I!&rf=viewer_4',
      'http://m.qpic.cn/psb?/V10KNnd03rkHsX/VZmdSTvJ9SyPCeVoQDtHnbszCchWnHU8FKde25PR*QM!/b/dL8AAAAAAAAA&bo=OASoBgAAAAARF7I!&rf=viewer_4',
      'http://m.qpic.cn/psb?/V10KNnd03rkHsX/Z2f.Sd4G9y4RPTjXxDIf3gZkEaCCrdDn7WNRePrKVNg!/b/dEYBAAAAAAAA&bo=OASoBgAAAAARF7I!&rf=viewer_4'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 4000,
    duration: 2000,
 
  },

  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
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
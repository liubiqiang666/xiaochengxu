// pages/update/update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://m.qpic.cn/psb?/V10KNnd03rkHsX/5VyMRnSdar2RbtuVA5GXvDbk4q7HOdHIbVqScvptVqM!/b/dFMBAAAAAAAA&bo=OAQ8BQAAAAARBzU!&rf=viewer_4',
      'http://m.qpic.cn/psb?/V10KNnd03rkHsX/OKyGc4TxPMFt28eBHSJZZbDGGagStNt9m.PeY42VHhg!/b/dFMBAAAAAAAA&bo=OAQ8BQAAAAARFyU!&rf=viewer_4',
      'http://m.qpic.cn/psb?/V10KNnd03rkHsX/txq.I8E3osm0uomRc4mpk2.btHGBSTsqubY*j5lcWxM!/b/dL8AAAAAAAAA&bo=OAQ8BQAAAAARFyU!&rf=viewer_4'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
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
  qq:function(){
    wx.showToast({
      title: '内容已成功复制',
      icon: 'success',
      duration: 2000
    });
    wx.showModal({
      title: '提示',
      content: '下载链接已成功复制，前往浏览器打开即可下载',
      success (res) {
        if (res.confirm) {
          console.log('确定')
        } else if (res.cancel) {
          console.log('关闭')
        }
      }
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
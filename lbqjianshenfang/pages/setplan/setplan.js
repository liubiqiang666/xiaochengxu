// pages/setplan/setplan.js
var util = require('../../utils/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeName: '0' ,
    currentDate: new Date().getTime(),
    currentDateval: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    }
  },
  ftime(time) {
    if (time != "" && time != null && time != "null") {
      var datetime = new Date();
      datetime.setTime(time);
      var year = datetime.getFullYear();
      var month =
        datetime.getMonth() + 1 < 10
          ? "0" + (datetime.getMonth() + 1)
          : datetime.getMonth() + 1;
      var date =
        datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      var hour =
        datetime.getHours() < 10
          ? "0" + datetime.getHours()
          : datetime.getHours();
      var minute =
        datetime.getMinutes() < 10
          ? "0" + datetime.getMinutes()
          : datetime.getMinutes();
      var second =
        datetime.getSeconds() < 10
          ? "0" + datetime.getSeconds()
          : datetime.getSeconds();
      return (
        year +
        "年" +
        month +
        "月" +
        date +
        "日"
      );
    } else {
      return "";
    }
  },

  onInput(event) {
    let temp = this.ftime(event.detail)
    this.setData({
      currentDateval: event.detail,
      time: temp
    });
    console.log(event, this.data.currentDate);

  },
  oncancel(){
    this.setData({
      gg:false
    })
  },
  hh: function () {
    this.setData({
      gg: true
    })
  },
  mm: function () {
    this.setData({
    mm:this.data.time
    })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
    // console.log(event.detail)
  },
  onconfirm(event) {
    // let qwe = event.detail.value
    // console.log(qwe)
    let temp = this.ftime(event.detail)

    this.setData({
      currentDateval: event.detail,
      time: temp,
    });
    console.log(this.data.currentDate);
  },

  value:function(){
    this.setData({
      value:'2-3天'
    })
  },
  value1:function(){
    this.setData({
      value:'3-4天'
    })
  },
  value2:function(){
    this.setData({
      value:'4-5天'
    })
  },
  value3:function(){
    this.setData({
      value:'5-6天'
    })
  },
  kk:function(){
    this.setData({
      kk:'每周0-1小时'
    })
  },
  kk1:function(){
    this.setData({
      kk:'每周2-4小时'
    })
  },
  kk2:function(){
    this.setData({
      kk:'每周5-8小时'
    })
  },
  kk3:function(){
    this.setData({
      kk:'每周9+小时'
    })
  },
 
  /**
   * 
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
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
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
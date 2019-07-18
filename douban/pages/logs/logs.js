Page({
  data: {
    subjects_top250:[]
  },
  onLoad: function () {
    const _this = this;
    wx.request({
      url: "https://douban.uieee.com/v2/movie/top250?count=3",
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data.subjects)
        _this.setData({
          subjects_top250: res.data.subjects
        })
        console.log(res.data.subjects)
      }
    })
  }
})
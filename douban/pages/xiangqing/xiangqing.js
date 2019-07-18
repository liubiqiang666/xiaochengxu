Page({
  data: {
    subjects_top250: [],
    value: 3
  },
  onChange(event) {
    this.setData({
      value: event.detail
    });
  },
  onLoad: function () {
      const _this = this;
      wx.request({
        url: "https://douban.uieee.com/v2/movie/top250",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res.data)
          _this.setData({
            subjects_xsk: res.data.subjects
          })
        }
      }),
        
    wx.request({
      url: "https://douban.uieee.com/v2/movie/top250?count=1",
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
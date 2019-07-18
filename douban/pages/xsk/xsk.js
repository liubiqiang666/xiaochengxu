Page({
  data: {
    subjects_top250: [],
    value: 3,
     activeNames: ['1']
  },
  onChange(event) {
    this.setData({
      value: event.detail
    });
    this.setData({
      activeNames: event.detail
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
          subjects: res.data.subjects
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
      }),
      wx.request({
      url: "https://douban.uieee.com/v2/movie/celebrity/1044707",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res.data)
          _this.setData({
            subjects_yr: res.data
          })
          console.log(res.data)
        }
      }),
      wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/26942674",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res.data)
          _this.setData({
            subjects_xsk: res.data
          })
        }
      }),
      wx.request({
        url: "https://douban.uieee.com/v2/movie/subject/26942674/comments",
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res.data)
          _this.setData({
            subjects_pingjia: res.data
          })
        }
      }),
      wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/26942674",
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function (res) {
            console.log(res.data)
            _this.setData({
              subjects_ygp: res.data
            })
            console.log(res.data)
          }
        })
  }
})
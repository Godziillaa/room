var app = getApp()
Page({
  data: {
    lvl: 'VIP 1',
    userInfo: {},
    phone:'13191668863',
  },
  onLoad: function () {
    // console.log('onLoad')
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    });
  },
  dialNumber: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.phone
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '一起来打个盹吧',
      path: '/pages/home/home',
      imageUrl: '/resources/logo.png',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})

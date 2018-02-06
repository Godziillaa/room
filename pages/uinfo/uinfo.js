var app = getApp()
Page({
  data: {
    uinfo:{
      lvl: '普通会员',
      avatar: '',
      nickName:'',
      realname:'Ming Shi',
      phone:'131****8863',
      schoolhood:'1'
    },
    userInfo: {},
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  }
})

Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  requestVcode: function (e) {
    console.log('请求验证码')
  }
})
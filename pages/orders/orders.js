// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders:[
      {
        "id":"001234",
        "statu":1,
        "orderDate":"2017-11-09 11:02",
        "orderCode": "2017110932001",
        "roomCode":"01065541",
        "address":"北京市朝阳区德林园1号楼3单元901",
        "checkInDate":"2017-11-09 12:00",
        "checkOutDate":"",
        "bill":""
      },
      {
        "id": "001234",
        "statu": 2,
        "orderDate": "2017-11-09 11:02",
        "orderCode": "2017110932001",
        "roomCode": "01065541",
        "address": "北京市朝阳区德林园1号楼3单元901",
        "checkInDate": "2017-11-09 12:00",
        "checkOutDate": "2017-11-09 12:00",
        "bill": "198.00"
      },
      {
        "id": "001234",
        "statu": 3,
        "orderDate": "2017-11-09 11:02",
        "orderCode": "2017110932001",
        "roomCode": "01065541",
        "address": "北京市朝阳区德林园1号楼3单元901",
        "checkInDate": "2017-11-09 12:00",
        "checkOutDate": "2017-11-09 12:00",
        "bill": "198.00"
      }
    ]
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
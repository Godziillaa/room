var app = getApp();
Page({
  data: {
    msg:'12',
    lbs:{},
    currentLatitude: '',
    currentLongitude: '',
    chosen:{},
    markers: [{
      iconPath: "/resources/lbs-icon.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [
      // {
      //   id: 1,
      //   iconPath: '/resources/lbs-icon.png',
      //   position: {
      //     left: 10,
      //     top: 300 - 50,
      //     width: 20,
      //     height: 20
      //   },
      //   clickable: true
      // }
    ]
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId);
    (e.controlId == 1) && this.mapCtx.moveToLocation();
  },
  goLocation(e){
    wx.navigateTo({
      url: e.target.dataset.url
    })
  },
  getAdd:function(){
    var that=this;
    wx.chooseLocation({
      success:function(d){
        console.log(d);
        that.setData({
          chosen: d
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.mapCtx = wx.createMapContext('myMap')
    app.getLbs(function (_lbs) {
      that.setData({
        lbs: _lbs
      })
    })
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
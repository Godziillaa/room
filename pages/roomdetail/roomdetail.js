Page({
  data: {
    banner:{
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      indicatorColor: 'rgba(255,255,255,0.5)',
      activeColor: '#fff',
      autoplay: true,
      interval: 5000,
      duration: 1000
    },
    room:{
      id: '123',
      cover: '/resources/cover.jpg',
      code: '00123456789',
      address: '北京市朝阳区德林园1号楼3单元901',
      latitude: "39.90403",
      longitude: "116.407526",
      name: "王府井小区",
      rate: '10.00',
      cleaner: '50.00',
      square: '30',
      room: '3室1厅',
      window: '有窗',
      way: '南',
      feetip:'20分钟起订，每超过1分钟按照¥10.00/分钟收费',
      setting:{
        wifi:true,
        shower:true,
        table:true,
        bed:true,
        nosmk:true,
        tv:true,
        frez:true
      }
    }
  },
  openpath: function (e) {
    var obj = e.target.dataset, _lat = obj.lat, _lng = obj.lng, _name = obj.name;
    console.log(_lat, _lng, _name)
    wx.openLocation({
      latitude: Number(_lat),
      longitude: Number(_lng),
      name: _name,
      scale: 28
    })
  }
})
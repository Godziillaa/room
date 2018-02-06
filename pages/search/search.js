var app = getApp();
Page({
  data: {
    lbs: {
      latitude: "39.90403",
      longitude: "116.407526"
    },
    chosen: {},
    pin: {},
    show:false,
    selected:false,
    making:false,
    rooms:[
      {
        id: '123',
        making:false,
        cover: '/resources/cover.jpg',
        code: '00123456789',
        latitude: "39.90403",
        longitude: "116.407526",
        name:"王府井小区",
        address: '北京市朝阳区德林园1号楼3单元901',
        rate: '10.00',
        cleaner: '50.00',
        square: '30',
        room: '3室1厅',
        window: '有窗',
        way: '南'
      },
      {
        id: '234',
        making:true,
        cover: '/resources/cover.jpg',
        code: '00123456789',
        name: "王府井3区",
        latitude: "39.90327",
        longitude: "116.41508",
        address: '北京市朝阳区德林园1号楼3单元901',
        rate: '10.00',
        cleaner: '50.00',
        square: '30',
        room: '3室1厅',
        window: '有窗',
        way: '南',
        checkindate:'2017-11-28 12:30',
        tp:'16',
        total:'160.00'
      }
    ],
    markers: []
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  goLocation(e) {
    wx.navigateTo({
      url: e.target.dataset.url
    })
  },
  searchroom: function () {
    var that = this;
  },
  onLoad: function (options) {
    var that = this;
    that.mapCtx = wx.createMapContext('myMap')
    var _lbs={
      name: options.name,
      latitude: options.lat,
      longitude: options.lng
    }
    var _room = [
      {
        iconPath: "/resources/icon-room.png",
        id: 123,
        making:false,
        latitude: "39.90403",
        longitude: "116.407526",
        width: 60,
        height: 60
      },
      {
        iconPath: "/resources/icon-room-recommend.png",
        id: 234,
        making:true,
        latitude: "39.90327",
        longitude: "116.41508",
        width: 60,
        height: 60
      }
    ];
    var _markets=[],_pin = {
      iconPath: "/resources/icon-pin.png",
      id: 0,
      latitude: options.lat,
      longitude: options.lng,
      width: 33,
      height: 50
    };
    _markets.push(_pin);
    var _show=false;
    if (options.name == '王府井'){
      _show=true;
      for (var i in _room) {
        _markets.push(_room[i]);
      }
    }
    that.setData({
      markers: _markets,
      lbs: _lbs,
      show: _show
    })
  },
  regionchange:function(e) {
    var that = this;
    that.setData({
      selected: false,
      making:false
    })
    // console.log(e.type)
  },
  markertap:function(e) {
    var that=this,_id = e.markerId,_selected=false,_making=false;
    if(_id != 0){
      var _data=that.data.rooms;
      for (var i in _data){
        var _d = _data[i];
        if (_d.id == _id){
          if(_d.making){
            _making=_d;
          }else{
            _selected = _d;
          }
        }
      }
    }
    // console.log(_selected);
    that.setData({
      selected: _selected,
      making:_making
    })
  },
  controltap(e) {
    // console.log(e.controlId);
    (e.controlId == 1) && this.mapCtx.moveToLocation();
  },
  opendoor:function(e){
    wx.scanCode({
      onlyFromCamera: true,
      success: (d) => {

        console.log(d)
        wx.showModal({
          title: '提示',
          content: d,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })

      }
    })
  },
  openpath:function(e){
    var obj = e.target.dataset,_lat = obj.lat,_lng=obj.lng,_name=obj.name;
    console.log(_lat,_lng,_name)
    wx.openLocation({
      latitude: Number(_lat),
      longitude: Number(_lng),
      name: _name,
      scale: 28
    })
  }
})
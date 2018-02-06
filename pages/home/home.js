var app = getApp();
Page({
  data: {
    msg:'12',
    engage:false,
    showcard:false,
    nodata:false,
    index:0,
    total:0,
    lbs:{
      latitude:'39.90901',
      longitude:'116.4101'
    },
    currentLatitude: '',
    currentLongitude: '',
    chosen:{
      address:"北京市东城区王府井",
      errMsg:"chooseLocation:ok",
      latitude:39.91359,
      longitude:116.41212,
      name:"王府井"
    },
    pin:{},
    show: false,
    selected: false,
    rooms: [],
    markers:[
      {
        iconPath: "/resources/icon-pin.png",
        id: 0,
        latitude: '39.90901',
        longitude: '116.4101',
        width: 33,
        height: 50
      }
    ]
  },
  
  moveToLocation: function () {
    this.mapCtx.moveToLocation();
  },
  goLocation(e){
    wx.navigateTo({
      url: e.target.dataset.url
    })
  },
  switchroom: function (obj, _showcard, _index){
    var _page=this,_markers=_page.data.markers,_lat=obj.latitude,_lng=obj.longitude,_id=obj.id;
    for (var i in _markers){
      if (_markers[i].id !=0){
        if (_markers[i].id == _id) {
          _markers[i].iconPath = "/resources/icon-room-selected.png";
        } else {
          _markers[i].iconPath = "/resources/icon-room.png";
        }
      }
    }
    _page.setData({
      lbs: {
        latitude: _lat,
        longitude: _lng
      },
      selected: obj,
      showcard: _showcard,
      index: _index,
      markers: _markers
    })
  },
  getAdd:function(){
    var _page=this;
    wx.chooseLocation({
      success:function(d){
        console.log(d);
        var _markers=[
          {
            iconPath: "/resources/icon-pin.png",
            id: 0,
            latitude: d.latitude,
            longitude: d.longitude,
            width: 33,
            height: 50
          }
        ];
        _page.setData({
          chosen: d,
          lbs:d,
          markers: _markers
        })
      }
    });
  },
  searchroom:function(e){
    // wx.navigateTo({
    //   url: e.target.dataset.url
    // })
    // return false;
    wx.showLoading({
      title: '加载中',
      mask:true
    })
    var _page = this,_markers=[
      {
        iconPath: "/resources/icon-pin.png",
        id: 0,
        latitude: '39.90901',
        longitude: '116.4101',
        width: 33,
        height: 50
      }
    ];
    var _list=[
      {
        id: '123',
        making: false,
        cover: '/resources/cover.jpg',
        code: '00123456789',
        latitude: "39.90403",
        longitude: "116.407526",
        name: "王府井小区",
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
        making: true,
        cover: '/resources/cover.jpg',
        code: '0012343586',
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
        checkindate: '2017-11-28 12:30',
        tp: '16',
        total: '160.00'
      },
      {
        id: '238',
        making: false,
        cover: '/resources/cover.jpg',
        code: '001234560989',
        rate: '10.00',
        cleaner: '50.00',
        square: '30',
        room: '3室1厅',
        window: '有窗',
        way: '南',
        checkindate: '2017-11-28 12:30',
        tp: '16',
        total: '160.00',
        address:"北京市东城区东交民巷1号",
        latitude:"39.90282",
        longitude:"116.41776",
        name:"北京同仁医院"
      }
    ];
    for (var i in _list){
      var obj=_list[i];
      var _room={
        iconPath: "/resources/icon-room.png",
        id: obj["id"],
        latitude: obj["latitude"],
        longitude: obj["longitude"],
        width: 60,
        height: 60
      }
      _markers.push(_room);
    }
    setTimeout(function () {
      wx.hideLoading();
      _page.setData({
        markers: _markers,
        rooms:_list,
        total: _list.length,
        engage:true
      })
    }, 2000);
  },
  onLoad: function (options) {
    var _page = this;
    _page.mapCtx = wx.createMapContext('myMap')
    app.getLbs(function (_lbs) {
      // console.log(_lbs);
      _page.setData({
        // lbs: _lbs
      })
    });
  },
  regionchange: function (e) {
    var _page = this;
    // _page.setData({
    //   selected: false,
    //   showcard:false
    // })
    // console.log(e.type)
  },
  closecard:function(){
    var _page=this;
    _page.setData({
      selected: false,
      showcard: false
    })
  },
  markertap: function (e) {
    var _page = this,_id = e.markerId, _selected = false, _showcard=false,_index=0;
    if (_id != 0) {
      var _data = _page.data.rooms;
      for (var i in _data) {
        var _d = _data[i];
        if (_d.id == _id) {
          _selected = _d;
          _showcard = true;
          _index = i;
        }
      }
    }else{
      _selected = false;
      _showcard=false;
    }
    _page.switchroom(_selected, _showcard, _index);
  },
  prevcard:function(){
    var _page = this,_index = (_page.data.index - 1),_selected = false, _showcard = false;
    if(_index>=0){
      var _room = _page.data.rooms[_index];
      _selected = _room;
      _showcard = true;
      _page.switchroom(_selected, _showcard, _index);
    }
  },
  nextcard: function () {
    var _page = this, _index = (_page.data.index-0) + 1, _selected = false,  _showcard = false, _tol = _page.data.total;
    if (_index < _tol) {
      var _room = _page.data.rooms[_index];
      _selected = _room;
      _showcard = true;
      _page.switchroom(_selected, _showcard, _index);
    }
  },
  controltap(e) {
    // console.log(e.controlId);
    (e.controlId == 1) && this.mapCtx.moveToLocation();
  },
  opendoor: function (e) {
    wx.scanCode({
      onlyFromCamera: true,
      success: (d) => {
        wx.showLoading({
          title: '开锁中...',
          mask: true
        });
        // wx.showModal({
        //   title: '提示',
        //   content: d,
        //   success: function (res) {
        //     if (res.confirm) {
        //       console.log('用户点击确定')
        //     } else if (res.cancel) {
        //       console.log('用户点击取消')
        //     }
        //   }
        // })
        setTimeout(function(){
          wx.hideLoading();
          wx.showToast({
            title: '已经开锁',
            icon: 'success',
            duration: 2000
          })
        },2000);
      }
    })
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
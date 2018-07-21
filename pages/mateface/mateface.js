// pages/mateface.js
const util = require('../../utils/util.js')
var appInstance = getApp()
Page({
  data: {
    files: [],
    ifshow:''
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var json = {
          "status": 0,
          "message": "",
          "results": {
            "gender": "male",
            "expression": "happy",
            "beauty": 98.66,
            "age": 25
          }
        };
        that.setData({
          files: that.data.files.concat(res.tempFilePaths),
          ifshow:'hide',
          result: util.formatJson(json),
          result1: "{\n'image_id': 'O2alrpeRIXFejHWe6WlRqw==',\n'request_id':'153217279559f90561-5a30-4b8b-ba25-22a306471b7a',\n'time_used': 1032,\n'faces':[{\n'attributes': {\n'gender': {'value': 'Female'\n },\n'beauty': {\nfemale_score': 77.869,\n'male_score': 75.949\n}\n},\n'face_rectangle': {\n'width': 162,\n'top': 379,\n'left': 506,\n'height': 162\n},\n'face_token': '5d25ecc34711ec1dc8913ebf295e27f4'\n}\n]\n}"       
        });

        console.log(res.tempFilePaths)
        // wx.showToast({
        //   icon: "loading",
        //   title: "正在上传"
        // }),
        // wx.uploadFile({
        //   url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   header: {
        //   "Content-Type": "multipart/form-data"
        // },
        //   formData: {
        //     'user': 'test'
        //   },
        //   success: function (ress) {
        //     // wx.hideToast();  //隐藏Toast
        //     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        //     that.setData({
        //       files: that.data.files.concat(ress.tempFilePaths)
        //     });
        //   }
        // })
      }
    })
  },
  previewImage: function (e) {
    console.log(e)
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        wx.setStorageSync('sys', res)
        that.setData({
          viewsize:(res.screenWidth - 40) / 2
        })
      }
    })
    console.log(appInstance.globalData)
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
  loadImg:function(e){

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
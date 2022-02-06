// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    imgLink: "../../images/0-1.jpg",
    Height: "50px",
  },
  ChangeHeightAndpage: function (e) {
    var ScreenWidth = wx.getSystemInfoSync().windowWidth;
    var imgWidth = e.detail.width;
    var imgHeight = e.detail.height;
    var height = ScreenWidth * imgHeight / imgWidth + "px";
    this.setData({
      Height: height
    })
    this.sleep(5000);
    var x = 0,
      y = 1;
    while (0 <= x <= 3 && 1 <= y <= 9) {
      var text = "../../images/" + x + "-" + y + ".jpg";
      this.setData({
        imgLink: text
      })
      var ScreenWidth = wx.getSystemInfoSync().windowWidth;
      var imgWidth = e.detail.width;
      var imgHeight = e.detail.height;
      var height = ScreenWidth * imgHeight / imgWidth + "px";
      this.setData({
        Height: height
      })
      this.sleep(5000);
    }
    if (y == 9) {
      if (x == 3) {
        x = 0;
      } else {
        x++;
      }
      y = 1;
    } else {
      y++;
    }
  },
  sleep(Millis) {
    var now = new Date();
    var exitTime = now.getTime() + Millis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime) {
        return;
      }
    }
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})